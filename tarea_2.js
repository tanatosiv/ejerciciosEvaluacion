function movie(card, ticket, perc) 
{
    let i=1;
    let temp= ticket;
    let ticketPrice;
    let total=0;
    
    while(true)
    {
        ticketPrice=ticket*i;
        temp *=perc;
        total +=temp;
        if(ticketPrice > Math.ceil(total+card))
        {
            break;
        }
        i++;
    }
    
    return i;
} 
console.log(movie(40, 20, .90))

