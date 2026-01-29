// App behavior: carrinho, modais e interações
let cart = JSON.parse(localStorage.getItem('aip_cart') || '[]');

function saveCart() {
  localStorage.setItem('aip_cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const countEl = document.getElementById('cartCount');
  if (!countEl) return;
  const totalQty = cart.reduce((s, item) => s + item.qty, 0);
  countEl.textContent = totalQty;
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return showNotification('Produto não encontrado');
  const existing = cart.find(i => i.id === productId);
  if (existing) existing.qty += 1; else cart.push({ id: productId, qty: 1, price: product.price, name: product.name, image: product.image });
  saveCart();
  showNotification('Adicionado ao carrinho');
}

function toggleCart() {
  const modal = document.getElementById('cartModal');
  if (!modal) return;
  modal.classList.toggle('active');
  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  if (!container || !totalEl) return;
  if (cart.length === 0) {
    container.innerHTML = '<p class="empty-cart">Carrinho vazio</p>';
    totalEl.textContent = '0,00';
    return;
  }
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" onerror="this.src='https://via.placeholder.com/80'">{{ /* handle missing images */ }}
      <div class="cart-item-info">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-price">R$ ${formatPrice(item.price)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
    </div>
  `).join('');
  const total = cart.reduce((s, it) => s + it.price * it.qty, 0);
  totalEl.textContent = formatPrice(total);
}

function changeQty(productId, delta) {
  const idx = cart.findIndex(i => i.id === productId);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  saveCart();
  renderCartItems();
}

function openCheckout() {
  document.getElementById('cartModal').classList.remove('active');
  document.getElementById('checkoutModal').classList.add('active');
  renderCheckoutSummary();
}

function closeCheckout() {
  document.getElementById('checkoutModal').classList.remove('active');
}

function toggleLogin() {
  document.getElementById('loginModal').classList.toggle('active');
}

function showTab(tab) {
  document.getElementById('loginTab').classList.toggle('hidden', tab !== 'login');
  document.getElementById('registerTab').classList.toggle('hidden', tab !== 'register');
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.tab-btn[onclick="showTab('${tab}')"]`)?.classList.add('active');
}

function showNotification(message) {
  const el = document.getElementById('notification');
  if (!el) return;
  el.textContent = message;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2500);
}

function renderCheckoutSummary() {
  const summary = document.getElementById('orderSummary');
  const subtotalEl = document.getElementById('summarySubtotal');
  const taxEl = document.getElementById('summaryTax');
  const totalEl = document.getElementById('summaryTotal');
  if (!summary || !subtotalEl || !taxEl || !totalEl) return;
  if (cart.length === 0) {
    summary.innerHTML = '<p>Nenhum item no pedido</p>';
    subtotalEl.textContent = '0,00';
    taxEl.textContent = '0,00';
    totalEl.textContent = '0,00';
    return;
  }
  const subtotal = cart.reduce((s, it) => s + it.price * it.qty, 0);
  const tax = subtotal * 0.02; // taxa 2%
  const total = subtotal + tax;
  subtotalEl.textContent = formatPrice(subtotal);
  taxEl.textContent = formatPrice(tax);
  totalEl.textContent = formatPrice(total);
  summary.innerHTML = `
    <ul>
      ${cart.map(i => `<li>${i.qty}x ${i.name} - R$ ${formatPrice(i.price)}</li>`).join('')}
    </ul>
  `;
}

function finishOrder() {
  cart = [];
  saveCart();
  closeCheckout();
  showNotification('Obrigado! Pedido concluído (simulado)');
}

document.addEventListener('DOMContentLoaded', updateCartCount);