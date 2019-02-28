function solve(steps,footprint,speed){
 let distance = steps * footprint;
 let distanceKm = distance/1000;
 let restMins = Math.floor(distance/500);
 let timeSeconds = Math.ceil((distanceKm / speed) * 60 * 60) + (restMins *60);

 let hours = Math.floor(timeSeconds / 3600);
 let mins = Math.floor(timeSeconds / 60);
 timeSeconds -= mins * 60;

    var totalTime = ('0' + hours).slice(-2) + ':' + ('0' + mins).slice(-2) + ':' + ('0' + timeSeconds).slice(-2);

    console.log(totalTime);
}