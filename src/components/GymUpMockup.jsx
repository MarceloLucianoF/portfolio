import React, { useState, useEffect } from 'react';

// --- UTILITÁRIO DE TEMA ---
// Esta função injeta as classes certas baseadas no estado, ignorando o Tailwind global
const t = (isDark, lightClass, darkClass) => isDark ? darkClass : lightClass;

// --- SUB-COMPONENTES DE NAVEGAÇÃO ---
const NavButton = ({ icon, label, active, onClick, isDark }) => (
    <button 
        onClick={onClick}
        className={`flex flex-col items-center gap-1 p-2 w-16 transition-colors duration-300 ${
            active 
            ? t(isDark, 'text-blue-600', 'text-blue-400') 
            : t(isDark, 'text-gray-400 hover:text-gray-600', 'text-gray-500 hover:text-gray-300')
        }`}
    >
        <span className={`text-xl transition-transform duration-300 ${active ? 'scale-110 -translate-y-1' : ''}`}>{icon}</span>
        <span className={`text-[9px] font-bold transition-opacity duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}>{label}</span>
    </button>
);

// --- TELAS DO MOCKUP ---

const HomeScreen = ({ isDark }) => (
    <div className="space-y-6 animate-fade-in">
        <section className="grid grid-cols-3 gap-2 px-5 mt-5">
            <div className={`${t(isDark, 'bg-white border-gray-100', 'bg-gray-800 border-gray-700')} p-3 rounded-2xl shadow-sm border text-center flex flex-col justify-center`}>
                <span className="text-xl mb-1">🔥</span>
                <h3 className={`font-black text-lg ${t(isDark, 'text-gray-800', 'text-white')}`}>4</h3>
                <p className="text-[8px] text-gray-500 font-bold uppercase mt-1">Dias</p>
            </div>
            <div className={`${t(isDark, 'bg-white border-gray-100', 'bg-gray-800 border-gray-700')} p-3 rounded-2xl shadow-sm border text-center flex flex-col justify-center`}>
                <span className="text-xl mb-1">🏋️</span>
                <h3 className={`font-black text-lg ${t(isDark, 'text-gray-800', 'text-white')}`}>42</h3>
                <p className="text-[8px] text-gray-500 font-bold uppercase mt-1">Treinos</p>
            </div>
            <div className={`${t(isDark, 'bg-white border-gray-100', 'bg-gray-800 border-gray-700')} p-3 rounded-2xl shadow-sm border text-center flex flex-col justify-center`}>
                <span className="text-xl mb-1">⚖️</span>
                <h3 className={`font-black text-lg ${t(isDark, 'text-blue-600', 'text-blue-400')}`}>12t</h3>
                <p className="text-[8px] text-gray-500 font-bold uppercase mt-1">Volume</p>
            </div>
        </section>

        <section className="px-5">
            <div className="flex justify-between items-end mb-3">
                <h2 className={`text-base font-black ${t(isDark, 'text-gray-800', 'text-white')}`}>Treino do Dia</h2>
                <span className="text-[10px] text-blue-600 font-bold cursor-pointer hover:underline">Ver todos</span>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-3xl p-1 shadow-lg shadow-blue-600/30 group cursor-pointer relative overflow-hidden transition-transform active:scale-[0.98]">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/20 blur-2xl rounded-full"></div>
                <div className="bg-gray-900/40 backdrop-blur-sm rounded-[1.4rem] p-5 h-full border border-white/10 relative z-10">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-xl backdrop-blur-md">🦍</div>
                    </div>
                    <h3 className="text-xl font-black text-white mb-1">A - Superiores</h3>
                    <p className="text-blue-100 text-xs mb-4 opacity-80">Peitoral, ombros e tríceps.</p>
                    <div className="flex items-center justify-between mt-auto">
                        <div className="flex gap-3 text-[10px] font-bold text-white/80">
                            <span className="flex items-center gap-1">⏱ 55m</span>
                            <span className="flex items-center gap-1">📋 6 Ex.</span>
                        </div>
                        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-black text-xs shadow-md">INICIAR</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

const TrainingsScreen = ({ isDark }) => (
    <div className="px-5 mt-5 space-y-4 animate-fade-in">
        <h2 className={`text-xl font-black ${t(isDark, 'text-gray-800', 'text-white')} mb-4`}>Suas Fichas</h2>
        {[
            { title: "Treino A - Superiores", desc: "Força e Hipertrofia", icon: "🦍", color: "blue", tags: ["Avançado", "Última: Ontem"] },
            { title: "Treino B - Inferiores", desc: "Foco em Quadríceps", icon: "🦵", color: "green", tags: ["Avançado", "Última: Há 3 dias"] },
            { title: "Cardio e Core", desc: "Recuperação Ativa", icon: "🏃", color: "orange", tags: ["Iniciante", "Última: Hoje"] }
        ].map((train, i) => (
            <div key={i} className={`${t(isDark, 'bg-white border-gray-100', 'bg-gray-800 border-gray-700')} p-4 rounded-2xl shadow-sm border flex gap-4 cursor-pointer active:scale-[0.98] transition-transform`}>
                <div className={`w-14 h-14 rounded-xl ${t(isDark, 'bg-gray-100', 'bg-gray-700')} flex items-center justify-center text-2xl`}>{train.icon}</div>
                <div className="flex-1">
                    <h3 className={`font-bold text-sm ${t(isDark, 'text-gray-800', 'text-white')}`}>{train.title}</h3>
                    <p className="text-[10px] text-gray-500 mb-2">{train.desc}</p>
                    <div className="flex gap-2">
                        {train.tags.map((tag, j) => (
                            <span key={j} className={`text-[8px] font-bold ${t(isDark, 'bg-gray-100 text-gray-500', 'bg-gray-700 text-gray-400')} px-1.5 py-0.5 rounded uppercase`}>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        ))}
    </div>
);

const StatsScreen = ({ isDark }) => (
    <div className="px-5 mt-5 space-y-6 animate-fade-in">
        <h2 className={`text-xl font-black ${t(isDark, 'text-gray-800', 'text-white')}`}>Evolução</h2>
        
        <div className={`${t(isDark, 'bg-white border-gray-100', 'bg-gray-800 border-gray-700')} p-5 rounded-3xl shadow-sm border`}>
            <div className="flex justify-between items-end mb-4">
                <h3 className="text-xs font-bold text-gray-500 uppercase">Volume (kg)</h3>
                <span className={`text-[10px] font-bold ${t(isDark, 'text-blue-500 bg-blue-50', 'text-blue-400 bg-blue-900/30')} px-2 py-1 rounded`}>Últimos 7 dias</span>
            </div>
            <div className="flex items-end justify-between h-28 gap-2 relative">
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                    <div className={`w-full h-px ${t(isDark, 'bg-gray-300', 'bg-gray-600')}`}></div>
                    <div className={`w-full h-px ${t(isDark, 'bg-gray-300', 'bg-gray-600')}`}></div>
                    <div className={`w-full h-px ${t(isDark, 'bg-gray-300', 'bg-gray-600')}`}></div>
                </div>
                {[40, 80, 0, 60, 90, 30, 75].map((val, i) => (
                    <div key={i} className="w-full h-full flex flex-col justify-end items-center group relative z-10">
                        <div 
                            className={`w-full rounded-t-md transition-all duration-1000 ease-out ${val > 0 ? (t(isDark, 'bg-blue-500 hover:bg-blue-600', 'bg-blue-600 hover:bg-blue-500')) : 'bg-transparent'}`} 
                            style={{ height: `${val}%` }}
                        ></div>
                        <span className="text-[9px] font-bold text-gray-400 mt-2">{'DSTQQSS'[i]}</span>
                    </div>
                ))}
            </div>
        </div>

        <div>
            <h3 className={`text-sm font-bold ${t(isDark, 'text-gray-800', 'text-white')} mb-3`}>Histórico Recente</h3>
            <div className="space-y-3">
                {[
                    { name: "Treino A - Superiores", date: "Ontem", vol: "2.4t", time: "45m", icon: "🦍" },
                    { name: "Treino B - Inferiores", date: "Quinta-feira", vol: "3.1t", time: "55m", icon: "🦵" },
                    { name: "Cardio e Core", date: "Segunda-feira", vol: "--", time: "30m", icon: "🏃" },
                ].map((h, i) => (
                    <div key={i} className={`flex justify-between items-center ${t(isDark, 'bg-white border-gray-100', 'bg-gray-800 border-gray-700')} p-3 rounded-2xl shadow-sm border`}>
                        <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl ${t(isDark, 'bg-gray-100', 'bg-gray-700')} flex items-center justify-center text-lg`}>{h.icon}</div>
                            <div>
                                <p className={`font-bold text-xs ${t(isDark, 'text-gray-800', 'text-white')}`}>{h.name}</p>
                                <p className="text-[10px] text-gray-500">{h.date}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className={`font-black ${t(isDark, 'text-blue-600', 'text-blue-400')} text-sm`}>{h.vol}</p>
                            <p className="text-[10px] text-gray-500">⏱ {h.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const ProfileScreen = ({ isDark }) => (
    <div className="px-5 mt-5 space-y-6 animate-fade-in">
        <div className="flex flex-col items-center text-center mt-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-1 shadow-lg mb-3 relative">
                <div className={`w-full h-full ${t(isDark, 'bg-white', 'bg-gray-900')} rounded-full flex items-center justify-center overflow-hidden`}>
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcelo&backgroundColor=transparent" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 inset-x-0 flex justify-center">
                    <span className={`bg-blue-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full border-2 ${t(isDark, 'border-white', 'border-gray-900')}`}>PRO</span>
                </div>
            </div>
            <h2 className={`text-2xl font-black ${t(isDark, 'text-gray-800', 'text-white')} leading-tight`}>Marcelo Filho</h2>
            <p className="text-xs text-gray-500 font-bold mt-1">Software Dev & Criador do GymUp 💻🏋️</p>
        </div>

        <div className="grid grid-cols-3 gap-3">
            <div className={`${t(isDark, 'bg-white border-gray-100', 'bg-gray-800 border-gray-700')} p-3 rounded-2xl shadow-sm border text-center`}>
                <p className="text-[9px] text-gray-400 uppercase font-bold">Peso</p>
                <h3 className={`font-black ${t(isDark, 'text-gray-800', 'text-white')} text-lg`}>78<span className="text-[10px] text-gray-500 font-normal ml-0.5">kg</span></h3>
            </div>
            <div className={`${t(isDark, 'bg-white border-gray-100', 'bg-gray-800 border-gray-700')} p-3 rounded-2xl shadow-sm border text-center`}>
                <p className="text-[9px] text-gray-400 uppercase font-bold">Altura</p>
                <h3 className={`font-black ${t(isDark, 'text-gray-800', 'text-white')} text-lg`}>1.75<span className="text-[10px] text-gray-500 font-normal ml-0.5">m</span></h3>
            </div>
            <div className={`${t(isDark, 'bg-white border-gray-100', 'bg-gray-800 border-gray-700')} p-3 rounded-2xl shadow-sm border text-center`}>
                <p className="text-[9px] text-gray-400 uppercase font-bold">Objetivo</p>
                <h3 className={`font-black ${t(isDark, 'text-blue-600', 'text-blue-400')} text-xs mt-1.5 uppercase`}>Força</h3>
            </div>
        </div>

        <div className={`${t(isDark, 'bg-white border-gray-100 divide-gray-100', 'bg-gray-800 border-gray-700 divide-gray-700/50')} rounded-3xl shadow-sm border overflow-hidden divide-y`}>
            {[
                { icon: '⚙️', label: 'Configurações de Conta' },
                { icon: '🎯', label: 'Ajustar Metas' },
                { icon: '👨‍🏫', label: 'Meu Treinador' },
                { icon: '🚀', label: 'Sobre o GymUp' }
            ].map((item, i) => (
                <div key={i} className={`p-4 flex items-center justify-between cursor-pointer ${t(isDark, 'hover:bg-gray-50', 'hover:bg-gray-700/50')} transition-colors`}>
                    <div className="flex items-center gap-3">
                        <span className="text-lg">{item.icon}</span>
                        <span className={`text-sm font-bold ${t(isDark, 'text-gray-700', 'text-gray-300')}`}>{item.label}</span>
                    </div>
                    <span className={`text-sm ${t(isDark, 'text-gray-300', 'text-gray-600')}`}>➔</span>
                </div>
            ))}
        </div>
        
        <button className="w-full text-center text-xs font-bold text-red-500 py-2">
            Sair da conta
        </button>
    </div>
);

// --- COMPONENTE PRINCIPAL (O CELULAR) ---
export default function GymUpMockup() {
    const [activeTab, setActiveTab] = useState('home');
    const [isLoaded, setIsLoaded] = useState(false);
    
    // Semântica corrigida: false = Light, true = Dark
    const [isDarkMode, setIsDarkMode] = useState(false); 

    useEffect(() => {
        setTimeout(() => setIsLoaded(true), 100);
    }, []);

    return (
        <div className="flex justify-center items-center w-full py-10 relative">
            
            {/* BADGE DE INTERATIVIDADE PARA O RECRUTADOR */}
            <div className="absolute -top-4 right-1/2 translate-x-1/2 md:translate-x-0 md:top-0 md:right-4 z-50 flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full shadow-lg animate-bounce pointer-events-none">
                <span className="text-xs font-bold tracking-wide">✨ Mockup Interativo (Clique!)</span>
            </div>

            {/* Toggle de Dark Mode do Mockup */}
            <div className="absolute top-10 right-0 md:top-14 md:right-4 z-50 flex items-center gap-2">
                <button 
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`p-3 rounded-full shadow-xl text-xl border transition-all duration-300 hover:scale-110 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900'}`}
                    title="Alternar Tema do App"
                >
                    {isDarkMode ? '☀️' : '🌙'}
                </button>
            </div>

            {/* Container do Celular (A Moldura) */}
            <div className={`w-[340px] h-[680px] ${t(isDarkMode, 'bg-gray-50', 'bg-gray-900')} relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden border-[12px] border-gray-950 rounded-[3rem] transition-colors duration-500`}>
                
                {/* Dynamic Island (Câmera Fake) */}
                <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50">
                    <div className="w-24 h-6 bg-gray-950 rounded-b-xl"></div>
                </div>

                {/* CONTEÚDO ROLÁVEL COM BARRA INVISÍVEL */}
                <div className={`flex-1 overflow-y-auto pb-24 pt-6 transition-opacity duration-700 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    
                    {/* Renderização Condicional do Header */}
                    {(activeTab === 'home' || activeTab === 'trainings') && (
                        <header className={`px-5 pt-4 pb-5 flex justify-between items-center ${t(isDarkMode, 'bg-white', 'bg-gray-800')} shadow-sm rounded-b-[1.5rem] relative z-10 transition-colors duration-300`}>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-0.5 shadow-md">
                                    <div className={`w-full h-full ${t(isDarkMode, 'bg-white', 'bg-gray-900')} rounded-full flex items-center justify-center overflow-hidden`}>
                                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcelo&backgroundColor=transparent" alt="Avatar" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Bem-vindo,</p>
                                    <h2 className={`text-xl font-black ${t(isDarkMode, 'text-gray-800', 'text-white')} leading-tight`}>Marcelo 💪</h2>
                                </div>
                            </div>
                            <button className={`w-8 h-8 rounded-full ${t(isDarkMode, 'bg-gray-100 hover:bg-gray-200', 'bg-gray-700 hover:bg-gray-600')} flex items-center justify-center text-sm relative transition-colors`}>
                                🔔
                                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-transparent"></span>
                            </button>
                        </header>
                    )}

                    {/* RENDERS DAS TELAS */}
                    {activeTab === 'home' && <HomeScreen isDark={isDarkMode} />}
                    {activeTab === 'trainings' && <TrainingsScreen isDark={isDarkMode} />}
                    {activeTab === 'stats' && <StatsScreen isDark={isDarkMode} />}
                    {activeTab === 'profile' && <ProfileScreen isDark={isDarkMode} />}
                </div>

                {/* BOTTOM NAVIGATION (A Barra de Baixo) */}
                <div className={`absolute bottom-0 left-0 right-0 ${t(isDarkMode, 'bg-white/90 border-gray-200', 'bg-gray-900/90 border-gray-800')} backdrop-blur-xl border-t pb-2 z-50 rounded-b-[2.5rem] transition-colors duration-500`}>
                    <div className="flex justify-around items-center px-1 py-2">
                        <NavButton isDark={isDarkMode} icon="🏠" label="Início" active={activeTab === 'home'} onClick={() => setActiveTab('home')} />
                        <NavButton isDark={isDarkMode} icon="📋" label="Treinos" active={activeTab === 'trainings'} onClick={() => setActiveTab('trainings')} />
                        
                        {/* FAB Central */}
                        <div className="relative -top-5">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl text-white shadow-lg cursor-pointer hover:bg-blue-500 transition-transform active:scale-90">
                                +
                            </div>
                        </div>

                        <NavButton isDark={isDarkMode} icon="📊" label="Evolução" active={activeTab === 'stats'} onClick={() => setActiveTab('stats')} />
                        <NavButton isDark={isDarkMode} icon="👤" label="Perfil" active={activeTab === 'profile'} onClick={() => setActiveTab('profile')} />
                    </div>
                    
                    {/* Barra de Home do iOS */}
                    <div className={`w-32 h-1 ${t(isDarkMode, 'bg-gray-300', 'bg-gray-600')} mx-auto rounded-full mt-1 mb-1 transition-colors duration-500`}></div>
                </div>
            </div>
        </div>
    );
}