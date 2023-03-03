class FlightReservation{
    Ticket = [];
    setTicket(id,seatNum,flightNum,depAirport,arrivalAirport,date) {
        let ticket = { id, seatNum, flightNum, depAirport, arrivalAirport, date };
        this.Ticket.push(ticket);
       
    }
    getInfo(ID) {
        let flightInfo;
        this.Ticket.forEach(element => {
            if (element.id == ID) {
                flightInfo = element;
            }
        });
        return flightInfo;
    }
    updateTicket(ID, seatNum, flightNum, depAirport, arrivalAirport, date) {
        let updatedTicket;
        this.Ticket.forEach(element => {
            if (element.id == ID) {
                element.seatNum = seatNum;
                element.depAirport = depAirport;
                element.flightNum = flightNum;
                element.arrivalAirport = arrivalAirport;
                element.date = date;
                updatedTicket = element;
                

            }
        });
        return updatedTicket;
         
    }
}

module.exports = {
    FlightReservation
}