const returnFirstTwoDrivers = function(arrayOfDrivers){

    let drivers = [...arrayOfDrivers.slice(0,2)];
    return drivers;

}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);

const returnLastTwoDrivers = function(arrayOfDrivers){

    let drivers = [...arrayOfDrivers.slice(arrayOfDrivers.length -2)];
    return drivers;
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){

    return function(fare){
        return fare * int;
    }
}
const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare);
}
 const fareTripler = function(fare){
    return createFareMultiplier(3)(fare);
 }

 function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers){

    return returnFirstTwoDrivers(arrayOfDrivers);
 }