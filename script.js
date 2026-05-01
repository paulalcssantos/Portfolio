const pt = {
    nav: { about: 'Sobre', skills: 'Skills', experience: 'Trajetória', classes: 'Aulas', lectures: 'Palestras' },
    hero: { 
        roleDescription: 'SQL Developer | Data Analyst | Community Leader', 
        subtitle: 'Cientista da Computação apaixonada por transformar dados em decisões estratégicas, pela educação e por abrir caminhos para mulheres na tecnologia.', 
        cta: 'Contato' 
    },
    about: { 
        summary: 'Trabalho com dados há mais de 5 anos, com foco em SQL, otimização de performance e construção de análises que apoiam decisões. Já atuei na melhoria de consultas complexas, alcançando reduções de até 99% no tempo de execução, tornando processos mais eficientes e confiáveis. Além do lado técnico, carrego um propósito muito forte na educação e no apoio a outras mulheres.', 
        bookTitle: 'Mulheres na Inteligência Artificial', 
        bookStatus: 'Coautora • Lançamento 2026',
        bookDesc: 'Uma obra que reúne o conhecimento técnico e as histórias de resiliência de mulheres que estão moldando o futuro da tecnologia e da Inteligência Artificial.'
    },
    skills: { 
        techTitle: 'Habilidades Técnicas', 
        categories: {
            lang: 'Linguagens',
            db: 'Bancos de Dados',
            tools: 'Visualização de Dados',
            idioms: 'Idiomas'
        },
        technical: {
            languages: [{name: 'T-SQL', icon: 'database'}, {name: 'PL/SQL', icon: 'server'}, {name: 'Python', icon: 'code'}],
            databases: [{name: 'SQL Server', icon: 'database'}, {name: 'Oracle', icon: 'box'}],
            tools: [{name: 'Stimulsoft', icon: 'file-text'}, {name: 'Power BI', icon: 'bar-chart'}, {name: 'Tableau', icon: 'pie-chart'}],
            idioms: [{name: 'Inglês', level: 'Avançado - C1', icon: 'languages'}, {name: 'Português', level: 'Nativo', icon: 'user'}]
        }
    },
    experienceSection: {
        title: 'Trajetória',
        work: [
            { role: 'Analista e Desenvolvedora de Sistemas', 
                company: 'Engeman Software de Manutenção', 
                period: '2022 - 2026', 
                description: ['Desenvolvimento e otimização de consultas SQL complexas em SQL Server e Oracle (T-SQL e PL/SQL), com reduções superiores a 99% no tempo de execução de processos críticos. ', 'Criação e manutenção de relatórios dinâmicos e dashboards personalizados em Stimulsoft, transformando dados brutos em insights confiáveis para apoio à tomada de decisão gerencial. ', 'Redução de gargalos operacionais por meio da melhoria de fluxos de dados e do alinhamento entre soluções técnicas e necessidades do negócio. ', 'Condução de treinamentos técnicos para equipes internas e clientes, capacitando usuários a utilizar ferramentas e relatórios de forma autônoma. '] },
            { role: 'Desenvolvedora de Software', 
                company: 'Uaisoft Sistemas de Gestão', 
                period: '2020 - 2022', 
                description: [' Desenvolvimento e manutenção de funcionalidades em sistema ERP, utilizando a linguagem C#, garantindo estabilidade, desempenho e evolução contínua do sistema. ', 'Criação e otimização de consultas SQL complexas para extração e análise de dados relevantes, apoiando diretamente a tomada de decisões estratégicas. ', 'Identificação e correção de problemas e bugs no sistema, contribuindo para a qualidade e confiabilidade do ERP.', 'Desenvolvimento de relatórios personalizados em Stimulsoft e manutenção de relatórios em Crystal Reports, assegurando precisão e consistência das informações entregues aos stakeholders. '] }
        ],
        voluntary: [
            { role: 'Diretora', 
                company: 'WorldWide Women in Tech', 
                period: '2022 - Presente', 
                description: ['Diretora da organização sem fins lucrativos WorldWide Women in Tech, liderando iniciativas voltadas ao fortalecimento da participação de mulheres em STEM (Ciência, Tecnologia, Engenharia e Matemática).', 'Responsável pela coordenação de programas de mentoria, organização de eventos e desenvolvimento de parcerias com organizações e instituições de ensino.', 'Atuo na gestão da comunidade e na criação de oportunidades de desenvolvimento profissional para mulheres na tecnologia e áreas relacionadas.'] },
            { role: 'Instrutora', 
                company: 'WoMakersCode', 
                period: '2025 - Presente', 
                description: ['Instrutora voluntária no Bootcamp de BI da WoMakersCode, ministrando aulas gravadas sobre Bancos de Dados SQL, Pipelines de Dados e processos de ETL. ', 'Responsável por explicar fundamentos de bancos de dados, conceitos de SQL e boas práticas. ', 'Contribuindo para a formação de mulheres em tecnologia ao unir teoria e prática por meio de exercícios aplicados. '] },
            { role: 'Voluntária', 
                company: 'Reprograma', 
                period: '2024', 
                description: ['Voluntária na organização sem fins lucrativos Reprograma, auxiliando na criação de conteúdos educativos sobre Inteligência Artificial, incluindo artigos, posts em redes sociais e materiais para workshops.  '] }
        ],
        international: [
            { role: 'Embaixadora Global', 
                company: 'United Leaders Global', 
                period: '2026 - Presente', 
                description: ['Como Embaixadora Global na United Leaders Global, represento o Brasil dentro de uma rede internacional de líderes emergentes comprometidos com o desenvolvimento da juventude e a colaboração global.'] },
            { role: 'NextGen Women Leaders Fellow', 
                company: 'United Leaders Global', 
                period: '2025', 
                description: ['O NextGen Women Leaders Fellowship foi um programa internacional de seis meses focado em desenvolvimento de liderança, networking e fortalecimento feminino em contextos globais. Contou com a participação de 90 mulheres de diferentes países ao redor do mundo, sendo eu a única representante baseada no Brasil.'] },            
            { role: 'Aspire Leaders Program Almuni', 
                company: 'Harvard/Aspire Institute', 
                period: '2025', 
                description: ['O Programa Aspire Leaders é composto por dois módulos projetados para capacitar os participantes com habilidades essenciais de liderança e resolução de problemas. O Módulo 1 focou no desenvolvimento pessoal e profissional por meio de uma avaliação de liderança baseada em pontos fortes e de recursos para construção de carreira, co-criados com a Harvard Business School. O Módulo 2 explorou liderança, confiança, IA e impacto na comunidade por meio do curso Aspire Horizons, desenvolvido e ministrado por professores de Harvard.'] }
        ]
    },
    educationSection: { 
        title: 'Formação', 
        quote: '"Reconhecida pela Universidade de Itaúna como a aluna com o melhor desempenho na graduação em Ciência da Computação (2022)"',
        items: [
            { degree: 'Bacharelado em Ciência da Computação', institution: 'Universidade de Itaúna', period: '2019-2022', description: 'Foco em Engenharia de Software e Banco de Dados.' },
            { degree: 'Pós-Graduação (Especialização) em Data Science', institution: 'Descomplica Faculdade Digital', period: '2023-2024', description: 'Especialização em Machine Learning e Análise Preditiva.' }
        ]
    },
    mediaSection: {
        classesTitle: 'Aulas Gravadas',
        classesIntro: 'Momentos de compartilhamento técnico e capacitação em ferramentas de dados, com aulas desenvolvidas e ministradas por mim.',
        lecturesTitle: 'Palestras & Eventos',
        feedbackTitle: 'Feedbacks Recebidos',
        classes: [
            { title: 'Banco de Dados Relacionais e SQL', location: 'WoMakersCode', image: 'assets/img/aula1.jpg', desc: 'Uma das aulas do módulo de Banco de Dados SQL do Bootcamp de BI da WoMakersCode.' },
            { title: 'Desafio Pipeline ETL', location: 'WoMakersCode', image: 'assets/img/aula2.jpg', desc: 'Uma das aulas do módulo Desafio de Pipeline ETL do Bootcamp de BI da WoMakersCode.' },
            { title: 'BigQuery', location: 'Meetup Tech', image: 'assets/img/aula3.jpg', desc: 'Aula demonstrativa sobre atribuição de dados na jornada do cliente (utilizando SQL em ambiente analítico).'},
            { title: 'Código Binário', location: 'AMELIAS EM TECH', image: 'assets/img/aula4.jpg', desc: 'Aula introdutória do meu projeto para meninas de 10 a 15 anos.' }
    ],
    feedbacks: [
        'assets/img/feedback1.jpg',
        'assets/img/feedback2.jpg',
        'assets/img/feedback3.jpg'
    ],
        lectures: [           
            { title: 'Reprograma | 2023', desc: 'Bate-papo com a turma de Python, contando sobre a minha trajetória e como é ser mulher na tecnologia.', image: 'assets/img/talk1.jpg' },
            { title: 'ArcelorMittal | 2024', desc: 'Roda de Conversa: A importância da representatividade feminina.', image: 'assets/img/talk2.jpg' },
            { title: 'WWWiT | 2025', desc: 'Roda de Conversa: Ciência por Elas - Histórias que Mudaram o Mundo.', image: 'assets/img/talk3.jpg' },
            { title: 'UEMG | 2025', desc: 'Roda de Conversa: Carreira, impacto e saúde mental na tecnologia.', image: 'assets/img/talk4.jpg' }
        ]
    },
    upcomingProject: { 
        title: 'AMELIAS EM TECH', 
        description: 'Um projeto dedicado a ensinar tecnologia para meninas de forma gratuita, com material autoral e exclusivo.', 
        status: 'Em Desenvolvimento', 
        link: 'https://ameliasemtech.com.br',
        cta: 'Conheça o projeto'
    },
    newsletterSection: {
        title: 'Newsletter',
        intro: '"Vozes e Dados" é minha newsletter no LinkedIn, onde exploro dados, diversidade, histórias inspiradoras e insights do universo tech.',
        cta: 'Ler no LinkedIn →',
        editions: [
            { title: 'Programar: é como planejar um jantar!', date: 'Fev/25', desc: 'Sobre planejamento, dados e boas práticas em SQL.', img: 'assets/img/news1.png', link: 'https://www.linkedin.com/pulse/programar-%C3%A9-como-planejar-um-jantar-paula-luiza-tyikf' },            
            { title: 'Entre Queries, Sonhos e Mistérios', date: 'Mar/25', desc: 'PySpark, SQL interativo em jogos e plataformas que tornam o aprendizado mais divertido.', img: 'assets/img/news3.png', link: 'https://www.linkedin.com/pulse/entre-queries-sonhos-e-mist%C3%A9rios-paula-luiza-yq56f' },
            { title: 'Além da Superfície: O "Como" por Trás dos Dados', date: 'Abr/25', desc: 'Entender os processos por trás dos dados é tão crucial quanto os dados em si.', img: 'assets/img/news2.jpg', link: 'https://www.linkedin.com/pulse/al%C3%A9m-da-superf%C3%ADcie-o-como-por-tr%C3%A1s-dos-dados-paula-luiza-mz3kf' }
        ]
    },
    footer: { description: 'Transformando o futuro através dos dados e do empoderamento feminino.', 
        quickLinks: 'Links Rápidos', 
        contact: 'Contato', 
        contactLabel: 'Vamos Conversar?',
        cta: 'Entrar em Contato', 
        ctaTitle: 'Construindo o futuro com dados.',
        copy: 'Todos os direitos reservados.' }
};

