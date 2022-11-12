let progressBar = document.getElementById('progressBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
  let progress = (window.pageYOffset / totalHeight) * 170;
  progressBar.style.width = progress + '%';
};



$('.slider_blocks').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrow: false,
  responsive:[
    {
        breakpoint: 1341,
        settings: {
            slidesToShow:4
        }
    },
    {
      breakpoint: 1101,
      settings: {
          slidesToShow:3
      }
    },
    {
      breakpoint: 779,
      settings: {
          slidesToShow:2
      }
    },
    {
        breakpoint: 550,
        settings: {
            slidesToShow:1
        }
    }
    ]
});