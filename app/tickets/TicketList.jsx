import Link from "next/link";

async function GetTickets(){
  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 30
    }
  });
  const data = await res.json();
  
  return data;
}


export default async function TicketList() {

  const tickets  = await GetTickets();


  return (
    <>
    
    {tickets.map((ticket) => (
      <div key={ticket.id} className="card my-5">
        <Link href={`/tickets/${ticket.id}`}>
        
        <h3>{ticket.title}</h3>
        <p >{ticket.body.slice(0, 200)}...</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
        </Link>
      </div>
    ))}
    {tickets.length === 0 && (
      <p className="text-center">There are no open tickets, yay!</p>
    )}

    </>
  )
}