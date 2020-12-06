$(function() {
    var $nav   = $('#navArea');
    var $btn   = $('.toggle_btn');
    var $mask  = $('#mask');
    var open   = 'open'; // class
    // menu open close
    $btn.on( 'click', function() {
      if ( ! $nav.hasClass( open ) ) {
        $nav.addClass( open );
      } else {
        $nav.removeClass( open );
      }
    });
    // mask close
    $mask.on('click', function() {
      $nav.removeClass( open );
    });

    var setImg = '#viewer';
    var fadeSpeed = 1500;
    var switchDelay = 5000;

    $(setImg).children('img').css({opacity:'0'});
    $(setImg + ' img:first').stop().animate({opacity:'1'},fadeSpeed);

    setInterval(function(){
        $(setImg + ' :first-child').animate({opacity:'0'},fadeSpeed).next('img').animate({opacity:'1'},fadeSpeed).end().appendTo(setImg);
    },switchDelay);

    let mySwiper = new Swiper(".swiper-container", {
        // Optional parameters
        loop: true, // ループの指定
        effect: "fade", //フェードの指定
        autoplay: {
            delay: 4000, //４秒後に次のスライドへ
            disableOnInteraction: false //ユーザー側で操作してもスライドを止めない
        },
        speed: 2000, //２秒かけてフェードで切り替わる
        pagination: { // 丸のページネーションを使うなら書く
            el: ".swiper-pagination"
        },
      });




    // headerの変化用
    $(window).scroll(function(){
        if ($(window).scrollTop() > 0) {
            $('.header').css( 'background', '#FFFFFF' );
            $('.header').css( 'transition', 'all 0.5s' );
            $('.header__logo-ttl').css( 'color', '#000000' );
            $('.header__link-rooms').css( 'color', '#000000' );
            $('.header__link-meals').css( 'color', '#000000' );
            $('.header__link-bath').css( 'color', '#000000' );
            $('.header__logo-img').css( 'display', 'none' );
            $('.header__logo-img-s').css( 'display', 'unset' );
            $('.toggle__span').css( 'background', '#000000' );
        } else {
            $('.header').css( 'background', 'none' );
            $('.header__logo-ttl').css( 'color', '#FFFFFF' );
            $('.header__link-rooms').css( 'color', '#FFFFFF' );
            $('.header__link-meals').css( 'color', '#FFFFFF' );
            $('.header__link-bath').css( 'color', '#FFFFFF' );
            $('.header__logo-img').css( 'display', 'unset' );
            $('.header__logo-img-s').css( 'display', 'none' );
            $('.toggle__span').css( 'background', '#FFFFFF' );
        }
    });

    // 下から上にフェードイン
    $(window).scroll(function (){
        // top
        $('.content__imgs').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 250){
                $(this).addClass('scrollin');
            }
        });
        $('.content__block').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 250){
                $(this).addClass('scrollin');
            }
        });
        $('.plan__contents').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 250){
                $(this).addClass('scrollin');
            }
        });
        $('.news__contents').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 250){
                $(this).addClass('scrollin');
            }
        });
        $('.access__inner').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 250){
                $(this).addClass('scrollin');
            }
        });
        // rooms
        $('.rooms__content').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 250){
                $(this).addClass('scrollin');
            }
        });
        // meal
        $('.meal__content').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 250){
                $(this).addClass('scrollin');
            }
        });
        // bath
        $('.bath__content').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 250){
                $(this).addClass('scrollin');
            }
        });
    });

    // modal(宿泊予約押下時)
    $('.js-modal-open').on('click',function(){
        $('.js-modal').fadeIn();
        return false;
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });

    // 宿泊予約のカレンダー
    const config = {
        minDate: "today",
        dateFormat: "Y-m-d",
        mode: "range",
    }
    flatpickr('.input__flatpickr', config);

        // お知らせのタブ切り替え
        // ①タブをクリックしたら発動
    $('.news__link p').click(function() {
        // ②クリックされたタブの順番を変数に格納
        var index = $('.news__link p').index(this);
        // ③クリック済みタブのデザインを設定したcssのクラスを一旦削除
        $('.news__link p').removeClass('active');
        // ④クリックされたタブにクリック済みデザインを適用する
        $(this).addClass('active');
        // ⑤コンテンツを一旦非表示にし、クリックされた順番のコンテンツのみを表示
        $('.news__inner ul').removeClass('show').eq(index).addClass('show');
    });
})
