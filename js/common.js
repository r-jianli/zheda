
/*
 * 公共js
 */
appearShow();
appleftShow();
apprightShow();
appImgShow();
appAftShow();
appinTop();
// 当前页面头部导航高亮

function appImgShow() {
    $(".appImg").each(function () {
        var fold = $(window).height(); //屏幕高度
        if (fold > $(this).offset().top) {
            $(this).addClass("app_I");
        }else{
            $(this).removeClass("app_I");
        }
    });
}
function appAftShow() {
    $(".appArf").each(function() {
        var fold = $(window).height() + $(window).scrollTop();
        if (fold > $(this).offset().top) {
            $(this).addClass("appArter");
        }else{
            $(this).removeClass("appArter");
        }
    });
}
function appearShow() {
    $(".wgt-fade-animate").each(function() {
        var fold = $(window).height() + $(window).scrollTop();
        if (fold > $(this).offset().top) {
            $(this).addClass("appear");
        }else{
            $(this).removeClass("appear");
        }
    });
}
function appleftShow() {
    $(".app_left").each(function() {
        var fold = $(window).height() + $(window).scrollTop();
        if (fold > $(this).offset().top) {
            $(this).addClass("app_h");
        }else{
            $(this).removeClass("app_h");
        }
    });
}
function apprightShow() {
    $(".app_right").each(function() {
        var fold = $(window).height() + $(window).scrollTop();
        if (fold > $(this).offset().top) {
            $(this).addClass("app_r");
        }else{
            $(this).removeClass("app_r");
        }
    });
}
function appinTop() {
    $(".inTop").each(function() {
        var fold = $(window).height() + $(window).scrollTop();
        if (fold > $(this).offset().top) {
            $(this).addClass("inTopA");
        }else{
            $(this).removeClass("inTopA");
        }
    });
}

$(function() {
   
    // 滚至可见区域渐现
    $(window).bind("scroll", function(event) {
        appearShow();
        appleftShow();
        apprightShow();
        appImgShow();
        appAftShow();
        appinTop();
    });

    $(".wgt-fade-animate").on("appear", function() {
        $(this).addClass('appear');
    });
    $(".app_left").on("app_h", function() {
        $(this).addClass('app_h');
    });
    $(".app_right").on("app_r", function() {
        $(this).addClass('app_r');
    });
    $(".appImg").on("app_I", function() {
        $(this).addClass('app_I');
    });
    $(".appArf").on("appArter", function() {
        $(this).addClass('appArter');
    });
    $(".inTop").on("appArter", function() {
        $(this).addClass('inTopA');
    });
});

$(function (){
	var div2H2 = $('body').offset().top;
    
    // 滚动条事件		
	$(window).scroll(function(){		
		var scroH2 = $(window).scrollTop();		//页面滚动距离
		if(scroH2>=10){
            $('header').addClass('header_bg');		    		                		   
		}else{
            $('header').removeClass('header_bg');     		   
		}
	})

    // 页面出现效果
    $(".wgt-fade-animate").each(function () {
        var fold = $(window).height(); //屏幕高度
        if (fold > $(this).offset().top) {
            $(this).addClass("appear");
        }else{
            $(this).removeClass("appear");
        }
    });
    $(".app_left").each(function () {
        var fold = $(window).height(); //屏幕高度
        if (fold > $(this).offset().top) {
            $(this).addClass("app_h");
        }else{
            $(this).removeClass("app_h");
        }
    });
    $(".app_right").each(function () {
        var fold = $(window).height(); //屏幕高度
        if (fold > $(this).offset().top) {
            $(this).addClass("app_r");
        }else{
            $(this).removeClass("app_r");
        }
    });
    $(".appImg").each(function () {
        var fold = $(window).height(); //屏幕高度
        if (fold > $(this).offset().top) {
            $(this).addClass("app_I");
        }else{
            $(this).removeClass("app_I");
        }
    });
    $(".appArf").each(function () {
        var fold = $(window).height(); //屏幕高度
        if (fold > $(this).offset().top) {
            $(this).addClass("appArter");
        }else{
            $(this).removeClass("appArter");
        }
    });
    $(".headMenu").on('click', function () {
        $(this).toggleClass("active");
        $(".moHead_mlb").slideToggle()
        $('header').toggleClass("headerM");
    });
    $(".inTop").each(function() {
        var fold = $(window).height() + $(window).scrollTop();
        if (fold > $(this).offset().top) {
            $(this).addClass("inTopA");
        }else{
            $(this).removeClass("inTopA");
        }
    });
})


// //给页面绑定滑轮滚动事件  
// if (document.addEventListener) {//firefox  
//     document.addEventListener('DOMMouseScroll', scrollFunc, false);  
// }  
// //滚动滑轮触发scrollFunc方法  //ie 谷歌  
// window.onmousewheel = document.onmousewheel = scrollFunc;   
