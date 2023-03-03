var myMod = require("./module");


let FlightReservation = myMod.FlightReservation;

let traveller1 = new FlightReservation();
traveller1.setTicket(1, 20, 300, "JFK", "cairo", "20-11-2024");
console.log(traveller1.getInfo(1)); //printing traveller flight after setting it
traveller1.updateTicket(1, 30, 400, "germany", "alex", "24-11-2024"); // updating traveller flight 
console.log(traveller1.getInfo(1)); //printing traveller fligh info after updating


let traveller2 = new FlightReservation();
traveller2.setTicket(2, 25, 360, "Paris", "JFK", "20-1-2024");
console.log(traveller2.getInfo(2));
traveller2.updateTicket(2, 60, 500, "london", "JFK", "30-1-2025");
console.log(traveller2.getInfo(2));

