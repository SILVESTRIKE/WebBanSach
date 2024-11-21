document.addEventListener("DOMContentLoaded", function () {
  loadCartItems();

  document.querySelector(".cart-items").addEventListener("change", function (event) {
      if (event.target.classList.contains("item-quantity")) {
          updateCartItemQuantity(event.target);
      }
  });

  document.querySelector(".cart-items").addEventListener("click", function (event) {
      if (event.target.classList.contains("remove-item")) {
          removeCartItem(event.target);
      }
  });
});

function loadCartItems() {
  const cartItemsContainer = document.querySelector(".cart-items");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("cart-book");

      const itemTotal = item.price * item.quantity;
      total += itemTotal;

      itemElement.innerHTML = `
          <div class="col1">
              <img src="${item.productimage}" alt="${item.name}">
          </div>
          <div class="col2">
              <p class="name">${item.name}</p>
              <p>${item.author}</p>
          </div>
          <div class="col3">
              <input type="number" class="item-quantity" value="${item.quantity}" min="1" data-id="${item.id}">
          </div>
          <div class="col4">
              <p class="sum">${itemTotal} VND</p>
          </div>
          <div class="col5">
              <button class="remove-item" data-id="${item.id}">
                  <img src="../img/trash.png" alt="Remove">
              </button>
          </div>
      `;

      cartItemsContainer.appendChild(itemElement);
  });

  document.querySelector(".total-price").textContent = `Tổng thanh toán: ${total} VND`;
}

function updateCartItemQuantity(inputElement) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const itemId = inputElement.getAttribute("data-id");
  const newQuantity = parseInt(inputElement.value);

  const itemIndex = cart.findIndex(item => item.id === itemId);
  if (itemIndex > -1 && newQuantity > 0) {
      cart[itemIndex].quantity = newQuantity;
      localStorage.setItem("cart", JSON.stringify(cart));
      loadCartItems();
  }
}

function removeCartItem(buttonElement) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const itemId = buttonElement.getAttribute("data-id");

  const newCart = cart.filter(item => item.id !== itemId);
  localStorage.setItem("cart", JSON.stringify(newCart));
  loadCartItems();
}
