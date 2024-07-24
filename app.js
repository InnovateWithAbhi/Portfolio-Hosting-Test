document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  const pages = {
    home: `
            <h1>Welcome to My SPA</h1>
            <p>This is the home page of our simple single-page application.</p>
        `,
    about: `
            <h1>About Us</h1>
            <p>This page contains information about our project and team.</p>
        `,
    contact: `
            <h1>Contact Us</h1>
            <p>Feel free to reach out via the following means:</p>
            <ul>
                <li>Email: contact@example.com</li>
                <li>Phone: 123-456-7890</li>
            </ul>
        `,
  };

  function loadPage(page) {
    alert("Hello, World!");
    content.innerHTML = pages[page];
  }

  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = e.target.getAttribute("data-page");
      loadPage(page);
    });
  });

  // Load the default page
  loadPage("home");
});
