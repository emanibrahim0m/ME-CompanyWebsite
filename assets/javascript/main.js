// Header
const topbar_container = document.querySelector("#topbar");
const nav_container = document.querySelector("#navigation");

topbar_container.innerHTML = `
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
          <button class="button-y lang-button" id="btn-en">EN</button>
          <button class="button-y lang-button" id="btn-ar">AR</button>
        </div>
      </div>
    </header>
`;
nav_container.innerHTML = `
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
        <li class="nav-item"><a href="./contact.html">Contact US</a></li>
        <li class="nav-item"><a href="./assets/documents/MiddleEast-Brochure 2025.pdf" download>MiddleEast-Brochure 2025</a></li>
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

// Logos Section 
// Data structure


const logos = document.querySelector(".logo-componant");
if (logos) {
logos.innerHTML += `
  <div class="logo-scroll-wrapper">
    <div class="logo-track">
      <img
        class="product-logo"
        src="./assets/images/logos/afico.jpg"
        alt="afico logo"
      />
      <img
        class="product-logo"
        src="./assets/images/logos/afs.jpg"
        alt="afs logo"
      />
      <img
        class="product-logo"
        src="./assets/images/logos/asmaco.png"
        alt="asmaco logo"
      />
      <img
        class="product-logo"
        src="./assets/images/logos/fibrock.png"
        alt="fibrock logo"
      />
      <img
        class="product-logo"
        src="./assets/images/logos/foster.png"
        alt="foster logo"
      />
      <img
        class="product-logo"
        src="./assets/images/logos/glassrock.jpg"
        alt="glassrock logo"
      />
      <img
        class="product-logo"
        src="./assets/images/logos/gulf-o-flex.jpg"
        alt="gulf-o-flex logo"
      />
      <img
        class="product-logo"
        src="./assets/images/logos/izocam.png"
        alt="izocam logo"
      />
      <img
        class="product-logo"
        src="./assets/images/logos/kimmco isover.png"
        alt="kimmco isover logo"
      />
      <img
        class="product-logo"
        src="./assets/images/logos/l'isolante k-flex.png"
        alt="l'isolante k-flex logo"
      />
      <img
        class="product-logo"
        src="./assets/images/logos/pa-flex.jpg"
        alt="pa-flex logo"
      />
      <img
        class="product-logo"
        src="./assets/images/logos/techno metal.png"
        alt="techno metal logo"
      />

      <img
        class="product-logo D-product-logo"
        src="./assets/images/logos/afico.jpg"
        alt="afico logo"
      />
      <img
        class="product-logo D-product-logo"
        src="./assets/images/logos/afs.jpg"
        alt="afs logo"
      />
      <img
        class="product-logo D-product-logo"
        src="./assets/images/logos/asmaco.png"
        alt="asmaco logo"
      />
      <img
        class="product-logo D-product-logo"
        src="./assets/images/logos/fibrock.png"
        alt="fibrock logo"
      />
      <img
        class="product-logo D-product-logo"
        src="./assets/images/logos/foster.png"
        alt="foster logo"
      />
      <img
        class="product-logo D-product-logo"
        src="./assets/images/logos/glassrock.jpg"
        alt="glassrock logo"
      />
      <img
        class="product-logo D-product-logo"
        src="./assets/images/logos/gulf-o-flex.jpg"
        alt="gulf-o-flex logo"
      />
      <img
        class="product-logo D-product-logo"
        src="./assets/images/logos/izocam.png"
        alt="izocam logo"
      />
      <img
        class="product-logo D-product-logo"
        src="./assets/images/logos/kimmco isover.png"
        alt="kimmco isover logo"
      />
      <img
        class="product-logo D-product-logo"
        src="./assets/images/logos/l'isolante k-flex.png"
        alt="l'isolante k-flex logo"
      />
      <img
        class="product-logo D-product-logo"
        src="./assets/images/logos/pa-flex.jpg"
        alt="pa-flex logo"
      />
      <img
        class="product-logo D-product-logo"
        src="./assets/images/logos/techno metal.png"
        alt="techno metal logo"
      />
    </div>
  </div>
  `}

// Contact Section
const contact_us = document.querySelector(".contact_us_section");
if (contact_us) {
  contact_us.innerHTML = `
  <!-- contact us -->
  <div class="contact-section-left">
    <span class="Section-tag">Get In Touch</span>
    <h2 class="Contact-section-head">Contact Us</h2>
    <p class="contact-section-text">
      Middle East for Supplies & Contracting is a leading supplier of
      thermal and sound insulation materials, delivering reliable
      solutions for industrial and construction projects across Egypt.
    </p>
    <div class="social-media-v2-container">
      <div class="social-componant social-componant-v2">
        <img
          src="./assets/images/icons/mail.svg"
          alt="arrow"
          width="25"
          height="25"
        />
        <a href="mailto:middleeastco.eg@hotmail.com" class="social-link">
          <strong>Email Address</strong>
          <p>middleeastco.eg@hotmail.com</p>
        </a>
      </div>
      <div class="social-componant social-componant-v2">
        <img
          src="./assets/images/icons/location-pin.svg"
          alt="arrow"
          width="25"
          height="25"
        />
        <div>
          <strong>Main Office:</strong>
          <p>Alexandria, Egypt</p>
        </div>
      </div>
      <div class="social-componant social-componant-v2">
        <img
          src="./assets/images/icons/phone.svg"
          alt="arrow"
          width="25"
          height="25"
        />
        <a href="tel:+20 111 494 9181" class="social-link">
          <strong>Phone Number</strong>
          <p>+20 111 494 9181</p>
        </a>
      </div>
      <div class="social-componant social-componant-v2">
        <img
          src="./assets/images/icons/location-pin.svg"
          alt="arrow"
          width="25"
          height="25"
        />
        <div>
          <strong>Warehouse:</strong>
          <p>Alexandria, Egypt</p>
        </div>
      </div>
      <div class="social-componant social-componant-v2">
        <img
          src="./assets/images/icons/phone.svg"
          alt="arrow"
          width="25"
          height="25"
        />
        <a href="tel:+20 111 039 8275" class="social-link">
          <strong>Phone Number</strong>
          <p>+20 111 039 8275</p>
        </a>
      </div>
      <div class="social-componant social-componant-v2">
        <img
          src="./assets/images/icons/location-pin.svg"
          alt="arrow"
          width="25"
          height="25"
        />
        <div>
          <strong>Warehouse:</strong>
          <p>Cairo – Belbis Desert Road</p>
        </div>
      </div>

    </div>
  </div>

  <div class="contact-form-card">
    <h3>Request A Quote</h3>
    <form class="contact-form">
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email Address" required />
      <div class="form-row">
        <input type="tel" placeholder="Phone" />
        <select>
          <option>Service Type</option>
          <option>Insulation</option>
          <option>General Contracting</option>
        </select>
      </div>
      <textarea
        placeholder="Tell us about your project..."
        rows="4"
      ></textarea>
      <button type="submit" class="submit-btn">SEND MESSAGE</button>
    </form>
   </div>

  `;
}

// Footer
const footer = document.querySelector("#footer");
footer.innerHTML = `
<div class="footer-heading">
        <div class="footer-head">
          <h3>Let's Create Your Ideal Space</h3>
          <p>
            Together, we'll design and build a space that perfectly matches your
            vision, needs, and lifestyle.
          </p>
        </div>
        <div class="subscribe-form">
          <input type="email" placeholder="Enter your Email" />
          <button class="button-y">Subscribe</button>
        </div>
      </div>
      <hr class="footer-divider" />
      <div class="footer-body">
        <div class="footer-logo-container">
          <img
            src="./assets/images/logo/Logo ltr.png"
            alt="img-Logo"
            class="img-logo-ar"
          />
          <p>
            Revolutionizing the construction industry with innovative solutions
            and expert craftsmanship.
          </p>
          <div class="social-icons">
            <a
              href="https://www.facebook.com/middleeastegyptco"
              class="social-circle"
            >
              <img
                src="./assets/images/icons/facebook-y.svg"
                alt="arrow"
                width="28"
                height="28"
                class="social-icon rtl"
              />
            </a>
            <a href="mailto:middleeastco.eg@hotmail.com" class="social-circle">
              <img
                src="./assets/images/icons/mail-sq-light.svg"
                alt="arrow"
                width="28"
                height="28"
                class="social-icon rtl"
              />
            </a>
            <a href="https://wa.me/201114949181" class="social-circle">
              <img
                src="./assets/images/icons/whatsapp-y.svg"
                alt="arrow"
                width="28"
                height="28"
                class="social-icon rtl"
              />
            </a>
          </div>
        </div>
        <div class="footer-links-container">
          <div class="footer-links">
            <h6>Navigation</h6>
            <ul>
              <li><a href="./index.html">Home</a></li>
              <li><a href="./about.html">About</a></li>
              <li><a href="./products.html">Products</a></li>
              <li><a href="./projects.html">Projects</a></li>
              <li><a href="./contact.html">Contact</a></li>
              <li><a href="./assets/documents/MiddleEast-Brochure 2025.pdf" download>MiddleEast-Brochure 2025</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h6>Utility Pages</h6>
            <ul>
              <li><a href="./about.html">Our Mission</a></li>
              <li><a href="./about.html">Our Vision</a></li>
              <li><a href="./about.html">Our History</a></li>
              </ul>
              </div>
              <div class="footer-links">
              <h6>Contact</h6>
              <p>Alexandria, Egypt</p>
              <p>middleeastco.eg@hotmail.com</p>
              <p>+20 111 039 8275</p>
              </div>
              </div>
              </div>
              <hr class="footer-divider" />
              <div class="footer-bottom">
              <p>© Middle East 2026. All rights reserved.</p>
              <div class="bottom-links">
              <a href="#">Term of service</a>
              <a href="#">Privacy Policy</a>
        </div>
      </div>
`;