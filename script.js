function copyLink() {
  const url = window.location.href; // Get the current page URL
  navigator.clipboard
    .writeText(url)
    .then(function () {
      alert("Link copied to clipboard!");
    })
    .catch(function (error) {
      alert("Failed to copy link: " + error);
    });
}

// Notice Expand--------------------
document.querySelectorAll(".article-item").forEach((item) => {
  item.addEventListener("click", () => {
    // Toggle the expanded class to expand/collapse the description
    item.classList.toggle("expanded");

    // Find the "Read more..." link within the clicked article item
    const readMoreLink = item.querySelector(".read-more-link");

    // Change the link text based on whether the item is expanded or not
    if (item.classList.contains("expanded")) {
      readMoreLink.textContent = ""; // Change to "Collapse" when expanded
    } else {
      readMoreLink.textContent = "Read more..."; // Change back to "Read more" when collapsed
    }
  });
});

function filterArticles(category) {
  const articles = document.querySelectorAll(".article-item"); // Select all articles
  const buttons = document.querySelectorAll(".category-button"); // Select all category buttons

  // Remove 'active' class from all buttons
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // Find and add 'active' class to the clicked button
  const activeButton = Array.from(buttons).find(
    (button) => button.innerText.trim().toLowerCase() === category.toLowerCase()
  );

  if (activeButton) {
    activeButton.classList.add("active");
  }

  // Filter articles based on category
  articles.forEach((article) => {
    if (category === "all" || article.classList.contains(category)) {
      article.style.visibility = "visible";
      article.style.position = "relative";
      article.style.opacity = "1";
      article.style.transform = "scale(1)";
    } else {
      article.style.opacity = "0";
      article.style.transform = "scale(0.9)";
      setTimeout(() => {
        article.style.visibility = "hidden";
        article.style.position = "absolute";
      }, 300); // Wait for the opacity and scale transition to finish before hiding
    }
  });
}

// Select hamburger and menu
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

// Add event listener to the hamburger
hamburger.addEventListener("click", () => {
  menu.classList.toggle("active"); // Toggle the menu visibility
  hamburger.classList.toggle("active"); // Toggle the hamburger animation
});

// Function to close dropdown when a menu item is clicked
function closeDropdown() {
  // Assuming your dropdown menu has a class .dropdown-menu
  const dropdownMenu = document.querySelector(".dropdown-menu");
  if (dropdownMenu) {
    dropdownMenu.classList.remove("open");
  }
}

function navigate(page) {
  // You can replace this with actual logic to navigate to the right page
  // For example, changing the window location:
  if (page === -1) {
    // Navigate to the previous page
    window.history.back();
  } else if (page === 1) {
    window.location.href = "notice1.html"; // Navigate to page 1
  } else if (page === 2) {
    window.location.href = "notice2.html"; // Navigate to page 2
  } else if (page === 3) {
    window.location.href = "notice3.html"; // Navigate to page 3
  }
}

// Function to open the modal and display the clicked image
function openModal(imageSrc, imageAlt) {
  // Get the modal element
  var modal = document.getElementById("myModal");

  // Get the modal image and caption elements
  var modalImage = document.getElementById("modalImage");
  var caption = document.getElementById("caption");

  // Set the source of the modal image and the caption text
  modalImage.src = imageSrc;
  caption.innerHTML = imageAlt;

  // Display the modal
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  // Get the modal element
  var modal = document.getElementById("myModal");

  // Hide the modal
  modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside the modal content
window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

window.onload = function () {
  sendMessage(); // Automatically send a greeting as soon as the page loads
};

// Notice animation

document.addEventListener("DOMContentLoaded", function () {
  // Create an Intersection Observer instance
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the 'visible' class when the article comes into view
          entry.target.classList.add("visible");
          // Once the element has been animated, unobserve it
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% of the item is visible in the viewport
    }
  );

  // Target all article items for intersection observation
  const articles = document.querySelectorAll(".article-item");
  articles.forEach((article) => {
    observer.observe(article); // Start observing each article
  });
});

function openModal(imagePath) {
  var modal = document.getElementById("myModal");
  var modalImage = document.getElementById("modalImage");

  modal.style.display = "block";
  modalImage.src = imagePath; // Set the image source

  // Close modal when clicked outside the image
  modal.onclick = function (event) {
    if (
      event.target === modal ||
      event.target === document.querySelector(".close")
    ) {
      closeModal();
    }
  };
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

//pinned promo
// Function to toggle the visibility of content with animation
function toggleContent(contentId, button) {
  var content = document.getElementById(contentId);

  if (content.style.maxHeight) {
    content.style.maxHeight = null; // Collapse
    content.style.opacity = 0; // Fade out
    button.textContent = "Read More"; // Change button text to Read More
  } else {
    content.style.maxHeight = content.scrollHeight + "px"; // Expand to fit the content
    content.style.opacity = 1; // Fade in
    button.textContent = "Collapse"; // Change button text to Read Less
  }
}

// Disable image popout on mobile
const promoImages = document.querySelectorAll(".promo-section1 .promo-image");

promoImages.forEach((image) => {
  image.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault(); // Prevent image popout on mobile
    }
  });
});

