// Write your JavaScript code here.
window.addEventListener('load', init);
// Remember to pay attention to page loading!

function init () {
    const takeOff = document.getElementById("takeoff");
    const background = document.getElementById("shuttleBackground");
    const status = document.getElementById("flightStatus")
    const height = document.getElementById("spaceShuttleHeight");
    const land = document.getElementById("landing");
    const abort = document.getElementById("missionAbort");
    const up = document.getElementById("up");
    const down = document.getElementById("down"); 
    const right = document.getElementById("right");
    const left = document.getElementById("left");
    const rocket = document.getElementById("rocket");
    rocket.style.position = "relative";
    rocket.style.marginLeft = "0px";
    rocket.style.bottom = "0px";

    takeOff.addEventListener('click', function(event) {
        let response = confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            status.innerHTML = "Shuttle in flight.";
            background.style.backgroundColor = "blue";
            height.innerHTML = 10000;
        }
    })

    land.addEventListener('click', function(event) {
        alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        background.style.backgroundColor = "green";
        height.innerHTML = 0;
    })

    abort.addEventListener('click', function(event) {
        let response = confirm("Confirm that you want to abort the mission.");
        if (response) {
            status.innerHTML = "Mission aborted.";
            background.style.backgroundColor = "green";
            height.innerHTML = 0;
        }
    })

    right.addEventListener('click', function (event) {
        position = parseInt(rocket.style.marginLeft) + 10 + 'px';
        rocket.style.marginLeft = position;
    })

    left.addEventListener('click', function (event) {
        position = parseInt(rocket.style.marginLeft) - 10 + 'px';
        rocket.style.marginLeft = position;
    })

    down.addEventListener('click', function (event) {
        position = parseInt(rocket.style.bottom) - 10 + 'px';
        rocket.style.bottom = position;
    })

    up.addEventListener('click', function (event) {
        position = parseInt(rocket.style.bottom) + 10 + 'px';
        rocket.style.bottom = position;
    })

}