let currentPage = 0;

const pages = document.querySelectorAll(".page");

function nextPage() {

    pages[currentPage].classList.remove("active");

    currentPage++;

    if(currentPage >= pages.length){
        currentPage = pages.length - 1;
    }

    pages[currentPage].classList.add("active");

}
