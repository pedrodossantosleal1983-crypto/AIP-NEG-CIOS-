// Catálogo de 30 produtos dropship da Amazon e Shopee
const products = [
    // Eletrônicos (1-10)
    {
        id: 1,
        name: "Fone de Ouvido Bluetooth 5.3 com Cancelamento de Ruído",
        price: 89.90,
        originalPrice: 159.90,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        supplier: "amazon",
        category: "eletronicos",
        rating: 4.5,
        sales: 1234,
        badge: "-44%"
    },
    {
        id: 2,
        name: "Smartwatch Pro com Monitor Cardíaco e Oxímetro",
        price: 149.90,
        originalPrice: 299.90,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
        supplier: "shopee",
        category: "eletronicos",
        rating: 4.7,
        sales: 892,
        badge: "TOP"
    },
    {
        id: 3,
        name: "Caixa de Som Bluetooth 20W à Prova D'Água",
        price: 79.90,
        originalPrice: 139.90,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
        supplier: "amazon",
        category: "eletronicos",
        rating: 4.3,
        sales: 2156,
        badge: null
    },
    {
        id: 4,
        name: "Power Bank 20000mAh Carregamento Rápido",
        price: 69.90,
        originalPrice: 119.90,
        image: "https://images.unsplash.com/photo-1609592424308-646921c2904e?w=400",
        supplier: "shopee",
        category: "eletronicos",
        rating: 4.6,
        sales: 3421,
        badge: "-42%"
    },
    {
        id: 5,
        name: "Webcam Full HD 1080p com Microfone",
        price: 99.90,
        originalPrice: 179.90,
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400",
        supplier: "amazon",
        category: "eletronicos",
        rating: 4.4,
        sales: 567,
        badge: null
    },
    {
        id: 6,
        name: "Mouse Gamer RGB 7200 DPI 7 Botões",
        price: 49.90,
        originalPrice: 89.90,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
        supplier: "shopee",
        category: "eletronicos",
        rating: 4.8,
        sales: 4532,
        badge: "HOT"
    },
    {
        id: 7,
        name: "Teclado Mecânico Gamer Switch Blue",
        price: 129.90,
        originalPrice: 249.90,
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=400",
        supplier: "amazon",
        category: "eletronicos",
        rating: 4.5,
        sales: 890,
        badge: null
    },
    {
        id: 8,
        name: "Suporte para Notebook Ajustável Alumínio",
        price: 59.90,
        originalPrice: 99.90,
        image: "https://images.unsplash.com/photo-1616353329437-9753a6975077?w=400",
        supplier: "shopee",
        category: "eletronicos",
        rating: 4.7,
        sales: 1234,
        badge: "-40%"
    },
    {
        id: 9,
        name: "Carregador Sem Fio Rápido 15W",
        price: 39.90,
        originalPrice: 69.90,
        image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=400",
        supplier: "amazon",
        category: "eletronicos",
        rating: 4.2,
        sales: 2156,
        badge: null
    },
    {
        id: 10,
        name: "Hub USB 7 Portas 3.0 com Fonte",
        price: 79.90,
        originalPrice: 129.90,
        image: "https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=400",
        supplier: "shopee",
        category: "eletronicos",
        rating: 4.4,
        sales: 678,
        badge: null
    },

    // Casa e Cozinha (11-20)
    {
        id: 11,
        name: "Air Fryer 4L Digital 1500W",
        price: 299.90,
        originalPrice: 499.90,
        image: "https://images.unsplash.com/photo-1626147116986-4601771470a6?w=400",
        supplier: "amazon",
        category: "casa",
        rating: 4.8,
        sales: 3456,
        badge: "MAIS VENDIDO"
    },
    {
        id: 12,
        name: "Liquidificador 900W 12 Velocidades",
        price: 89.90,
        originalPrice: 159.90,
        image: "https://images.unsplash.com/photo-1570222094114-28a9d8896b74?w=400",
        supplier: "shopee",
        category: "casa",
        rating: 4.5,
        sales: 1234,
        badge: null
    },
    {
        id: 13,
        name: "Jogo de Panelas Antiaderente 5 Peças",
        price: 149.90,
        originalPrice: 279.90,
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400",
        supplier: "amazon",
        category: "casa",
        rating: 4.6,
        sales: 892,
        badge: "-46%"
    },
    {
        id: 14,
        name: "Aspirador de Pó Robô Inteligente",
        price: 399.90,
        originalPrice: 799.90,
        image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400",
        supplier: "shopee",
        category: "casa",
        rating: 4.3,
        sales: 456,
        badge: null
    },
    {
        id: 15,
        name: "Purificador de Água 4 Estágios",
        price: 129.90,
        originalPrice: 229.90,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
        supplier: "amazon",
        category: "casa",
        rating: 4.7,
        sales: 1567,
        badge: null
    },
    {
        id: 16,
        name: "Cafeteira Elétrica 14 Xícaras",
        price: 79.90,
        originalPrice: 139.90,
        image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400",
        supplier: "shopee",
        category: "casa",
        rating: 4.4,
        sales: 2345,
        badge: null
    },
    {
        id: 17,
        name: "Organizador de Geladeira Kit 10 Peças",
        price: 49.90,
        originalPrice: 89.90,
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400",
        supplier: "amazon",
        category: "casa",
        rating: 4.5,
        sales: 3421,
        badge: "-44%"
    },
    {
        id: 18,
        name: "Toalhas de Banho Kit 4 Peças",
        price: 69.90,
        originalPrice: 119.90,
        image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=400",
        supplier: "shopee",
        category: "casa",
        rating: 4.6,
        sales: 1234,
        badge: null
    },
    {
        id: 19,
        name: "Luminária LED Inteligente RGB",
        price: 59.90,
        originalPrice: 99.90,
        image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400",
        supplier: "amazon",
        category: "casa",
        rating: 4.8,
        sales: 876,
        badge: "NOVO"
    },
    {
        id: 20,
        name: "Conjunto de Facas Profissionais 6 Peças",
        price: 99.90,
        originalPrice: 189.90,
        image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400",
        supplier: "shopee",
        category: "casa",
        rating: 4.7,
        sales: 654,
        badge: null
    },

    // Moda e Acessórios (21-30)
    {
        id: 21,
        name: "Mochila Antifurto com USB",
        price: 89.90,
        originalPrice: 159.90,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
        supplier: "amazon",
        category: "moda",
        rating: 4.6,
        sales: 2134,
        badge: null
    },
    {
        id: 22,
        name: "Óculos de Sol Polarizado UV400",
        price: 49.90,
        originalPrice: 89.90,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
        supplier: "shopee",
        category: "moda",
        rating: 4.4,
        sales: 3456,
        badge: "-44%"
    },
    {
        id: 23,
        name: "Relógio Masculino Esportivo",
        price: 79.90,
        originalPrice: 149.90,
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400",
        supplier: "amazon",
        category: "moda",
        rating: 4.5,
        sales: 1234,
        badge: null
    },
    {
        id: 24,
        name: "Carteira de Couro Legítimo",
        price: 39.90,
        originalPrice: 79.90,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400",
        supplier: "shopee",
        category: "moda",
        rating: 4.7,
        sales: 4567,
        badge: "TOP"
    },
    {
        id: 25,
        name: "Tênis Esportivo Running",
        price: 129.90,
        originalPrice: 249.90,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
        supplier: "amazon",
        category: "moda",
        rating: 4.3,
        sales: 890,
        badge: null
    },
    {
        id: 26,
        name: "Boné Aba Curva Premium",
        price: 29.90,
        originalPrice: 59.90,
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400",
        supplier: "shopee",
        category: "moda",
        rating: 4.5,
        sales: 2345,
        badge: "-50%"
    },
    {
        id: 27,
        name: "Cinto de Couro Social",
        price: 34.90,
        originalPrice: 69.90,
        image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400",
        supplier: "amazon",
        category: "moda",
        rating: 4.6,
        sales: 1234,
        badge: null
    },
    {
        id: 28,
        name: "Bolsa Feminina Transversal",
        price: 59.90,
        originalPrice: 109.90,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400",
        supplier: "shopee",
        category: "moda",
        rating: 4.8,
        sales: 1567,
        badge: null
    },
    {
        id: 29,
        name: "Pulseira Inteligente Fitness",
        price: 69.90,
        originalPrice: 129.90,
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
        supplier: "amazon",
        category: "moda",
        rating: 4.4,
        sales: 876,
        badge: null
    },
    {
        id: 30,
        name: "Óculos de Grau Armação Titanium",
        price: 99.90,
        originalPrice: 199.90,
        image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400",
        supplier: "shopee",
        category: "moda",
        rating: 4.7,
        sales: 543,
        badge: "-50%"
    }
];

// Função para formatar preço
function formatPrice(price) {
    return price.toFixed(2).replace('.', ',');
}

// Função para gerar estrelas de avaliação
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Renderizar produtos
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    grid.innerHTML = products.map(product => `
        <div class="product-card">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/400x250?text=Produto'">
            <div class="product-info">
                <div class="product-supplier">
                    <i class="fas fa-${product.supplier === 'amazon' ? 'amazon' : 'shopping-bag'}"></i>
                    ${product.supplier === 'amazon' ? 'Amazon' : 'Shopee'} Official
                </div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    <span class="stars">${generateStars(product.rating)}</span>
                    <span>(${product.sales} vendidos)</span>
                </div>
                <div class="product-price">
                    <span class="price-current">R$ ${formatPrice(product.price)}</span>
                    <span class="price-original">R$ ${formatPrice(product.originalPrice)}</span>
                </div>
                <button class="btn-add-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Adicionar ao Carrinho
                </button>
            </div>
        </div>
    `).join('');
}

// Inicializar quando carregar
document.addEventListener('DOMContentLoaded', renderProducts);