function countDown()
{
    var today = new Date();
    var eventDate = new Date("September 11,2020 08:45:00"),

    var currentTime = today.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime;

    var sec = Math.floor(remTime/1000);
    var min = Math.floor(sec/60);
    var hrs = Math.floor(min/60);
    var days = Math.floor(hrs/24);

    hrs = hrs % 24;
    min%=60;
    sec%=60;

    document.getElementById("days").innerHTML = "days";
    document.getElementById("hrs").innerHTML = "hrs";
    document.getElementById("min").innerHTML = "min";
    document.getElementById("sec").innerHTML = "sec";
}

countDown();


