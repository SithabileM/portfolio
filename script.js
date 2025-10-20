// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
const sidebar = document.querySelector(".sidebar")
const navLinks = document.querySelectorAll(".nav-link")

mobileMenuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active")
  mobileMenuToggle.classList.toggle("active")
})

// Close mobile menu when clicking on a nav link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active")
    mobileMenuToggle.classList.remove("active")
  })
})

// Active Navigation Link on Scroll
const sections = document.querySelectorAll(".section")
const navLinksArray = Array.from(navLinks)

function updateActiveLink() {
  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinksArray.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
}

window.addEventListener("scroll", updateActiveLink)

// Intersection Observer for Section Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

sections.forEach((section) => {
  observer.observe(section)
})

// Form Submission
const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const formData = new FormData(contactForm)
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Here you would typically send the form data to a server
  console.log("Form submitted:", { name, email, message })

  // Show success message (you can customize this)
  alert("Thank you for your message! I'll get back to you soon.")

  // Reset form
  contactForm.reset()
})

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add cursor effect on hover for interactive elements
const interactiveElements = document.querySelectorAll("a, button, .project-card")

interactiveElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    document.body.style.cursor = "pointer"
  })

  element.addEventListener("mouseleave", () => {
    document.body.style.cursor = "default"
  })
})
