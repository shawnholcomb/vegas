$(document).ready(function () {

    // Get weather
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=lasvegas&units=imperial&appid=bb66b68dfc67c1bf375e7e579026ca2f",
        success: function (data) {
            var temp = data.main.temp;
            $(".lv-weather").text(temp);
        },
        error: function (data) {
            console.log(data);
        }
    })

    // Get current time
    var today = new Date();
    var date = today.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
    var splitTime = date.split(",");
    var time = splitTime[1].trim();

    $(".lv-time").text(time);

    // Countdown
    var countDownDate = new Date("Aug 27, 2021 00:00:00").getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
    
    $(".ht1").on("click", function() {
        var newPic = $(this).attr("src");
        $(".ht1-lg").attr("src", newPic);
    })

    $(".ht2").on("click", function() {
        var newPic = $(this).attr("src");
        $(".ht2-lg").attr("src", newPic);
    })

    $(".ht3").on("click", function() {
        var newPic = $(this).attr("src");
        $(".ht3-lg").attr("src", newPic);
    })

    $(".ht4").on("click", function() {
        var newPic = $(this).attr("src");
        $(".ht4-lg").attr("src", newPic);
    })

    // Why?
    var whyArr = ["Why is Jadakiss as hard as it gets?", "Why is the industry designed to keep the artist in debt?", "Why them dudes ain't riding if they part of your set?", "Why they never get it popping but they party to death?", "Why they gonna give you life for a murder?", "Why they selling niggas CD's for under a dime?", "If it's all love, daddy, why you come with your 9?", "Why is a brother up north better than Jordan that ain't get that break?", "Why you don't stack instead of trying to be fly?", "Why is ratting at an all time high?", "Why are you even alive?", "Why they kill 2pac n' Chris?", "Why, at the bar, you ain't take straight shots instead of poppin Cris?", "Why them bullets have to hit that door?", "Why did Kobe have to hit that raw?", "Why did Bush knock down the towers?", "Why you around them cowards?", "Why Aaliyah have to take that flight?", "Why they gotta open your package and read your mail?", "Why I can't come through in the pecan Jag?", "Why did crack have to hit so hard?", "Why they come up with the witness protection?", "Why they let the Terminator win the election?", "Why sell in the stores what you could sell in the streets?", "Why I say the hottest shit but we sellin' the least?", "Why Halle have to let a white man pop her to get a Oscar?", "Why Denzel have to be crooked before he took it?", "Why they didn't make the CL6 with a clutch?", "If you don't smoke why the hell you reaching for my dutch?!", "Why rap? Cause I need air time", "Why be on the curb with a 'Why lie? I need a beer' sign?", "Why they ain't give us a cure for AIDS?", "Why my diesel have fiends in the spot on the floor for days?", "Why you screaming like it's a slug? It's only the hawk", "Why my buzz in L.A. ain't like it is in New York?", "Why they forcing you to be hard?", "Why ain't you a thug by choice?"];
    var randomWhy = whyArr[Math.floor(Math.random() * whyArr.length)];
    $(".why").text(randomWhy);
})

// Scroll to top
const backToTopButton = document.querySelector(".top-button");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 350) {
        if (!backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnExit");
            backToTopButton.classList.add("btnEntrance")
            backToTopButton.style.display = "block";
        }
    } else {
        if (backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnEntrance");
            backToTopButton.classList.add("btnExit")
            backToTopButton.style.display = "none";
        }    }
}

backToTopButton.addEventListener("click", backToTop)

function backToTop() {
    window.scrollTo(0, 0);
}