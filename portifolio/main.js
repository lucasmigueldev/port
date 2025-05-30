const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const section = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
});

function removeActiveClasses() {
    const barBoxs = document.querySelector('.bars-box');
    const header = document.querySelector('header');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barBoxs.classList.remove('active');
    setTimeout(() => {
        barBoxs.classList.add('active');
    }, 1100);

    section.forEach(section => {
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        removeActiveClasses();  
        link.classList.add('active');

        setTimeout(() => {
            section[idx].classList.add('active'); 
        }, 1100);
    });
});

logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        removeActiveClasses();

        navLinks[0].classList.add('active');

        setTimeout(() => {
            section[0].classList.add('active'); 
        }, 1100); 
    }
});

const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portifolio-box .navigation .arow-right');
const arrowLeft = document.querySelector('.portifolio-box .navigation .arow-left');
const portifolioDetails = document.querySelectorAll('.portifolio-detail');
const totalItems = portifolioDetails.length;

let index = 0;

const activePortifolio = () => {
    const imgSlide = document.querySelector('.portifolio-carousel .img-slide');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portifolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });

    portifolioDetails[index].classList.add('active');
};

arrowRight.addEventListener('click', () => {
    if (index < totalItems - 1) {
        index++;
        arrowLeft.classList.remove('disabled');
    } else {
        index = totalItems - 1;
        arrowRight.classList.add('disabled');
    }

    activePortifolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        arrowRight.classList.remove('disabled');
    } else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activePortifolio();
});
