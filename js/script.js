// ============================================
// ТОВАРЫ (10 штук — женская одежда)
// ============================================
const products = [
    // ===== ПОВСЕДНЕВНЫЙ СТИЛЬ (3) =====
    {
        id: 1,
        name: 'Футболка с круглым вырезом',
        category: 'casual',
        price: 3990,
        oldPrice: null,
        rating: 4.8,
        image: 'img/product-1.jpg',
        description: 'Футболка создана из трикотажной хб ткани средней плотности, мягкой и приятной к телу.Эстетичный рисунок нанесен сзади и текст спереди.'
    },
    {
        id: 2,
        name: 'Джинсы багги с вышивкой',
        category: 'casual',
        price: 5990,
        oldPrice: 7990,
        rating: 4.7,
        image: 'img/product-2.jpg',
        description: 'Джинсы багги – это стильное и комфортное решение для создания модных образов на каждый день. Модель выполнена из мягкого хлопка и отличается высокой посадкой, которая подчеркивает талию и создает удлиненный силуэт. Широкие штанины,обеспечивают свободу движений и комфорт в течение всего дня. Оригинальная вышивка в виде бантиков на джинсах добавляет игривости и индивидуальности образу. Благодаря универсальному голубому цвету, эти джинсы легко сочетаются с различными верхами, от базовых футболок о стильных блузок. Это идеальный выбор для тех, кто ценит комфорт, стиль и оригинальность.'
    },
    {
        id: 3,
        name: 'Худи на молнии оверсайз',
        category: 'casual',
        price: 5490,
        oldPrice: null,
        rating: 4.6,
        image: 'img/product-3.jpg',
        description: 'Худи женское оверсайз на молнии с желтой надписью — удобная и стильная модель для повседневного гардероба.Выполнено из плотного премиального трикотажа футер 3-х нитка, которое хорошо держит форму, сохраняет тепло и подходит для прохладной погоды.'
    },

    // ===== ОФИЦИАЛЬНЫЙ СТИЛЬ (3) =====
    
    {
        id: 4,
        name: 'Классическая блузка белая',
        category: 'formal',
        price: 6990,
        oldPrice: null,
        rating: 4.9,
        image: 'img/product-4.jpg',
        description: 'Классическая блузка с длинными рукавами - это стильное и универсальное решение для создания как офисного, так и вечернего образа.V-образный вырез горловины добавляет блузке изюминку, делая ее нарядной и подходящей для особых случаев, таких как выпускной или праздничное мероприятие. Благодаря базовому дизайну, блузка легко комбинируется с различными предметами гардероба, позволяя создавать как строгие офисные луки, так и более свободные, повседневные образы. Блузка представлена в белом цвете, что делает ее еще более универсальной и подходящей для любого сезона.'
    },
    {
        id: 5,
        name: 'Пиджак приталенный классический',
        category: 'formal',
        price: 8990,
        oldPrice: 10990,
        rating: 4.8,
        image: 'img/product-5.jpg',
        description: 'Благодаря приталенному крою длинный классический пиджак с воротником стойкой не стесняет движений.Плотный материал добавляет элемент роскоши и уюта, что делает вещь особенно привлекательной в прохладные летние дни. Вечерний жакет с пуговицами - это идеальный вариант для тех, кто хочет выглядеть стильно и элегантно.'
    },
    {
        id: 6,
        name: 'Юбка-карандаш замшевая',
        category: 'formal',
        price: 4990,
        oldPrice: null,
        rating: 4.5,
        image: 'img/product-6.jpg',
        description: 'Женская юбка карандаш с разрезом – стильная находка для современной девушки. Эта модель выполнена из высококачественной экозамши в черном цвете, что гарантирует мягкий, приятный к телу материал.'
    },

    // ===== ВЕЧЕРНИЙ СТИЛЬ (2) =====
    {
        id: 7,
        name: 'Вечернее платье',
        category: 'evening',
        price: 12990,
        oldPrice: 15990,
        rating: 4.9,
        image: 'img/product-7.jpg',
        description: 'Это платье — идеальный выбор для тех, кто ценит минимализм и изящество. Оно подчеркивает фигуру и делает образ неотразимым. Атласная подкладка и тонкая талия создают гармонию и делают платье идеальным для любого вечернего образа.'
    },
    {
        id: 8,
        name: 'Платье-пиджак с кружевными рукавами ',
        category: 'evening',
        price: 9990,
        oldPrice: null,
        rating: 4.7,
        image: 'img/product-8.jpg',
        description: 'Элегантное чёрное платье из кружева. Классическое LBD, которое всегда актуально. Идеально для вечеринок и романтических вечеров.'
    },

    // ===== СПОРТИВНЫЙ СТИЛЬ (2) =====
    {
        id: 9,
        name: 'Спортивный костюм женский',
        category: 'sporty',
        price: 7490,
        oldPrice: 8990,
        rating: 4.6,
        image: 'img/product-9.jpg',
        description: 'Спортивный костюм двойка – стильное и практичное решение для повседневных образов и занятий спортом. Комплект состоит из свитшота на молнии (зипка, мастерка, спортивка) и удобных штаны на резинке с карманами. Универсальный фасон в стиле спорт шик подойдёт девушкам и подросткам, ценящим комфорт и трендовый молодежный дизайн.'
    },
    {
        id: 10,
        name: 'Спортивный костюм для фитнеса летний',
        category: 'sporty',
        price: 5490,
        oldPrice: null,
        rating: 4.8,
        image: 'img/product-10.jpg',
        description: 'Женский спортивный костюм премиум качества  — универсальная одежда.Данный комплект двойка с майкой и шортами в размере оверсайз подойдет для повседневной жизни, сна и отдыха дома ,йоги, спорта, фитнеса, зала и танцев, для бега.'
    }
];

