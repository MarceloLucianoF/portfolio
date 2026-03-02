import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export default async function handler(req, res) {
  try {
    // Monta a URL absoluta do seu deploy (funciona local e na Vercel)
    const proto = req.headers["x-forwarded-proto"] || "https";
    const host = req.headers.host;
    const origin = `${proto}://${host}`;

    // Carrega sua “fonte única de verdade”
    const dataRes = await fetch(`${origin}/resume.json`, { cache: "no-store" });
    if (!dataRes.ok) throw new Error("Não consegui ler /resume.json");
    const data = await dataRes.json();

    const pdfDoc = await PDFDocument.create();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    const A4 = [595.28, 841.89];
    const margin = 48;
    const lineGap = 6;

    let page = pdfDoc.addPage(A4);
    let { width, height } = page.getSize();
    let y = height - margin;

    const newPage = () => {
      page = pdfDoc.addPage(A4);
      ({ width, height } = page.getSize());
      y = height - margin;
    };

    const ensureSpace = (needed) => {
      if (y - needed < 70) newPage();
    };

    const draw = (text, size = 10, bold = false, color = rgb(0, 0, 0)) => {
      ensureSpace(size + lineGap);
      page.drawText(text, {
        x: margin,
        y,
        size,
        font: bold ? fontBold : font,
        color,
        maxWidth: width - margin * 2,
      });
      y -= size + lineGap;
    };

    const wrap = (text, maxChars = 95) => {
      const words = String(text || "").split(/\s+/);
      const lines = [];
      let line = "";

      for (const w of words) {
        const test = line ? `${line} ${w}` : w;
        if (test.length > maxChars) {
          if (line) lines.push(line);
          line = w;
        } else {
          line = test;
        }
      }
      if (line) lines.push(line);
      return lines;
    };

    const section = (title) => {
      y -= 6;
      draw(title, 12, true);
      // linha fina
      page.drawLine({
        start: { x: margin, y: y + 2 },
        end: { x: width - margin, y: y + 2 },
        thickness: 1,
        color: rgb(0.9, 0.9, 0.9),
      });
      y -= 10;
    };

    // HEADER
    draw(data.name, 20, true);
    draw(data.title, 11, false, rgb(0.2, 0.2, 0.2));
    draw(
      `${data.location || ""} • ${data.email || ""}${data.phone ? ` • ${data.phone}` : ""}`,
      10,
      false,
      rgb(0.3, 0.3, 0.3)
    );
    y -= 6;

    // LINKS
    if (data.links) {
      const links = [
        data.links.portfolio && `Portfólio: ${data.links.portfolio}`,
        data.links.linkedin && `LinkedIn: ${data.links.linkedin}`,
        data.links.github && `GitHub: ${data.links.github}`,
      ].filter(Boolean);

      links.forEach((l) => draw(l, 9, false, rgb(0.25, 0.25, 0.25)));
      y -= 10;
    }

    // RESUMO
    section("Resumo");
    wrap(data.summary, 100).forEach((ln) => draw(ln, 10));
    y -= 6;

    // SKILLS
    section("Competências");
    wrap((data.skills || []).join(" • "), 105).forEach((ln) => draw(ln, 10));
    y -= 6;

    // EXPERIÊNCIA
    section("Experiência");
    for (const exp of data.experience || []) {
      draw(`${exp.role} — ${exp.company}`, 11, true);
      draw(`${exp.period || ""}${exp.location ? ` | ${exp.location}` : ""}`, 9, false, rgb(0.35, 0.35, 0.35));

      for (const b of exp.bullets || []) {
        wrap(`• ${b}`, 105).forEach((ln) => draw(ln, 10));
      }

      y -= 8;
    }

    // FORMAÇÃO
    section("Formação");
    for (const ed of data.education || []) {
      draw(`${ed.course} — ${ed.institution}`, 10, true);
      const line = `${ed.period || ""}${ed.details ? ` | ${ed.details}` : ""}`.trim();
      if (line) draw(line, 9, false, rgb(0.35, 0.35, 0.35));
      y -= 6;
    }

    // PROJETOS
    section("Projetos");
    for (const p of data.projects || []) {
      draw(p.name, 10, true);
      if (p.stack?.length) draw(`Stack: ${p.stack.join(", ")}`, 9, false, rgb(0.35, 0.35, 0.35));
      for (const b of p.bullets || []) {
        wrap(`• ${b}`, 105).forEach((ln) => draw(ln, 10));
      }
      y -= 6;
    }

    const pdfBytes = await pdfDoc.save();

    const filename = "Curriculo_Marcelo_Luciano_Filho.pdf";
    const forceDownload = String(req.query?.download || "").toLowerCase() === "1";

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `${forceDownload ? "attachment" : "inline"}; filename="${filename}"`
    );
    res.status(200).send(Buffer.from(pdfBytes));
  } catch (err) {
    res.status(500).json({ error: String(err?.message || err) });
  }
}