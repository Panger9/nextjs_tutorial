"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"



export default function CreateForm() {

  const router = useRouter()

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [priority, setPriority] = useState("low")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const ticket = {title, body, priority, user_email: "mario@netninja.dev"}

    const res = await fetch(`http://localhost:4000/tickets`, {
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(ticket)
    })
    setIsLoading(false)

    if(res.status === 201){
      router.push("/tickets")
    }

  }

  return (

    <div>

      <form onSubmit={handleSubmit} className="w-1/2">

      <label htmlFor="">Title: </label>
        <input type="text" aria-label="Title" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title} />

        <label htmlFor="">Text</label>
        <input type="text" aria-label="your text" placeholder="Your text" onChange={(e) => setBody(e.target.value)} value={body}/>
 
        <label htmlFor="">Priority</label>
        <select name="priority" onChange={(e) => setPriority(e.target.value)} value={priority}  >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <button
        className="btn-primary"
        disabled={isLoading}
        >
          {isLoading ? "adding" : "Add Ticket"}
        </button>

      </form>
    </div>

  )
}
