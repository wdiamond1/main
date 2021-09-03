(function (document, $) {
    document.addEventListener("DOMContentLoaded", function (event) {
        var timeEnd = new Date("2021-10-29").setHours(0, 0, 0, 0);
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = "0" + dd;
        }
        if (mm < 10) {
            mm = "0" + mm;
        }
        var initDate = new Date(timeEnd);
        var countDownDate = initDate.getTime();
        var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            if (days < 10)
                days = `0${days}`;
            if (hours < 10)
                hours = `0${hours}`;
            if (minutes < 10)
                minutes = `0${minutes}`;
            if (seconds < 10)
                seconds = `0${seconds}`;
            document.getElementById('days').innerText = days;
            document.getElementById('hours').innerText = hours;
            document.getElementById('minutes').innerText = minutes;
            document.getElementById('seconds').innerText = seconds;
            if (distance < 0) {
                clearInterval(x);
            }
        }, 1000);
        document.getElementById('timeEnd').innerText = initDate.toString();
    });
    $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            loop: false,
            margin: 10,
            responsiveClass: true,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                768: {
                    items: 2,
                    nav: true
                },
                992: {
                    items: 3,
                    nav: true
                },
                1200: {
                    items: 4,
                    nav: true,
                    loop: false,
                    margin: 20
                }
            }
        })
    })

})(document, $);