// ============================================
// КОРЗИНА
// ============================================
let cart = [];

// ============================================
// ОТОБРАЖЕНИЕ ТОВАРОВ
// ============================================
function renderProducts(containerId, productList, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const items = limit ? productList.slice(0, limit) : productList;
    
    container.innerHTML = items.map(product => `
        <div class="product-card" data-id="${product.id}">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400x400/f0f0f0/666?text=SHOP.CO'">
            <h3>${product.name}</h3>
            <div class="rating">${'⭐'.repeat(Math.round(product.rating))} ${product.rating}/5</div>
            <div class="price">
                ${product.oldPrice ? `<span class="old-price">${product.oldPrice.toLocaleString()} ₽</span>` : ''}
                ${product.price.toLocaleString()} ₽
                ${product.oldPrice ? `<span class="discount">-${Math.round((1 - product.price/product.oldPrice) * 100)}%</span>` : ''}
            </div>
            <a href="product.html?id=${product.id}" class="btn btn-small">Подробнее</a>
        </div>
    `).join('');
}

// ============================================
// КАТАЛОГ С ФИЛЬТРАМИ
// ============================================
let selectedSize = 'M';
let maxPrice = 15000;

function loadCatalog() {
    const grid = document.getElementById('catalogGrid');
    if (!grid) return;
    
    const checkboxes = document.querySelectorAll('.filter-group input[type="checkbox"]:checked');
    const categories = Array.from(checkboxes).map(cb => cb.value);
    
    let filtered = products;
    
    if (categories.length > 0) {
        filtered = filtered.filter(p => categories.includes(p.category));
    }
    
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        maxPrice = parseInt(priceRange.value);
        document.getElementById('priceValue').textContent = maxPrice.toLocaleString();
        filtered = filtered.filter(p => p.price <= maxPrice);
    }
    
    filtered.sort((a, b) => b.rating - a.rating);
    
    document.getElementById('countDisplay').textContent = filtered.length;
    
    grid.innerHTML = filtered.map(product => `
        <div class="product-card" data-id="${product.id}">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400x400/f0f0f0/666?text=SHOP.CO'">
            <h3>${product.name}</h3>
            <div class="rating">${'⭐'.repeat(Math.round(product.rating))} ${product.rating}/5</div>
            <div class="price">
                ${product.oldPrice ? `<span class="old-price">${product.oldPrice.toLocaleString()} ₽</span>` : ''}
                ${product.price.toLocaleString()} ₽
                ${product.oldPrice ? `<span class="discount">-${Math.round((1 - product.price/product.oldPrice) * 100)}%</span>` : ''}
            </div>
            <a href="product.html?id=${product.id}" class="btn btn-small">Подробнее</a>
        </div>
    `).join('');
}

function applyFilters() {
    loadCatalog();
}

