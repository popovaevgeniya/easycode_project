import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import $ from 'jquery';

function makeSlider(){
    if ($(window).width() < 480) {
        $('.reviewsSlider').slick({
            dots: true,
            arrows: true,
            infinite: true,
            speed: 100,
            slidesToShow: 1
        });
    }
};

makeSlider();