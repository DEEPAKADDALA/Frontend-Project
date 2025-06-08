// Product Data
const products = [
    // Smartphones (5)
    {
        id: 1,
        name: "iPhone 16 Pro",
        price: 129999,
        category: "smartphones",
        image: "iphone-16-pro.jpg"
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        price: 86050,
        category: "smartphones",
        image: "samsung gallaxy s24 ultra.jpg"
    },
    {
        id: 3,
        name: "OnePlus 13R",
        price: 42999,
        category: "smartphones",
        image: "one plus 13R.jpg"
    },  
    {
        id: 4,
        name: "iQOO 13",
        price: 54999,
        category: "smartphones",
        image: "iQOO 13.jpg"
    },
    {
        id: 5,
        name: "realme 14 Pro",
        price: 79999,
        category: "smartphones",
        image: "realme 14 pro.jpg"
    },
    
    // Laptops (5)
    {
        id: 6,
        name: "MacBook Pro 14-inch M2",
        price: 194900,
        category: "laptops",
        image: "MacBook Pro 14-inch M2.jpg"
    },
    {
        id: 7,
        name: "Dell Inspiron 5630",
        price: 63890,
        category: "laptops",
        image: "Dell Inspiron 5630.jpg"
    },
    {
        id: 8,
        name: "HP Victus",
        price: 72990,
        category: "laptops",
        image: "HP Victus.jpg"
    },
    {
        id: 9,
        name: "Lenovo Smartchoice LOQ",
        price: 71990,
        category: "laptops",
        image: "Lenovo Smartchoice LOQ.jpg"
    },
    {
        id: 10,
        name: "HP Pavilion i5",
        price: 129990,
        category: "laptops",
        image: "HP Pavilion i5.jpg"
    },
    
    // headphones (5)
    {
        id: 11,
        name: "Sony WH-1000XM5",
        price: 28990,
        category: "headphones",
        image: "Sony WH-1000XM5.jpg"
    },
    {
        id: 12,
        name: "Apple AirPods Pro 4",
        price: 17900,
        category: "headphones",
        image: "Apple AirPods Pro 4.jpg"
    },
    {
        id: 13,
        name: "Bose QuietComfort 45",
        price: 28900,
        category: "headphones",
        image: "Bose QuietComfort 45.jpg"
    },
    {
        id: 14,
        name: "Noise Airwave Max 3",
        price: 1999,
        category: "headphones",
        image: "Noise Airwave Max 3.jpg"
    },
    {
        id: 15,
        name: "Sony WF-1000XM4",
        price: 17990,
        category: "headphones",
        image: "Sony WF-1000XM4.jpg"
    },
    
    // Cameras (5)
    {
        id: 16,
        name: "Canon EOS R8",
        price: 102999,
        category: "cameras",
        image: "Canon EOS R8.jpg"
    },
    {
        id: 17,
        name: "Sony A7 IV",
        price: 219990,
        category: "cameras",
        image: "Sony A7 IV.jpg"
    },
    {
        id: 18,
        name: "Fujifilm X-T5",
        price: 154999,
        category: "cameras",
        image: "Fujifilm X-T5.jpg"
    },
    {
        id: 19,
        name: "Nikon Z6 II",
        price: 169990,
        category: "cameras",
        image: "Nikon Z6 II.jpg"
    },
    {
        id: 20,
        name: "GoPro Hero 12 Black",
        price: 29900,
        category: "cameras",
        image: "GoPro Hero 12 Black.jpg"
    },
    
    // Accessories (5)
    {
        id: 21,
        name: "Apple Watch Series 10",
        price: 56900,
        category: "accessories",
        image: "Apple Watch Series 10.jpg"
    },
    {
        id: 22,
        name: "Samsung Galaxy Watch 5 Pro",
        price: 19999,
        category: "accessories",
        image: "Samsung Galaxy Watch 5 Pro.jpg"
    },
    {
        id: 23,
        name: "Logitech MX Master 3S",
        price: 9995,
        category: "accessories",
        image: "Logitech MX Master 3S.jpg"
    },
    {
        id: 24,
        name: "Apple Magic Keyboard",
        price: 9900,
        category: "accessories",
        image: "Apple Magic Keyboard.jpg"
    },
    {
        id: 25,
        name: "WD My Passport 2TB",
        price: 7449,
        category: "accessories",
        image: "WD My Passport 2TB.jpg"
    }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Auth functionality
function openTab(tabName) {
    const tabs = document.getElementsByClassName('auth-content');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }
    
    const tabButtons = document.getElementsByClassName('tab-btn');
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }
    
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
}

// Login form submission
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Simple validation
        if (email && password) {
            localStorage.setItem('loggedIn', 'true');
            window.location.href = 'home.html';
        } else {
            alert('Please enter both email and password');
        }
    });
}

// Register form submission
if (document.getElementById('registerForm')) {
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;
        
        // Simple validation
        if (!name || !email || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        // In a real app, you would send this data to a server
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'home.html';
    });
}

// Check if user is logged in
function checkLogin() {
    if (window.location.pathname.includes('index.html')) return;
    
    const loggedIn = localStorage.getItem('loggedIn');
    if (!loggedIn || loggedIn !== 'true') {
        window.location.href = 'index.html';
    }
}