function resetFilters() {
    document.querySelectorAll('.filter-group input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.getElementById('priceRange').value = 15000;
    document.getElementById('priceValue').textContent = '15 000';
    loadCatalog();
}

function selectSize(el) {
    document.querySelectorAll('.size-options span').forEach(s => s.classList.remove('active'));
    el.classList.add('active');
    selectedSize = el.dataset.size;
}

// ============================================
// СТРАНИЦА ТОВАРА
// ============================================
function loadProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    const product = products.find(p => p.id === productId);
    if (!product) {
        document.getElementById('productDetail').innerHTML = '<p style="text-align:center;padding:40px;">Товар не найден</p>';
        return;
    }
    
    document.getElementById('productBreadcrumb').textContent = product.name;
    
    document.getElementById('productDetail').innerHTML = `
        <div class="product-detail-image">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/500x500/f0f0f0/666?text=SHOP.CO'">
        </div>
        <div class="product-detail-info">
            <h1>${product.name}</h1>
            <div class="product-rating">${'⭐'.repeat(Math.round(product.rating))} ${product.rating}/5 <span>(отзывы)</span></div>
            <div class="product-price-block">
                <span class="price">${product.price.toLocaleString()} ₽</span>
                ${product.oldPrice ? `<span class="old-price">${product.oldPrice.toLocaleString()} ₽</span>` : ''}
                ${product.oldPrice ? `<span class="discount-badge">-${Math.round((1 - product.price/product.oldPrice) * 100)}%</span>` : ''}
            </div>
            <p class="product-description">${product.description}</p>
            <div class="product-options">
                <div class="option-group">
                    <label>Выбери размер:</label>
                    <div class="size-options" id="productSizeOptions">
                        <span class="size-option" data-size="XS" onclick="selectProductSize(this)">XS</span>
                        <span class="size-option" data-size="S" onclick="selectProductSize(this)">S</span>
                        <span class="size-option active" data-size="M" onclick="selectProductSize(this)">M</span>
                        <span class="size-option" data-size="L" onclick="selectProductSize(this)">L</span>
                        <span class="size-option" data-size="XL" onclick="selectProductSize(this)">XL</span>
                    </div>
                </div>
            </div>
            <div class="product-actions">
                <button class="btn btn-primary btn-large" onclick="addToCart(${product.id})">Добавить в корзину</button>
            </div>
        </div>
    `;
    
    const recommendations = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);
    
    renderProducts('recommendations', recommendations);
}

function selectProductSize(el) {
    document.querySelectorAll('#productSizeOptions .size-option').forEach(s => s.classList.remove('active'));
    el.classList.add('active');
}

// ============================================
// КОРЗИНА (ФУНКЦИИ)
// ============================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartUI();
    alert('✅ ' + product.name + ' добавлен в корзину!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    renderCart();
}

function changeQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    
    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== productId);
    }
    updateCartUI();
    renderCart();
}

function updateCartUI() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const counters = document.querySelectorAll('#cartCount');
    counters.forEach(el => {
        el.textContent = count;
        el.style.display = count > 0 ? 'flex' : 'none';
    });
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const saved = localStorage.getItem('cart');
    if (saved) {
        try {
            cart = JSON.parse(saved);
        } catch (e) {
            cart = [];
        }
    }
    updateCartUI();
}

