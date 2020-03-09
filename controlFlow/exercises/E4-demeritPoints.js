
// Speed limit = 70
// 5 -> 1 point
// Math.floor()

// Return points above the speed limit
function checkSpeed (speed) {

    const speedLimit = 70;

    let points = 0;

    if (speed === speedLimit) {
        return points;
    }
    if (speed > speedLimit) {
        points += Math.floor((speed - speedLimit) / 5);
    }
    return points;
}

console.log(checkSpeed(76));