function toggleText(promoId) {
  var extraContent = document.getElementById("extraContent" + promoId);
  var readMoreLink = document.getElementById("readMore" + promoId);

  // Check if the content is currently visible or not
  if (
    extraContent.style.display === "none" ||
    extraContent.style.display === ""
  ) {
    extraContent.style.display = "inline";
    readMoreLink.textContent = "Collapse"; // Change text to "Collapse"
  } else {
    extraContent.style.display = "none";
    readMoreLink.textContent = "Read More"; // Change text back to "Read More"
  }
}

// Toggle the FAQ content on click
function toggleFAQ(faqId) {
  const faqItem = document.getElementById(faqId).parentElement;

  // Toggle the "active" class to show/hide the content
  faqItem.classList.toggle("active");
}

function toggleFAQ(faqId) {
  const faqItem = document.getElementById(faqId).parentElement;
  faqItem.classList.toggle("active");
}

// Function to open the modal and display the image with a download option
function openModal(imageUrl) {
  var modal = document.getElementById("myModal");
  var modalImage = document.getElementById("modalImage");
  var downloadLink = document.getElementById("downloadLinkModal");

  // Show the modal
  modal.style.display = "block";

  // Set the modal image source to the clicked image's source
  modalImage.src = imageUrl;
  h;

  // Set the download link to the same image URL
  downloadLink.href = imageUrl;
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Ensure the download button inside the modal works
document.addEventListener("DOMContentLoaded", function () {
  var image = document.getElementById("image");
  if (image) {
    image.addEventListener("click", function () {
      openModal(image.src); // Open modal with the image's source
    });
  }
});

//faqm1
// Category filter functionality
document
  .getElementById("categorySelect")
  .addEventListener("change", function () {
    var selectedCategory = this.value;
    var articles = document.querySelectorAll(".faq-article");

    articles.forEach(function (article) {
      // Get the class of each article to determine its category
      if (
        selectedCategory === "all" ||
        article.classList.contains(selectedCategory)
      ) {
        article.style.display = "block"; // Show the article
      } else {
        article.style.display = "none"; // Hide the article
      }
    });
  });

// Function to toggle the dropdown content when clicking the article title
function toggleDropdown(element) {
  var dropdown = element.nextElementSibling;
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
}

// Function to show article with fade-in animation
function showArticle(article) {
  article.style.display = "block";
  article.classList.add("fade-in");
  setTimeout(() => article.classList.remove("fade-in"), 500);
}

// Function to hide article with fade-out animation
function hideArticle(article) {
  article.classList.add("fade-out");
  setTimeout(() => {
    article.style.display = "none"; // Hide the article after animation
    article.classList.remove("fade-out");
  }, 500);
}

// Function to open the 'Read More' modal (detailed review)
function openModal1() {
  // Display the review modal
  var modal = document.getElementById("modal1");
  modal.style.display = "block";
}

// Function to close the modal when the user clicks on the 'X' button
var closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", function () {
  var modal = document.getElementById("modal1");
  modal.style.display = "none";
});

