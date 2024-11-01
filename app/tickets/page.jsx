import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";
import Link from "next/link";

export default function Tickets() {

  return ( 
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Currently open tickets.</small></p>
          <p><small>Erstelle ein Ticket <Link href="/tickets/create">hier</Link></small></p>
        </div>
      </nav>

      <Suspense fallback={<Loading/>}>
        <TicketList/>
      </Suspense>
      
    </main>
   );
}
 