// Logout functionality
if (document.querySelector('.logout-btn')) {
    document.querySelector('.logout-btn').addEventListener('click', function() {
        localStorage.removeItem('loggedIn');
        window.location.href = 'index.html';
    });
}

// Display products
function displayProducts(category = 'all') {
    const productsContainer = document.getElementById('products');
    if (!productsContainer) return;
    
    productsContainer.innerHTML = '';
    
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        const isInCart = cart.some(item => item.id === product.id);
        
        productCard.innerHTML = `
            <div class="product-img">
                <img src="images/${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">₹${product.price.toLocaleString('en-IN')}</p>
                <button class="add-to-cart" data-id="${product.id}" ${isInCart ? 'disabled' : ''}>
                    ${isInCart ? 'Added to Cart' : 'Add to Cart'}
                </button>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
    
    // Add event listeners to add-to-cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
            this.textContent = 'Added to Cart';
            this.disabled = true;
            updateCartCount();
        });
    });
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update cart count
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('#cart-count');
    if (cartCountElements.length > 0) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElements.forEach(el => {
            el.textContent = totalItems;
        });
    }
}

// Display cart items
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) return;
    
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
        return;
    }
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        cartItem.innerHTML = `
            <div class="cart-item-img">
                <img src="images/${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h3 class="cart-item-title">${item.name}</h3>
                <p class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</p>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                </div>
                <p class="remove-item" data-id="${item.id}">Remove</p>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Add event listeners to quantity buttons
    document.querySelectorAll('.quantity-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const isPlus = this.classList.contains('plus');
            updateQuantity(productId, isPlus);
        });
    });
    
    // Add event listeners to quantity inputs
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const newQuantity = parseInt(this.value) || 1;
            updateQuantity(productId, null, newQuantity);
        });
    });
    
    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
    
    updateCartSummary();
}

// Update quantity
function updateQuantity(productId, isPlus, newQuantity = null) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    if (newQuantity !== null) {
        item.quantity = newQuantity;
    } else {
        if (isPlus) {
            item.quantity += 1;
        } else {
            item.quantity = Math.max(1, item.quantity - 1);
        }
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
    updateCartCount();
}

// Remove from cart
// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
    updateCartCount();
    updateCartSummary(); // This is the new line that fixes the price update
    
    // Also update the add-to-cart buttons on the home page
    if (window.location.pathname.includes('home.html')) {
        displayProducts();
    }
}

// Update cart summary
function updateCartSummary() {
    if (!document.getElementById('subtotal')) return;
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.05;
    const shipping = 50;
    const total = subtotal + tax + shipping;
    
    document.getElementById('subtotal').textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    document.getElementById('tax').textContent = `₹${tax.toLocaleString('en-IN')}`;
    document.getElementById('total').textContent = `₹${total.toLocaleString('en-IN')}`;
    
    // Update delivery date (3-5 days from now)
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 3 + Math.floor(Math.random() * 3));
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = deliveryDate.toLocaleDateString('en-IN', options);
    
    if (document.getElementById('deliveryDate')) {
        document.getElementById('deliveryDate').textContent = formattedDate;
    }
}

// Checkout functionality
if (document.querySelector('.checkout-btn')) {
    document.querySelector('.checkout-btn').addEventListener('click', function() {
        document.querySelector('.cart-container').style.display = 'none';
        document.getElementById('checkout-form').style.display = 'block';
    });
}

// Payment method toggle
if (document.querySelectorAll('input[name="payment"]')) {
    document.querySelectorAll('input[name="payment"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const cardDetails = document.getElementById('cardDetails');
            if (this.value === 'cod') {
                cardDetails.style.display = 'none';
            } else {
                cardDetails.style.display = 'block';
            }
        });
    });
}

// Place order
if (document.getElementById('paymentForm')) {
    document.getElementById('paymentForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real app, you would process the payment here
        // For demo, we'll just show the confirmation
        
        document.getElementById('checkout-form').style.display = 'none';
        
        const confirmation = document.getElementById('order-confirmation');
        confirmation.style.display = 'block';
        
        // Set delivery date
        const deliveryDate = new Date();
        deliveryDate.setDate(deliveryDate.getDate() + 3 + Math.floor(Math.random() * 3));
        
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = deliveryDate.toLocaleDateString('en-IN', options);
        
        document.getElementById('confirmedDeliveryDate').textContent = formattedDate;
        
        // Generate random order ID
        const orderId = 'ORD-' + Math.floor(Math.random() * 1000000);
        document.getElementById('orderId').textContent = orderId;
        
        // Clear cart
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    });
}

// Category filter
if (document.querySelectorAll('.category-link')) {
    document.querySelectorAll('.category-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            displayProducts(category);
            
            // Update active category
            document.querySelectorAll('.category-link').forEach(l => {
                l.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    checkLogin();
    updateCartCount();
    
    if (window.location.pathname.includes('home.html')) {
        displayProducts();
    }
    
    if (window.location.pathname.includes('cart.html')) {
        displayCartItems();
    }
});