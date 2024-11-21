let activeGenreFilter = '';
function addToCart(bookId) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const book = books.find(b => b.id === bookId);
  cart.push(book);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${book.name} has been added to your cart.`);
}
function loadBooks() {
  const shelfContainer = document.getElementById("shelf-container");
  shelfContainer.innerHTML = '';

  for (let i = 0; i < books.length; i += 4) {
    const bookRow = document.createElement("div");
    bookRow.className = "book-row";

    books.slice(i, i + 4).forEach((book) => {
      const bookElement = createBookElement(book);
      bookRow.appendChild(bookElement);
    });

    shelfContainer.appendChild(bookRow);
    shelfContainer.appendChild(createShelfElement());
  }
}

function createBookElement(book) {
  const bookDiv = document.createElement("div");
  bookDiv.className = "book";
  bookDiv.setAttribute("data-genre", book.tag.trim().toLowerCase());

  const productImageDiv = document.createElement("div");
  productImageDiv.className = "productimage";
  productImageDiv.innerHTML = `<img src="${book.productimage}" alt="${book.name}" />`;

  const bookButtons = document.createElement("div");
  bookButtons.className = "book-buttons";

  const detailsButton = document.createElement("button");
  detailsButton.innerText = "Details";
  detailsButton.className = "buy";
  detailsButton.onclick = () => (window.location.href = `details.html?id=${book.id}`);

  const addToCartButton = document.createElement("button");
  addToCartButton.innerText = "Add to Cart";
  addToCartButton.className = "add";
  addToCartButton.onclick = () => addToCart(book.id);

  bookButtons.appendChild(detailsButton);
  bookButtons.appendChild(addToCartButton);
  productImageDiv.appendChild(bookButtons);
  bookDiv.appendChild(productImageDiv);

  const bookInfo = document.createElement("div");
  bookInfo.className = "book-info";
  bookInfo.innerHTML = `
    <div class="name">${book.name}</div>
    <div class="price">${book.price}</div>
    <div class="rate">${book.rate}</div>
  `;
  bookDiv.appendChild(bookInfo);

  return bookDiv;
}

function createShelfElement() {
  const shelfDiv = document.createElement("div");
  shelfDiv.className = "shelf";
  shelfDiv.innerHTML = `
    <div class="shelf1"></div>
    <div class="shelf2"></div>
  `;
  return shelfDiv;
}

function applyFilter() {
  const searchInput = document.getElementById("search").value.toLowerCase();
  const shelfContainer = document.getElementById("shelf-container");
  const noResults = document.getElementById("no-results");
  const landingPage = document.querySelector(".landingpage");

  const visibleBooks = books.filter((book) => {
    const bookName = book.name.toLowerCase();
    const bookGenre = book.tag.toLowerCase();
    return bookName.includes(searchInput) && (!activeGenreFilter || bookGenre.includes(activeGenreFilter));
  });

  shelfContainer.innerHTML = '';

  if (visibleBooks.length > 0) {
    landingPage.classList.add("hide");
    visibleBooks.forEach((book, index) => {
      if (index % 4 === 0) {
        const bookRow = document.createElement("div");
        bookRow.className = "book-row";
        shelfContainer.appendChild(bookRow);
        shelfContainer.appendChild(createShelfElement());
      }
      const bookRow = shelfContainer.lastElementChild.previousElementSibling;
      bookRow.appendChild(createBookElement(book));
    });
    noResults.classList.add("hide");
    shelfContainer.classList.remove("hide");
  } else {
    noResults.classList.remove("hide");
    shelfContainer.classList.add("hide");
    landingPage.classList.remove("hide");
  }
}

function showAllBooks() {
  activeGenreFilter = '';
  applyFilter();
}

document.addEventListener("DOMContentLoaded", loadBooks);
