class ImageSlider {
    constructor() {
        this.allImages = [
            'cat.jpeg',
            'chungus.jpg',
            'cook.jpg',
            'ruhroh.jpg',
            'speak.jpg',
        ];
        this.imageIndex = Math.floor(this.allImages.length / 2);
        this.displayImage();
        this.indicators = [];
        this.#createIndicators();
    }

    displayImage() {
        const picCarousel = document.querySelector('.pic-carousel');
        picCarousel.innerHTML = '';
        const picFrame = document.createElement('div');
        picFrame.classList.add('pic-frame');
        const img = document.createElement('img');
        picFrame.appendChild(img);
        img.setAttribute(
            'src',
            `./assets/images/${this.allImages[this.imageIndex]}`
        );
        picCarousel.appendChild(picFrame);
    }

    nextIndexImg() {
        this.indicators[this.imageIndex].classList.remove('img-select');
        this.imageIndex++;
        if (this.imageIndex >= this.allImages.length) {
            this.imageIndex = 0;
        }
        this.indicators[this.imageIndex].classList.add('img-select');
    }

    prevIndexImg() {
        this.indicators[this.imageIndex].classList.remove('img-select');
        this.imageIndex--;
        if (this.imageIndex < 0) {
            this.imageIndex = this.allImages.length - 1;
        }
        this.indicators[this.imageIndex].classList.add('img-select');
    }

    #createIndicators() {
        const carouselIndicator = document.querySelector('.carousel-indicator');
        for (let i = 0; i < this.allImages.length; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            carouselIndicator.appendChild(indicator);
            this.indicators.push(indicator);
        }
        this.indicators[this.imageIndex].classList.add('img-select');
    }
}

(function () {
    const navToggleBtn = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    const rightArrow = document.querySelector('.right-arrow');
    const leftArrow = document.querySelector('.left-arrow');
    const slider = new ImageSlider();

    navToggleBtn.addEventListener('click', () => {
        if (nav.classList.contains('nav-visible')) {
            nav.classList.remove('nav-visible');
            navToggleBtn.textContent = 'Open';
            navToggleBtn.classList.add('nav-toggle-open');
        } else {
            nav.classList.add('nav-visible');
            navToggleBtn.textContent = 'Close';
            navToggleBtn.classList.remove('nav-toggle-open');
        }
    });

    rightArrow.addEventListener('click', () => {
        slider.nextIndexImg();
        slider.displayImage();
    });

    leftArrow.addEventListener('click', () => {
        slider.prevIndexImg();
        slider.displayImage();
    });
})();
