const btns = document.querySelectorAll(".tab-btn")
const about = document.querySelector(".about")
const articles = document.querySelectorAll(".content")

// Add a click event listener to the "about" container
about.addEventListener("click", function (e) {
  // Get the data-id attribute of the clicked element (used to match the tab with content)
  const id = e.target.dataset.id
  // Only run if an element with a data-id was clicked
  if (id) {
    // Remove the "active" class from all tab buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active")
      e.target.classList.add("active")
    })
    // Hide all content articles
    articles.forEach(function (article) {
      article.classList.remove("active")
    })

    // Select the content article with the matching id and show it
    const element = document.getElementById(id)
    // Activate the matching content section
    element.classList.add("active")
  }
})
