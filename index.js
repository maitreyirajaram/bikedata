const d3 = require('d3');

const mostPopularStation = (data, fieldName) => {
    var stationFreq = new Map();
    data.forEach(function(item){ //function (...)
        stnId = item[fieldName];
        if (stationFreq.has(stnId)){
            var v= stationFreq.get(stnId);
            stationFreq.set(stnId, v+1);
            }else{
                stationFreq.set(stnId, 1)
            };
        });
    var maxCount = 0;
    var stnMaxCount = null;
    for (var[key, value] of stationFreq.entries()) {
        if (value > maxCount){
        stnMaxCount = key;
        maxCount = value;
        }
    }
    return stnMaxCount;
 }
const numMonthlyPass = (data) => {
    var FlexMonthlyPassCount = 0;
    data.forEach(function(item){
        if((item["Passholder Type"] === ("Monthly Pass")) || (item["Passholder Type"] === ("Flex Pass"))){
            FlexMonthlyPassCount++;}
        });
    return FlexMonthlyPassCount;
}

// Assuming that the biker travels 15.5 km/h, obtained from: https://en.wikipedia.org/wiki/Bicycle_performance#Typical_speeds
const tripDistanceSetSpeed = (data) => {
    var noOfTrips = 0;
    var totalDistance = 0;
    data.forEach(function(item){
        startTime = item["Start Time"];
        endTime = item["End Time"];
        var unixStart = Date.parse(startTime);
        var unixEnd = Date.parse(endTime);
        var diffInMilliseconds = unixEnd - unixStart;
        var tripDistance = (diffInMilliseconds)*(15.5/3600000); //t (ms)* 15.5km/ms = km distance
        totalDistance += tripDistance;
        noOfTrips++;
    });
    return Math.round(totalDistance/noOfTrips);
}

const main = () => {
    d3.csv("https://mattieraj.github.io/DojoTest/metro-bike-share-trip-data.csv", function(data) {
        var mostPopularStartingStation = mostPopularStation(data, "Starting Station ID");
        var mostPopularEndingStation = mostPopularStation(data, "Ending Station ID");
        var numOfPasses = numMonthlyPass(data);
        var distance = tripDistanceSetSpeed(data);
        console.log("Start station" + mostPopularStartingStation);
        console.log("Ending station" + mostPopularEndingStation);
        console.log("Num passes" + numOfPasses);
        console.log("Avg distance" + distance);
    });
}

module.exports = {mostPopularStation, numMonthlyPass, tripDistanceSetSpeed, main}


