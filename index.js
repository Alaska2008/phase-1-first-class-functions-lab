// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers =(drivers) => {
       return drivers.slice(0, 2)
};

const returnLastTwoDrivers =(drivers) => {
        return drivers.slice(-2);
};

const selectingDrivers =() =>{
    returnFirstTwoDrivers();
    returnLastTwoDrivers();
    return returnFirstTwoDrivers().concat(returnLastTwoDrivers());
};