const en = {
    nav: { about: 'About', skills: 'Skills', experience: 'Journey', classes: 'Classes', lectures: 'Talks' },
    hero: {
        roleDescription: 'SQL Developer | Data Analyst | Community Leader', 
        subtitle: 'Computer Scientist passionate about turning data into strategic decisions, education, and opening paths for women in technology.', 
        cta: 'Contact' },
    about: { 
        summary: 'I have been working with data for over 5 years, with a focus on SQL, performance optimization, and building analyses that support decision-making. I have worked on improving complex queries, achieving reductions of up to 99% in execution time, making processes more efficient and reliable. Beyond the technical side, I’m deeply committed to education and to supporting other women.',
        bookTitle: 'Women in Artificial Intelligence',
        bookStatus: 'Co-author • 2026 Release',
        bookDesc: 'A book that brings together technical knowledge and stories of resilience from women shaping the future of technology and artificial intelligence.'
    },
    skills: { 
        techTitle: 'Hard Skills', 
        categories: {
            lang: 'Languages',
            db: 'Databases',
            tools: 'Data Visualization ',
            idioms: 'Languages'
        },
        technical: {
            languages: [{name: 'T-SQL', icon: 'database'}, {name: 'PL/SQL', icon: 'server'}, {name: 'Python', icon: 'code'}],
            databases: [{name: 'SQL Server', icon: 'database'}, {name: 'Oracle', icon: 'box'}],
            tools: [{name: 'Stimulsoft', icon: 'file-text'}, {name: 'Power BI', icon: 'bar-chart'}, {name: 'Tableau', icon: 'pie-chart'}],
            idioms: [{name: 'English', level: 'Advanced - C1 Level', icon: 'languages'}, {name: 'Portuguese', level: 'Native', icon: 'user'}]
        }
    },
    experienceSection: {
        title: 'Journey',
        work: [
            { role: 'Systems & Development Analyst', 
                company: 'Engeman Software de Manutenção', 
                period: '2022 - 2026', 
                description: ['Developed and optimized complex SQL queries in SQL Server and Oracle (T-SQL & PL/SQL), contributing to performance improvements above 99% in critical processes and significantly reducing execution time.', 'Designed and maintained dynamic reports and customized dashboards using Stimulsoft, transforming raw data into reliable, business-oriented insights for managerial decision-making.', 'Reduced operational bottlenecks by improving data workflows and aligning technical solutions with business needs.', 'Delivered technical training sessions for internal teams and clients, enabling users to independently and effectively use reporting and data tools.'] },
            { role: 'Software Developer ', 
                company: 'Uaisoft Sistemas de Gestão', 
                period: '2020 - 2022', 
                description: [' Developed and maintained ERP system features, using C#, ensuring system stability, performance, and continuous improvement. ', 'Created and optimized complex SQL queries to extract and analyze relevant data, directly supporting business and strategic decision-making. ', 'Identified and resolved system issues and bugs, contributing to software quality and reliability.', 'Developed custom reports using Stimulsoft and maintained reports in Crystal Reports, ensuring data accuracy and consistency for stakeholders.'] }
        ],
        voluntary: [
            { role: 'Director', 
                company: 'WorldWide Women in Tech', 
                period: '2022 - Present', 
                description: ['Director of the non-profit organization WorldWide Women in Tech, leading initiatives aimed at strengthening women’s participation in STEM (Science, Technology, Engineering, and Mathematics).', 'Responsible for coordinating mentorship programs, organizing events, and developing partnerships with organizations and educational institutions.', 'I work on community management and on creating professional development opportunities for women in technology and related fields.'] },
            { role: 'Instructor', 
                company: 'WoMakersCode',
                period: '2025 - Present', 
                description: ['Volunteer instructor in the BI Bootcamp by WoMakersCode, teaching recorded lessons on SQL Databases I, Data Pipelines, and ETL processes.', 'Responsible for explaining database fundamentals, SQL concepts, and best practices.', 'Contributing to the training of women in technology by combining theory and practice through applied exercises.'] },
            { role: 'Volunteer', 
                company: 'Reprograma', 
                period: '2024', 
                description: ['Volunteer at the nonprofit organization Reprograma, assisting in the creation of educational content on Artificial Intelligence, including articles, social media posts, and materials for workshops.'] }
        ],
        international: [
            { role: 'Global Ambassador', 
                company: 'United Leaders Global', 
                period: '2026 - Present', 
                description: ['As a Global Ambassador at United Leaders Global, I represent Brazil within an international network of emerging leaders committed to youth empowerment and global collaboration.'] },
            { role: 'NextGen Women Leaders Fellow', 
                company: 'United Leaders Global', 
                period: '2025', 
                description: ['The NextGen Women Leaders Fellowship was a six-month international program focused on leadership development, networking, and empowering women in global contexts. It brought together 90 women from different countries around the world, and I was the only participant based in Brazil.'] },            
            { role: 'Aspire Leaders Program Alumni', 
                company: 'Harvard/Aspire Institute', 
                period: '2025', 
                description: ['The Aspire Leaders Program consists of two modules designed to equip participants with critical leadership and problem-solving skills. Module 1 focused on personal and professional development through a strengths-based leadership assessment and career-building resources co-created with Harvard Business School. Module 2 explored leadership, trust, AI, and community impact through the Aspire Horizons Course, designed and delivered by Harvard faculty.'] }
        ]
    },
    educationSection: { 
        title: 'Education', 
        quote: '"Recognized by University of Itaúna as the top-performing student in the Bachelor`s Degree in Computer Science (2022)."',
        items: [
            { degree: 'Bachelor’s Degree in Computer Science', 
                institution: 'Universidade de Itaúna', 
                period: '2019-2022', 
                description: 'Foco em Engenharia de Software e Banco de Dados.' },
            { degree: 'Specialization in Data Science', 
                institution: 'Descomplica Faculdade Digital', 
                period: '2023-2024', 
                description: 'Especialização em Machine Learning e Análise Preditiva.' }
        ]
    },
    mediaSection: {
        classesTitle: 'Recorded Classes',
        classesIntro: 'Moments of technical knowledge sharing and training in data tools, with classes developed and delivered by me.',
        lecturesTitle: 'Talks & Events',
        feedbackTitle: 'Feedback Received',
        classes: [
            { title: 'Relational Databases and SQL', location: 'WoMakersCode', image: 'assets/img/aula1.jpg', desc: 'One of the classes from the SQL Database module of the BI Bootcamp at WoMakersCode.' },
            { title: 'ETL Pipeline Challenge', location: 'WoMakersCode', image: 'assets/img/aula2.jpg', desc: 'One of the classes from the ETL Pipeline Challenge module of the BI Bootcamp at WoMakersCode.' },
            { title: 'BigQuery', location: 'Meetup Tech', image: 'assets/img/aula3.jpg', desc: 'Demo class on data attribution in the customer journey (using SQL in an analytical environment).'},
            { title: 'Binary Code', location: 'AMELIAS EM TECH', image: 'assets/img/aula4.jpg', desc: 'An introductory class for my project, designed for girls aged 10 to 15.' }
        ],
        feedbacks: [
        'assets/img/feedback1.jpg',
        'assets/img/feedback2.jpg',
        'assets/img/feedback3.jpg'
        ],
        lectures: [           
            { title: 'Reprograma | 2023', desc: 'Talk with the Python class, sharing my journey and what it’s like to be a woman in technology.', image: 'assets/img/talk1.jpg' },
            { title: 'ArcelorMittal | 2024', desc: 'Discussion Circle: The Importance of Female Representation.', image: 'assets/img/talk2.jpg' },
            { title: 'WWWiT | 2025', desc: 'Discussion Circle: Science by Women – Stories That Changed the World.', image: 'assets/img/talk3.jpg' },
            { title: 'UEMG | 2025', desc: 'Discussion Circle: Career, Impact, and Mental Health in Technology.', image: 'assets/img/talk4.jpg' }
        ]
    },
    upcomingProject: { 
        title: 'AMELIAS EM TECH', 
        description: 'A project dedicated to teaching technology to girls for free, with original and exclusive materials.', 
        status: 'In Development', 
        link: 'https://ameliasemtech.com.br',
        cta: 'Explore the project' },
    newsletterSection: { 
        title: 'Newsletter', 
        intro: '"Vozes e Dados" is my LinkedIn newsletter, where I explore data, diversity, inspiring stories, and insights from the tech world.',
        cta: 'Read on LinkedIn →',
        editions: [
            { title: 'Programming is like planning a dinner!', date: 'Feb/25', desc: 'About planning, data, and best practices in SQL.', img: 'assets/img/news1.png', link: 'https://www.linkedin.com/pulse/programar-%C3%A9-como-planejar-um-jantar-paula-luiza-tyikf' },            
            { title: 'Between Queries, Dreams, and Mysteries', date: 'Mar/25', desc: 'PySpark, interactive SQL in games, and platforms that make learning more fun.', img: 'assets/img/news3.png', link: 'https://www.linkedin.com/pulse/entre-queries-sonhos-e-mist%C3%A9rios-paula-luiza-yq56f' },
            { title: 'Beyond the Surface: The “How” Behind the Data', date: 'Apr/25', desc: 'Understanding the processes behind the data is just as crucial as the data itself.', img: 'assets/img/news2.jpg', link: 'https://www.linkedin.com/pulse/al%C3%A9m-da-superf%C3%ADcie-o-como-por-tr%C3%A1s-dos-dados-paula-luiza-mz3kf' }
        ]},
    footer: { description: 'Transformando o futuro através dos dados e do empoderamento feminino.', 
        quickLinks: 'Links Rápidos', 
        contact: 'Contact', 
        contactLabel: "Let's Connect",
        cta: 'Get in Touch', 
        copy: 'All rights reserved.' }
};

