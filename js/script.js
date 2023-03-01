//burger

let header__burger = document.querySelectorAll(".header__burger,.header__link");
let header__menu = document.querySelector(".header__menu");
let back = document.querySelector("body");

header__burger.forEach(function (item) {
  item.onclick = function () {
    item.classList.toggle("active");
    header__menu.classList.toggle("active");
    back.classList.toggle("lock");
  };
});

// background image
function ibg(){

let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}

ibg();

// slider

$(document).ready(function(){
  $('.slider').slick({
   
    arrows: true, //  false,
    dots: true,
    adaptiveHeight: true,  // для авторегулировки по высоте 
    slidesToShow: 3,//количество слайдов на вывод
    slidesToScroll: 1,//количество листаемых сладов 
    speed: 800,//скорость анимации, перехода
    easing: "linear",// вид анимации
    infinite: true,// true false имеет окончатие слайда
    initialSlide: 0,// стартовый слайд


    autoplay:false, //автопролиствыание
    autoplaySpeed:2000, //скорость автопролиствыание
    pauseOnFocus: true,  //пауза при фокусе
    pauseOnHover: true,   //пауза при наведении
    pauseOnDotsHover: true,//пауза при наведении на буллеты


    draggable:true, //отключает свайп на ПК, мышкой ничего не листнешь
    swipe: true, //на тачскрине не свайпнет
    touchThreshold: 5,//чувствительность срабатывания при свайпе 
   touchMove: true, //не сможем дергать(качать) слайдер 
    waitForAnimate: false,//переключение только при завершении анимации

    centerMode: true,// первый слайд встанет по центру
    variableWidth:false,// true пропадает ширина слайда, картинки будут всплошную ,33м

    // rows:1,//кол-во рядов в слайде
    // slidesPerRow: 1,// количество колонок слайдера


    // vertical: true, //вертикальный слайдер
    //  verticalSwiping: true, // вертикальный свайп

    asNavFor: '.sliderbig',//связать слайдеры
    responsive: [// breakpoint
      {
        breakpoint: 768,
        settings: {
           slidesToShow: 2,//количество слайдов на вывод

        }
      },
      {
        breakpoint: 447,
        settings: {
           slidesToShow: 1,//количество слайдов на вывод

        }
      }
    ],
    // mobileFirst:false,// из макс ширину на мин ширину
    // appendArrows:$(".content"), //куда будет выводится стрелки переключения
    // appendDots:$(".content"), //куда будет выводится буллеты переключения
  });
  $('.sliderbig').slick({
    arrows: false,
    fade: true,//покажет только одно изображение! плавная замена слайда
    asNavFor:'.slider',//связать слайдеры
      });
  
});

//события в слайдере 50минут
//методы 52.44минут
// добавить, удатить, фильтр
//фильтр 55м


// $(document).ready(function () {
//   $(".block__title").click(function (event) {
//     // ефект аккордеона(только одна вкладка может быть открыта)
//     if ($(".block").hasClass("one")) {
//       $(".block__title").not($(this)).removeClass("active");
//       $(".block__text").not($(this).next()).slideUp(300);
//     }
//     // закоментироваать участок чтобы убрать этот эфект(либо убрать класс "one" в html )
//     $(this).toggleClass("active").next().slideToggle(300);
//   });
// });
