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
    var flexMonthlyPassCount = 0;
    data.forEach(function(item){
        if((item["Passholder Type"] === ("Monthly Pass")) || (item["Passholder Type"] === ("Flex Pass"))){
            flexMonthlyPassCount++;}
        });
    return flexMonthlyPassCount;
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

/*const passTypesData = (data) => {
    passTypesMap = new Map();
    data.forEach(function(item){
        passType = item["Passholder Type"]
        if (passTypesMap.has(passType)) {
            var v = passTypesMap.get(passType);
            passTypesMap.set(passType, v+1);
        } else {
            passTypesMap.set(passType, 1);
        }
        });
    keys = Array();
    values = Array();
    for (var[key, value] of stationFreq.entries()) {
        keys.push(key);
        values.push(values);
    }
    return {"passTypes": keys, "counts": values};
}*/

const numRoundTrips = (data) => {
    var roundCount = 0;
    data.forEach(function(item){
        if((item["Trip Route Category"] === ("Round Trip")) ){
            roundCount++;}
        });
    return roundCount;
}




module.exports = {mostPopularStation, numMonthlyPass, tripDistanceSetSpeed, numRoundTrips, main}


