window.onload = function () {
    //  読み込みが完了したら実行したい処理を記述
    const nav = document.getElementById('nav-wrapper');
    const hamburger = document.getElementById('js-hamburger');
    const blackBg = document.getElementById('js-black-bg');
    hamburger.addEventListener('click', function () {
        nav.classList.toggle('open');
    });
// 黒背景をクリックしたら
    blackBg.addEventListener('click', function () {
        nav.classList.remove('open');
    });
};