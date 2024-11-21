function loadNavbar() {
  fetch('navbar.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.querySelector('header').innerHTML = data;

      const loggedInUserId = localStorage.getItem("loggedInUserId");
      const accountIcon = document.getElementById("account-icon");
      const accountMenu = document.getElementById("account-menu");

      if (loggedInUserId) {
        const user = customers.find((customer) => customer.id === loggedInUserId);

        if (user) {
          accountIcon.src = user.ava;
          accountMenu.innerHTML = `
            <li><a href="UserProfile.html">User Profile</a></li>
            <li><a href="#" id="logout">Log Out</a></li>
          `;

          document.getElementById("logout").addEventListener("click", function () {
            localStorage.removeItem("loggedInUserId");
            window.location.href = "SignIn.html";
          });
        } else {
          alert("No user is logged in.");
          window.location.href = "SignIn.html";
        }
      }

      document.querySelector(".cart-icon").addEventListener("click", function () {
        window.location.href = "cart.html";
      });
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}

document.addEventListener("DOMContentLoaded", loadNavbar);
