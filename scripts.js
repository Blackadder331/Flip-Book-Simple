var currentPage = 1;
var totalPages = 6;

function flipPage(pageNumber, direction) {
  var page = document.getElementById("page" + pageNumber);
  if (direction === "forward") {
    page.classList.remove("flipping-back");
    page.classList.add("flipping");
    setTimeout(() => {
      page.style.opacity = 0;
    }, 1000);
  } else if (direction === "backward") {
    page.classList.remove("flipping");
    page.style.opacity = 1;
    page.classList.add("flipping-back");
    setTimeout(() => {
      page.classList.remove("flipping-back");
    }, 1000);
  }
}

function flipNextPage() {
  if (currentPage <= totalPages) {
    flipPage(currentPage, "forward");
    currentPage++;
  }
}

function flipPreviousPage() {
  if (currentPage > 1) {
    currentPage--;
    flipPage(currentPage, "backward");
  }
}
