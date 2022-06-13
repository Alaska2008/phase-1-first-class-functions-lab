// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers =(drivers) => {
       return drivers.slice(0, 2)
};

const returnLastTwoDrivers =(drivers) => {
        return drivers.slice(-2);
};

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(x){
        return function multip(fare){
                return fare*x;
        }
}
function fareDoubler(fare){
        return fare*2;
     }
function fareTripler(fare){
        return fare*3;
}
function selectDifferentDrivers(arrayOfDrivers, func){
     const arr = [...func]
    return arr;

}