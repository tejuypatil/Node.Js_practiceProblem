//Read a Number and Display the week day (Sunday, Monday,...)


let randomCheck =( Math.floor(Math.random() * 10) % 8);

switch(randomCheck)
    {
    case 1:
        console.log(randomCheck+" - MONDAY");
        break;
    case 2:
        console.log(randomCheck+" - TUESDAY");
        break;
    case 3:
        console.log(randomCheck+" - WEDNESDAY");
        break;
    case 4:
        console.log(randomCheck+" - THURSDAY");
        break;
    case 5:
        console.log(randomCheck+" - FRIDAY");
        break;
    case 6:
        console.log(randomCheck+" - SATURDAY");
        break;
    case 7:
        console.log(randomCheck+" - SUNDAY");
        break;
    case 0:
        console.log("Invalid Input");
        break;
     }