import 'slick-carousel';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

function makeSlider(){
    document.getElementsByClassName('reviewsSlider')[0].slick({
        infinite: false
    });
};

makeSlider();