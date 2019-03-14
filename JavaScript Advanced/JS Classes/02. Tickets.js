function solve(ticketsDescription, sortingCritearia) {
    let tickets = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    for(let ticket of ticketsDescription){
        let ticketTokens = ticket.split('|');
        let destination = ticketTokens[0];
        let price = Number(ticketTokens[1]);
        let status = ticketTokens[2];

        tickets.push(new Ticket(destination, price, status));
    }
   return tickets = tickets.sort((a,b)=>{
       if(a[sortingCritearia] < b[sortingCritearia]){
           return -1;
       } else if (a[sortingCritearia] > b[sortingCritearia]) {
           return 1;
       }
       return 0;
   });
}