import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  try {
    // Lendo o JSON diretamente do sistema de arquivos (muito mais rápido e seguro na Vercel)
    const jsonPath = path.join(process.cwd(), 'public', 'resume.json');
    const fileContents = fs.readFileSync(jsonPath, 'utf8');
    const data = JSON.parse(fileContents);

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595.28, 841.89]); // A4 portrait
    const { width, height } = page.getSize();

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    const margin = 48;
    let y = height - margin;

    const drawText = (text, size, isBold = false, color = rgb(0, 0, 0)) => {
      const f = isBold ? fontBold : font;
      page.drawText(text, { x: margin, y, size, font: f, color });
      y -= size + 6;
    };

    // Header
    drawText(data.name, 20, true);
    drawText(data.title, 11, false, rgb(0.2, 0.2, 0.2));
    drawText(`${data.location} • ${data.email} • ${data.phone}`, 10, false, rgb(0.25, 0.25, 0.25));
    y -= 8;

    // Links
    drawText(`LinkedIn: ${data.links.linkedin}`, 9, false, rgb(0.15, 0.15, 0.15));
    drawText(`GitHub: ${data.links.github}`, 9, false, rgb(0.15, 0.15, 0.15));
    drawText(`Portfólio: ${data.links.portfolio}`, 9, false, rgb(0.15, 0.15, 0.15));
    y -= 14;

    // Summary
    drawText("Resumo", 12, true);
    
    // wrap simples
    const wrap = (text, maxLen = 95) => {
      const words = text.split(" ");
      const lines = [];
      let line = "";
      for (const w of words) {
        const test = line ? `${line} ${w}` : w;
        if (test.length > maxLen) {
          lines.push(line);
          line = w;
        } else line = test;
      }
      if (line) lines.push(line);
      return lines;
    };
    
    wrap(data.summary, 95).forEach((ln) => drawText(ln, 10));
    y -= 10;

    // Skills
    drawText("Competências", 12, true);
    const skillsLine = data.skills.join(" • ");
    wrap(skillsLine, 100).forEach((ln) => drawText(ln, 10));
    y -= 10;

    // Experience
    drawText("Experiência", 12, true);
    for (const exp of data.experience) {
      drawText(`${exp.role} — ${exp.company}`, 11, true);
      drawText(`${exp.period} | ${exp.location}`, 9, false, rgb(0.3, 0.3, 0.3));
      for (const b of exp.bullets) {
        wrap(`• ${b}`, 100).forEach((ln) => drawText(ln, 10));
      }
      y -= 8;
      if (y < 90) {
        y = height - margin;
        pdfDoc.addPage([595.28, 841.89]);
      }
    }

    // Education
    drawText("Formação", 12, true);
    for (const ed of data.education) {
      drawText(`${ed.course} — ${ed.institution}`, 10, true);
      drawText(`${ed.period}${ed.details ? ` | ${ed.details}` : ""}`, 9, false, rgb(0.3, 0.3, 0.3));
      y -= 6;
    }

    // Projects
    y -= 8;
    drawText("Projetos", 12, true);
    for (const p of data.projects) {
      drawText(p.name, 10, true);
      drawText(`Stack: ${p.stack.join(", ")}`, 9, false, rgb(0.3, 0.3, 0.3));
      for (const b of p.bullets) {
        wrap(`• ${b}`, 100).forEach((ln) => drawText(ln, 10));
      }
      y -= 6;
    }

    const pdfBytes = await pdfDoc.save();

    res.setHeader("Content-Type", "application/pdf");
    // "inline" abre no navegador, "attachment" força o download direto. Recomendo attachment!
    res.setHeader("Content-Disposition", 'attachment; filename="Curriculo_Marcelo_Luciano_Filho.pdf"');
    res.status(200).send(Buffer.from(pdfBytes));
  } catch (err) {
    res.status(500).json({ error: String(err?.message || err) });
  }
}