// Header
const header = document.querySelector("#header");

// topbar
header.innerHTML += `
    <!-- Header -->
    <header>
      <!-- contact-top-bar -->
      <div class="topbar">
        <div class="topbar-rightside">
          <a
            href="tel:+201114949181"
            class="social-componant social-componant-v1 social-link"
          >
            <img
              src="./assets/images/icons/phone-sq-solid.svg"
              alt="arrow"
              width="28"
              height="28"
              class="rtl"
            />
            <p>+201114949181</p>
          </a>
          <a
            href="mailto:middleeastco.eg@hotmail.com"
            class="social-componant social-componant-v1 social-link"
          >
            <img
              src="./assets/images/icons/mail-sq-solid.svg"
              alt="arrow"
              width="28"
              height="28"
            />
            <p>middleeastco.eg@hotmail.com</p>
          </a>
        </div>
        <div class="topbar-leftside">
          <button class="lang-button" id="btn-en">EN</button>
          <button class="lang-button" id="btn-ar">AR</button>
        </div>
      </div>
    </header>

    <!-- Navigation -->
    <nav class="navbar" aria-label="Main navigation">
        <img
          src="./assets/images/logo/Logo horizontal ltr.png"
          alt="Logo"
          class="img-logo"
        />
      <ul class="nav-list">
        <li class="nav-item">
          <a href="./index.html" class="current">Home</a>
        </li>
        <li class="nav-item"><a href="./about.html">About</a></li>
        <li class="nav-item"><a href="./products.html">Products</a></li>
        <li class="nav-item"><a href="./projects.html">Projects</a></li>
        <li class="nav-item"><a href="">Contact US</a></li>
        <button class="button button-primary-light nav-btn">
          GET A Quote
          <img
            src="./assets/images/icons/arrow-sq-right.svg"
            alt="arrow"
            width="32"
            height="32"
            class="rtl"
          />
        </button>
      </ul>
      <div class="ham-menu">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
          >
        </svg>
      </div>
    </nav>
`;

// Hamburger menu 
const ham_menu = document.querySelector(".ham-menu");
const nav_list = document.querySelector(".nav-list");

ham_menu.addEventListener("click", () => {
    nav_list.classList.toggle("active");    
})

const topbar = document.querySelector(".topbar");
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        nav_list.classList.add("nav-bottom");
    } else {
        nav_list.classList.remove("nav-bottom");
    }
});
