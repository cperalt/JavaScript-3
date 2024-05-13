
const body = document.querySelector("#body");

//SharePizza function with parameters totalSlice and number of people
const sharePizza = (totalSlice, people) => {

    let slicePerPerson = totalSlice / people;

    //Rounds slicePerPerson value to two decimal places
    slicePerPerson = Math.round(slicePerPerson * 100)/100;

    body.innerText = `Each person gets ${slicePerPerson} slices of pizza; from our ${totalSlice} slice pizza`;

    //returns string
    return `Each person gets ${slicePerPerson} slices of pizza; from our ${totalSlice} slice pizza`
};