// Function to close the modal when the user clicks outside the modal area
window.addEventListener("click", function (event) {
  var modal = document.getElementById("modal1");
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Function to close the modal when the user clicks on the 'X' button with a different id
var closeModalBtn = document.getElementById("close-modal-btn");
closeModalBtn.addEventListener("click", function () {
  var modal = document.getElementById("modal1");
  modal.style.display = "none";
});

function toggleDropdown(element) {
  const faqArticle = element.closest(".faq-article");
  faqArticle.classList.toggle("active");
}

// Function to open the modal with the clicked image
function openModal(imgElement) {
  var modal = document.getElementById("myModal");
  var modalImage = document.getElementById("modalImage");
  modal.style.display = "flex";
  modalImage.src = imgElement.src; // Set the modal image to the clicked image source
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Close the modal if the user clicks outside the modal content
window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Show the Promo section
function showPromo() {
  document.getElementById("promo-content").style.display = "block"; // Show promo content
  document.querySelector(".small-promos-wrapper").style.display = "block"; // Show small promos
  document.getElementById("campaign-content").style.display = "none"; // Hide campaign content
}

function showCampaign() {
  document.getElementById("promo-content").style.display = "none"; // Hide promo content
  document.querySelector(".small-promos-wrapper").style.display = "none"; // Hide small promos
  document.getElementById("campaign-content").style.display = "block"; // Show campaign content
}

window.onload = function () {
  var width = window.innerWidth;
  var scale = width / 1920; // Scale based on 1920px screen width (adjust for your preferred resolution)
  document.body.style.zoom = scale;
};

function toggleContent(element) {
  // Find the container (the parent element of the button or the clicked area)
  const container = element.closest(".small-promo-container");

  // Toggle the expanded class on the container to trigger the animation
  container.classList.toggle("expanded");

  // Check if the container has the 'expanded' class
  if (container.classList.contains("expanded")) {
    // Hide the button when expanded using visibility
    const button = container.querySelector(".read-more-btn");
    if (button) {
      button.style.visibility = "hidden"; // Use visibility instead of display
    }
  } else {
    // Optionally, show the button again if the content is collapsed
    const button = container.querySelector(".read-more-btn");
    if (button) {
      button.style.visibility = "visible"; // Use visibility instead of display
    }
  }

  // Prevent the button's click event from bubbling up and triggering the container click again
  if (element.tagName.toLowerCase() === "button") {
    event.stopPropagation();
  }
}

function openModal(imageUrl, imageDescription) {
  // First, scroll to the top of the page immediately when the image is clicked
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  // Disable scrolling on the body
  document.body.style.overflow = "hidden";

  // Create the modal container
  const modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.zIndex = "9999";

  // Create the image element
  const modalImage = document.createElement("img");
  modalImage.src = imageUrl;
  modalImage.alt = imageDescription;
  modalImage.style.maxWidth = "90%"; // Adjust width (90% of the screen width)
  modalImage.style.maxHeight = "80%"; // Adjust height (80% of the screen height)
  modalImage.style.objectFit = "contain"; // Keep the aspect ratio intact

  // Create a close button
  const closeButton = document.createElement("span");
  closeButton.innerHTML = "&times;";
  closeButton.style.position = "absolute";
  closeButton.style.top = "10px";
  closeButton.style.right = "40px";
  closeButton.style.fontSize = "30px";
  closeButton.style.color = "white";
  closeButton.style.cursor = "pointer";

  // Close the modal when clicked
  closeButton.onclick = function () {
    document.body.removeChild(modal);
    // Re-enable scrolling when the modal is closed
    document.body.style.overflow = "auto";
  };

  // Append the image and close button to the modal
  modal.appendChild(modalImage);
  modal.appendChild(closeButton);

  // Add the modal to the body
  document.body.appendChild(modal);
}

function filterContent(category) {
  // Get all promo containers
  const promos = document.querySelectorAll(".small-promo-container");

  // Show or hide based on the category
  promos.forEach((promo) => {
    if (category === "all") {
      promo.style.display = "flex"; // Show all promos
    } else if (promo.classList.contains(category)) {
      promo.style.display = "flex"; // Show the selected category
    } else {
      promo.style.display = "none"; // Hide others
    }
  });
}

//  Notice filter //
// Function to filter the articles by category
function filterArticles(category) {
  // Get all the article elements (both notice-article and notice-item2nd)
  const articles = document.querySelectorAll(
    ".notice-article, .notice-item2nd"
  );

  // Get all category buttons
  const buttons = document.querySelectorAll(".category-button");

  // Loop through all buttons and reset the background color, text color, and border
  buttons.forEach((button) => {
    button.style.backgroundColor = ""; // Reset the background color
    button.style.color = ""; // Reset the text color
    button.style.border = ""; // Reset the border
  });

  // Find the selected button and apply active styles
  const selectedButton = document.querySelector(
    `.category-button[data-category='${category}']`
  );
  if (selectedButton) {
    selectedButton.style.backgroundColor = "#007BFF"; // Active button background color
    selectedButton.style.color = "white"; // Active button text color
    selectedButton.style.border = "2px solid #0056b3"; // Optional border for emphasis
  }

  // Loop through all articles
  articles.forEach((article) => {
    // Get the category from the 'data-category' attribute of each article
    const articleCategory = article.getAttribute("data-category");

    // Show or hide the article based on the selected category
    if (category === "all" || articleCategory === category) {
      article.style.position = "relative"; // Ensure it takes up space in the layout
      article.style.opacity = "1"; // Make article fully visible
      article.style.zIndex = "1"; // Ensure it's on top of other elements
    } else {
      article.style.position = "absolute"; // Remove it from the flow of the layout
      article.style.opacity = "0"; // Make article invisible
      article.style.zIndex = "0"; // Keep it behind the visible elements
    }
  });
}

// Function to open the 'Read More' modal (detailed review)
function openModal1() {
  // Display the review modal
  var modal = document.getElementById("modal1");
  modal.style.display = "block";
}

// Function to close the modal when the user clicks on the 'X' button
var closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", function () {
  var modal = document.getElementById("modal1");
  modal.style.display = "none";
});

// Function to close the modal when the user clicks outside the modal area
window.addEventListener("click", function (event) {
  var modal = document.getElementById("modal1");
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Function to close the modal when the user clicks on the 'X' button with a different id
var closeModalBtn = document.getElementById("close-modal-btn");
closeModalBtn.addEventListener("click", function () {
  var modal = document.getElementById("modal1");
  modal.style.display = "none";
});

function toggleDropdown(element) {
  const faqArticle = element.closest(".faq-article");
  faqArticle.classList.toggle("active");
}
