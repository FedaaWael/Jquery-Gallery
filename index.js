$(document).ready(function () {
    $.fn.gallery = function () {
        var currentIndex = 0;
        var totalImages = $('.gallery a img').length;
        var sliderWidth = $('.container').width();

        function showSlide(index) {
            var offset = -index * sliderWidth;
            $('.box .slider').css('transform', 'translateX(' + offset + 'px)');
        }
        function loadImagesIntoSlider() {
            $('.slider').empty(); // Clear the slider first
            $('.gallery a img').each(function () {
                var imgSrc = $(this).attr('src');
                var imgElement = $('<img>').attr('src', imgSrc).addClass('imgmain');
                $('.slider').append(imgElement);
            });
            $('.slider').width(sliderWidth * totalImages);
        }
        $(".gallery a img").on("click", function () {
            currentIndex = $(this).parent().index();
            loadImagesIntoSlider();
            showSlide(currentIndex);
            $('.box').fadeIn();
        });
        $('.close-box').click(function () {
            $('.box').fadeOut();
        });
        $(".next").on('click', function () {
            currentIndex = (currentIndex + 1) % totalImages;
            showSlide(currentIndex);
        });

        $(".prev").on('click', function () {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            showSlide(currentIndex);
        });
        $('.box').click(function (e) {
            if (e.target === this) {
                $(this).fadeOut();
            }
        });
    }
    $("gallery a img").gallery();
});