const translations = { pt, en };
let currentLang = 'pt';

let currentTab = 'work';

function updateContent() {
    const content = translations[currentLang];
    
    // Simple texts
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        const keys = key.split('.');
        let val = content;
        keys.forEach(k => val = val ? val[k] : '');
        el.innerText = val;
    });

    // Specific Rendering
    renderSkills();
    renderEducation();
    renderExperience(currentTab); 
    renderMedia();
    renderUpcoming();
    renderNewsletter();
    
    document.getElementById('lang-toggle').innerText = currentLang === 'pt' ? 'ENGLISH' : 'PORTUGUÊS';
    lucide.createIcons();
}


function renderSkills() {
    const container = document.getElementById('skills-grid');
    if (!container) return; // Evita erro se o container não existir na página

    const langContent = translations[currentLang];
    const tech = langContent.skills.technical;
    const cats = langContent.skills.categories;

    const categoriesData = [
        { title: cats.lang, items: tech.languages },
        { title: cats.db, items: tech.databases },
        { title: cats.tools, items: tech.tools },
        { title: cats.idioms, items: tech.idioms }
    ];

    container.innerHTML = categoriesData.map(cat => `
        <div class="bg-autumn-950 p-8 rounded-2xl border border-autumn-400 shadow-sm hover:scale-105">
            <h4 class="text-[12px] font-bold uppercase text-autumn-400 mb-6 tracking-widest">${cat.title}</h4>
            <div class="space-y-4">
                ${cat.items.map(item => `
                    <div class="flex items-center gap-3">
                        <i data-lucide="${item.icon}" class="text-autumn-300 w-5"></i>
                        <div class="flex flex-col">
                            <span class="text-sm font-sans text-autumn-100">${item.name}</span>
                            ${item.level ? `<span class="text-[10px] opacity-90 text-autumn-100 italic">${item.level}</span>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function renderExperience(tab) {
    const container = document.getElementById('experience-container');
    const items = translations[currentLang].experienceSection[tab];
    container.innerHTML = items.map(exp => `
        <div class="bg-autumn-50 p-8 rounded-3xl border border-autumn-700 hover:border-autumn-300 transition-all">
            <div class="flex justify-between items-start mb-6">
                <div>
                    <h3 class="text-2xl font-bold text-autumn-950">${exp.role}</h3>
                    <p class="text-terracotta uppercase font-bold text-xs tracking-widest">${exp.company}</p>
                </div>
                <span class="text-[10px] font-black uppercase text-autumn-100 bg-autumn-900 px-3 py-1.5 rounded-lg border border-autumn-200">${exp.period}</span>
            </div>
            <ul class="space-y-3">
                ${exp.description.map(d => `<li class="flex gap-3 text- opacity-95"><div class="w-1.5 h-1.5 bg-terracotta rounded-full mt-1.5"></div>${d}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

function renderEducation() {
    const items = translations[currentLang].educationSection.items;
    document.getElementById('education-items').innerHTML = items.map(i => `
        <div class="border-l-2 border-terracotta pl-8 relative">
            <div class="absolute -left-1.5 top-0 w-3 h-3 bg-terracotta rounded-full"></div>
            <span class="text-[10px] font-bold text-autumn-500 uppercase mb-2 block">${i.period}</span>
            <h4 class="text-xl font-bold text-autumn-950 uppercase">${i.degree}</h4>
            <p class="text-sm opacity-90">${i.institution}</p>
        </div>
    `).join('');
}

function renderMedia() {
    const media = translations[currentLang].mediaSection;
    
    // Classes
    document.getElementById('media-classes-grid').innerHTML = media.classes.map(c => `
    <div class="group bg-white rounded-3xl overflow-hidden shadow-sm border border-autumn-200 transition-all hover:shadow-md">
        <div class="w-full">
            <img src="${c.image}" class="w-full h-auto block transition-transform duration-700 group-hover:scale-105" alt="${c.title}">
        </div>
        <div class="p-5">
            <div class="flex items-center gap-2 mb-1">
                <i data-lucide="map-pin" class="w-3 h-3 text-terracotta"></i>
                <span class="text-[9px] font-black uppercase text-terracotta tracking-widest">${c.location}</span>
            </div>
            <h4 class="text-lg font-bold text-autumn-900 leading-tight">${c.title}</h4>
             <p class="text-sm text-autumn-700 mt-2 font-sans leading-relaxed">${c.desc}</p>
        </div>
    </div>
`).join('');

    // 2. Renderiza os Feedbacks 
    document.getElementById('feedback-column').innerHTML = media.feedbacks.map((f, index) => `
        <div class="feedback-card bg-white p-2 rounded-2xl shadow-md border border-white hover:scale-105  transition-all">
            <img src="${f}" class="w-full h-auto rounded-xl" alt="Feedback de aluno">
        </div>
    `).join('');

    // Lectures
    document.getElementById('media-lectures').innerHTML = media.lectures.map(l => `
        <div class="bg-autumn-50 rounded-2xl overflow-hidden group border border-autumn-100">
            <div class="h-48 overflow-hidden relative">
                <img src="${l.image}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-autumn-950/20 group-hover:bg-transparent transition-all"></div>
            </div>
            <div class="p-6">
                <h4 class="font-bold text-lg mb-2">${l.title}</h4>
                <p class="text-sm opacity-90 leading-relaxed">${l.desc}</p>
            </div>
        </div>
    `).join('');
}

function renderUpcoming() {
    const proj = translations[currentLang].upcomingProject;
    document.getElementById('upcoming-project-data').innerHTML = `
        <div class="flex flex-col lg:flex-row items-center gap-16">
            <div class="lg:w-2/3">
                <div class="bg-white/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">${proj.status}</div>
                <h2 class="text-6xl font-sans mb-8 leading-tight">${proj.title}</h2>
                <p class="text-xl opacity-90 mb-10 leading-relaxed">${proj.description}</p>
                <a href="${proj.link}" target="_blank" class="bg-white text-terracotta px-12 py-5 rounded-xl font-black text-xs uppercase shadow-2xl hover:scale-105 transition-all inline-block">${proj.cta}</a>
            </div>
            <div class="lg:w-1/3 flex justify-center">
                <div class="w-56 h-56 flex items-center justify-center shadow-2xl">
                    <img src="assets/img/logoAmelias.png" class="w-full h-full object-contain">
                </div>
            </div>
        </div>
    `;
}

function renderNewsletter() {
    const news = translations[currentLang].newsletterSection;
    document.getElementById('newsletter-editions').innerHTML = news.editions.map(ed => `
        <div class="bg-white rounded-2xl overflow-hidden border border-autumn-200 group">
            <div class="h-44 overflow-hidden"><img src="${ed.img}" class="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"></div>
            <div class="p-8">
                <div class="flex justify-between items-center text-[9px] font-black uppercase text-terracotta mb-4">
                    <span>${ed.date}</span>
                    <span class="bg-autumn-50 px-2 py-1 rounded">Vozes e Dados</span>
                </div>
                <h4 class="font-bold text-xl mb-3">${ed.title}</h4>
                <p class="text-sm opacity-80 mb-8 leading-relaxed">${ed.desc}</p>
                <a href="${ed.link}" target="_blank" class="text-[12px] font-black uppercase text-terracotta hover:underline">${news.cta}</a>
            </div>
        </div>
    `).join('');
}

// Global Events
document.addEventListener('DOMContentLoaded', () => {
    updateContent();
    
    document.getElementById('lang-toggle').addEventListener('click', () => {
        currentLang = currentLang === 'pt' ? 'en' : 'pt';
        updateContent();
    });

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentTab = e.target.getAttribute('data-tab'); 

            document.querySelectorAll('.tab-btn').forEach(b => {
                b.classList.remove('bg-autumn-950', 'text-white');
                b.classList.add('text-autumn-600');
            });
            e.target.classList.add('bg-autumn-950', 'text-white');
            renderExperience(currentTab); 
        });
    });
    
});

const menuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        if (navLinks.classList.contains('hidden')) {
            navLinks.classList.remove('hidden');
            navLinks.classList.add('flex'); 
        } else {
            navLinks.classList.add('hidden');
            navLinks.classList.remove('flex'); 
        }
        
        const icon = menuBtn.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });

    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.add('hidden');
            navLinks.classList.remove('flex');
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    });
}