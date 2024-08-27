document.addEventListener("DOMContentLoaded", function() {
    var loadingSpinner = document.querySelector(".loading-wrap");

    // 로딩 완료 시 로딩 스피너 숨김
    setTimeout(function() {
        loadingSpinner.style.display = "none";
    }, 1000);  // 1초 후에 스피너 숨기기
});