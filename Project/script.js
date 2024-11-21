let currentIndex = 0;
const banners = document.querySelectorAll('.banner-img');
const totalBanners = banners.length;

function showNextBanner() {
    banners[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalBanners;
    banners[currentIndex].classList.add('active');
}

// Thay đổi banner mỗi 3 giây
setInterval(showNextBanner, 3000);

// Chuển hình ảnh minh họa của sản phẩm
var MainImg = document.getElementById('MainImg');
var smallimg = document.getElementsByClassName('small-img');
smallimg[0].onclick = function() {
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function() {
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function() {
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function() {
    MainImg.src = smallimg[3].src;
}