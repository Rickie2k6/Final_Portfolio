const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const contactForm = document.querySelector("#contactForm");
const jobNodes = document.querySelectorAll(".job-node");
const jobDetails = document.querySelectorAll(".job-detail");
const greeting = document.querySelector("[data-greeting]");
const greetings = [
  "Hi, I am",
  "Xin chào, tôi là",
  "你好，我是",
  "नमस्ते, मैं हूं",
];

if (greeting) {
  let greetingIndex = 0;

  setInterval(() => {
    greetingIndex = (greetingIndex + 1) % greetings.length;
    greeting.classList.add("is-changing");

    window.setTimeout(() => {
      greeting.textContent = greetings[greetingIndex];
      greeting.classList.remove("is-changing");
    }, 180);
  }, 2200);
}

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navLinks.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }
});

jobNodes.forEach((node) => {
  node.addEventListener("click", () => {
    const targetId = node.dataset.jobTarget;

    jobNodes.forEach((item) => {
      const isSelected = item === node;
      item.classList.toggle("is-active", isSelected);
      item.setAttribute("aria-selected", String(isSelected));
    });

    jobDetails.forEach((detail) => {
      const isSelected = detail.id === targetId;
      detail.classList.toggle("is-active", isSelected);
      detail.toggleAttribute("hidden", !isSelected);
    });
  });
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const senderEmail = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");
  const body = `From: ${senderEmail}\n\n${message}`;
  window.location.href = `mailto:cuonghn.saigon@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