function renderCart() {
    const container = document.getElementById('cartItems');
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = '<div class="empty-cart">🛒 Корзина пуста. <a href="catalog.html">Перейти в каталог</a></div>';
        updateCartSummary();
        return;
    }
    
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/80x80/f0f0f0/666?text=SHOP.CO'">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>Размер: M</p>
                <p>Цвет: Стандартный</p>
                <div class="cart-item-price">${item.price.toLocaleString()} ₽</div>
            </div>
            <div class="cart-item-quantity">
                <button onclick="changeQuantity(${item.id}, -1)">−</button>
                <span class="item-quantity">${item.quantity}</span>
                <button onclick="changeQuantity(${item.id}, 1)">+</button>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
        </div>
    `).join('');
    
    updateCartSummary();
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = Math.round(subtotal * 0.2);
    const delivery = subtotal > 0 ? 500 : 0;
    const total = subtotal - discount + delivery;
    
    const elements = {
        subtotal: document.getElementById('subtotal'),
        discount: document.getElementById('discount'),
        delivery: document.getElementById('delivery'),
        total: document.getElementById('total')
    };
    
    if (elements.subtotal) elements.subtotal.textContent = subtotal.toLocaleString() + ' ₽';
    if (elements.discount) elements.discount.textContent = '-' + discount.toLocaleString() + ' ₽';
    if (elements.delivery) elements.delivery.textContent = delivery.toLocaleString() + ' ₽';
    if (elements.total) elements.total.textContent = total.toLocaleString() + ' ₽';
}

// ============================================
// ПОИСК
// ============================================
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = this.value.trim().toLowerCase();
            if (!query) {
                alert('⚠️ Введите название товара для поиска');
                return;
            }
            
            const results = products.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.description.toLowerCase().includes(query)
            );
            
            if (results.length === 0) {
                alert('🔍 Ничего не найдено по запросу "' + query + '"');
                return;
            }
            
            const grid = document.getElementById('catalogGrid');
            if (grid) {
                grid.innerHTML = results.map(product => `
                    <div class="product-card" data-id="${product.id}">
                        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400x400/f0f0f0/666?text=SHOP.CO'">
                        <h3>${product.name}</h3>
                        <div class="rating">${'⭐'.repeat(Math.round(product.rating))} ${product.rating}/5</div>
                        <div class="price">
                            ${product.oldPrice ? `<span class="old-price">${product.oldPrice.toLocaleString()} ₽</span>` : ''}
                            ${product.price.toLocaleString()} ₽
                            ${product.oldPrice ? `<span class="discount">-${Math.round((1 - product.price/product.oldPrice) * 100)}%</span>` : ''}
                        </div>
                        <a href="product.html?id=${product.id}" class="btn btn-small">Подробнее</a>
                    </div>
                `).join('');
                document.getElementById('countDisplay').textContent = results.length;
            } else {
                alert('🔍 Найдено товаров: ' + results.length + '\nПерейдите в каталог, чтобы увидеть результаты.');
            }
        }
    });
}

// ============================================
// ПРОМОКОД
// ============================================
function applyPromo() {
    const input = document.getElementById('promoInput');
    if (!input) return;
    
    const code = input.value.trim();
    if (!code) {
        alert('⚠️ Введите промокод');
        return;
    }
    
    if (code.toLowerCase() === 'shop2025') {
        alert('🎉 Промокод применен! Скидка 20% уже учтена в итоговой сумме.');
    } else {
        alert('❌ Промокод "' + code + '" не найден. Попробуйте SHOP2025');
    }
}

// ============================================
// ПОДПИСКА
// ============================================
function subscribeNewsletter() {
    const input = document.getElementById('newsletterEmail');
    if (!input) return;
    
    const email = input.value.trim();
    if (!email) {
        alert('⚠️ Введите ваш Email для подписки');
        return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
        alert('⚠️ Введите корректный Email (пример: name@mail.ru)');
        return;
    }
    
    alert('✅ Спасибо за подписку!\n\nНа указанный адрес ' + email + ' мы отправим уведомление о новых акциях.');
    input.value = '';
}

// ============================================
// ОФОРМЛЕНИЕ ЗАКАЗА
// ============================================
function checkout() {
    if (cart.length === 0) {
        alert('🛒 Ваша корзина пуста! Добавьте товары перед оформлением заказа.');
        return;
    }
    
    const name = document.getElementById('orderName')?.value;
    const email = document.getElementById('orderEmail')?.value;
    const address = document.getElementById('orderAddress')?.value;
    const agree = document.getElementById('orderAgree')?.checked;
    
    if (!name || !email || !address) {
        alert('⚠️ Пожалуйста, заполните все обязательные поля формы (Имя, Email, Адрес)');
        return;
    }
    
    if (!agree) {
        alert('⚠️ Пожалуйста, согласитесь с условиями обработки данных');
        return;
    }
    
    alert('✅ Заказ оформлен!\n\nСпасибо за покупку! Мы свяжемся с вами в ближайшее время.\n\n📦 Заказ отправлен в обработку.');
    
    cart = [];
    updateCartUI();
    renderCart();
}

// ============================================
// ОБРАТНАЯ СВЯЗЬ
// ============================================
function sendFeedback() {
    const name = document.getElementById('feedbackName')?.value;
    const email = document.getElementById('feedbackEmail')?.value;
    const subject = document.getElementById('feedbackSubject')?.value;
    const message = document.getElementById('feedbackMessage')?.value;
    const agree = document.getElementById('feedbackAgree')?.checked;

    if (!name || !email || !message) {
        alert('⚠️ Пожалуйста, заполните все обязательные поля (Имя, Email, Сообщение)');
        return;
    }

    if (!agree) {
        alert('⚠️ Пожалуйста, согласитесь с условиями обработки данных');
        return;
    }

    alert('✅ Сообщение отправлено!\n\n' +
          '📌 Тема: ' + subject + '\n' +
          '👤 Отправитель: ' + name + ' (' + email + ')\n\n' +
          '📝 Сообщение:\n' + message + '\n\n' +
          'Мы свяжемся с вами в ближайшее время!');
    
    document.getElementById('feedbackName').value = '';
    document.getElementById('feedbackEmail').value = '';
    document.getElementById('feedbackMessage').value = '';
    document.getElementById('feedbackAgree').checked = false;
}

// ============================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
    setupSearch();
    
    const path = window.location.pathname;
    
    if (path.includes('catalog.html')) {
        loadCatalog();
    } else if (path.includes('product.html')) {
        loadProduct();
    } else if (path.includes('cart.html')) {
        renderCart();
    } else if (path.includes('size-guide.html')) {
        // Ничего дополнительного не нужно
    } else if (path.includes('contacts.html')) {
        // Ничего дополнительного не нужно
    } else {
        // Главная страница
        const newArrivals = products.filter(p => p.id >= 1 && p.id <= 4);
        const bestSellers = products.filter(p => p.id >= 7 && p.id <= 10);
        
        renderProducts('newArrivals', newArrivals);
        renderProducts('bestSellers', bestSellers);
    }
    
    updateCartUI();
});