// Dados simulados de notícias
const newsData = [
    {
        id: 1,
        title: "Novo comeback quebra recorde de visualizações no primeiro dia",
        category: "comeback",
        description: "O grupo alcançou marcas históricas nas plataformas globais de streaming com seu novo single.",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        title: "Confira o TOP 10 da semana no Circle Chart",
        category: "charts",
        description: "Domínio completo nas paradas digitais e físicas. Veja quais músicas estão no topo.",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        title: "Anunciados os novos grupos confirmados para a turnê mundial",
        category: "events",
        description: "Várias cidades pela América Latina e América do Norte receberão shows exclusivos.",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        title: "Teasers do novo mini-álbum são divulgados e agitam as redes",
        category: "comeback",
        description: "Conceito futurista e produções visuais chamaram a atenção do público antes do lançamento.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=500&q=80"
    }
];

// Elementos do DOM
const newsGrid = document.getElementById('news-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const themeToggle = document.getElementById('theme-toggle');

// Função para renderizar notícias
function renderNews(items) {
    newsGrid.innerHTML = '';
    items.forEach(item => {
        const card = document.createElement('article');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="card-img">
            <div class="card-body">
                <span class="card-category">${item.category}</span>
                <h2 class="card-title">${item.title}</h2>
                <p class="card-desc">${item.description}</p>
            </div>
        `;
        newsGrid.appendChild(card);
    });
}

// Filtro por Categoria
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');
        if (category === 'all') {
            renderNews(newsData);
        } else {
            const filtered = newsData.filter(news => news.category === category);
            renderNews(filtered);
        }
    });
});

// Alternador de Tema Claro/Escuro
themeToggle.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.body.removeAttribute('data-theme');
        themeToggle.textContent = '🌙 Dark';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️ Light';
    }
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderNews(newsData);
});