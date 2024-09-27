document.addEventListener('DOMContentLoaded', function() {
    // Countdown Timer

        
    let countDownDate = new Date().getTime() + (3 * 24 * 60 * 60 * 1000);
    let x = setInterval(function() {
        let now = new Date().getTime();
        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
        }
    }, 1000);

    // Product Slider1
    let currentIndex = 0;
    const slides = document.querySelector('.product-grid');
    const slideCount = slides.children.length;
    const slideWidth = slides.children[0].offsetWidth;
    const visibleSlides = 4; // Hiển thị 5 sản phẩm một lần
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');

    // Cập nhật vị trí cuộn của slide
    function updateSlidePosition() {
        const maxScroll = (slideCount - visibleSlides) * slideWidth; // Tính giới hạn tối đa
        const offset = currentIndex * slideWidth;

        slides.style.transform = `translateX(-${Math.min(offset, maxScroll)}px)`; // Đảm bảo không vượt quá giới hạn
    }

    // Hiển thị slide tiếp theo
    function showNextSlide() {
        if (currentIndex < slideCount - visibleSlides) {
            currentIndex++;
        } else {
            currentIndex = 0; // Quay lại slide đầu
        }
        updateSlidePosition();
    }

    // Hiển thị slide trước đó
    function showPrevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slideCount - visibleSlides; // Quay lại slide cuối
        }
        updateSlidePosition();
    }

    // Thêm sự kiện cho nút điều hướng
    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

    // Khởi tạo vị trí ban đầu
    updateSlidePosition();
});

document.addEventListener('DOMContentLoaded', function() {
    // Countdown Timer - Set the countdown to 5 days from now
    let countDownDate = new Date().getTime() + (5 * 24 * 60 * 60 * 1000);

    let x = setInterval(function() {
        let now = new Date().getTime();
        let distance = countDownDate - now;

        // Calculate days, hours, minutes, and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById("day1s").innerHTML = days < 10 ? "0" + days : days;
        document.getElementById("hour1s").innerHTML = hours < 10 ? "0" + hours : hours;
        document.getElementById("minute1s").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("second1s").innerHTML = seconds < 10 ? "0" + seconds : seconds;

        // If the countdown is finished
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("day1s").innerHTML = "00";
            document.getElementById("hour1s").innerHTML = "00";
            document.getElementById("minute1s").innerHTML = "00";
            document.getElementById("second1s").innerHTML = "00";
        }
    }, 1000);
});


document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelector('.our-product .product-grid');
    const slideCount = slides ? slides.children.length : 0;
    const visibleSlides = 4; // Number of slides visible at once
    const prevButton = document.querySelector('.Our-product-content .prev-slide');
    const nextButton = document.querySelector('.Our-product-content .next-slide');

    if (!slides || !prevButton || !nextButton) return;

    function getSlideWidth() {
        return slides.children[0] ? slides.children[0].offsetWidth : 0;
    }

    function updateSlidePosition() {
        const slideWidth = getSlideWidth();
        const maxScroll = (Math.ceil(slideCount / visibleSlides) - 1) * slideWidth; // Adjust max scroll
        const offset = currentIndex * slideWidth;

        slides.style.transform = `translateX(-${Math.min(offset, maxScroll)}px)`;
    }

    function showNextSlide() {
        const totalSlides = Math.ceil(slideCount / visibleSlides);
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    }

    function showPrevSlide() {
        const totalSlides = Math.ceil(slideCount / visibleSlides);
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    }

    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

    window.addEventListener('resize', updateSlidePosition);

    updateSlidePosition();
});


function toggleDropdown() {
    const dropdown = document.querySelector('.profile-dropdown-list');
    dropdown.classList.toggle('active');
}

document.querySelector('.profile-dropdown-btn').addEventListener('click', toggleDropdown);

//slidebar

const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slide');
const textContents = document.querySelectorAll('.text-content');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        // Xóa active class
        dots.forEach(d => d.classList.remove('active'));
        slides.forEach(s => s.classList.remove('active'));
        textContents.forEach(tc => tc.classList.remove('active'));

        // Thêm active class cho slide và dot hiện tại
        dot.classList.add('active');
        slides[index].classList.add('active');
        textContents[index].classList.add('active');
    });
});
