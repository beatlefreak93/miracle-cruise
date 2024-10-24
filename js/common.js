$('.btn-menu').click(function() {
    $('.header-wrap').toggleClass('active');
    $('.hd-gnb').toggleClass('active');
})

$('.hd-gnb a').click(function() {
    $('.header-wrap').removeClass('active');
    $('.hd-gnb').removeClass('active');
});


document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const paginationLinks = document.querySelectorAll(".pagination a");

    function onScroll() {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (window.pageYOffset >= sectionTop - 100 && window.pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        paginationLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", onScroll);

    onScroll();


    
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContainers = document.querySelectorAll(".tab-container");

    tabButtons.forEach(button => {
        button.addEventListener("click", function() {
            tabButtons.forEach(btn => btn.classList.remove("active"));

            tabContainers.forEach(container => container.classList.remove("active"));

            this.classList.add("active");

            const areaId = this.getAttribute("data-area");
            const targetContainer = document.getElementById(areaId);

            if (targetContainer) {
                targetContainer.classList.add("active");
            }
        });
    });

    document.querySelector(".tab-btn.active").click();
});

$('.btn-agree-more').click(function() {
    $(this).toggleClass('active');
    $(this).next('p').slideToggle();
})