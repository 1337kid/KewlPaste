"use client"
import { HrtlLine, Button, AlertBox } from "@components"
import React,{useState} from 'react'
import {useRouter} from "next/navigation"

const Home = () => {
  const [paste,setPaste] = useState({title:"",paste:""})
  const [submitting,setSubmitting] = useState(false)
  const router = useRouter()
  const [error,setError] = useState('')

  const handleSubmit = async (e : React.FormEvent<EventTarget>) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const response = await fetch('/api/newpaste',{
        method:'POST',
        body:JSON.stringify({title:paste.title, paste:paste.paste})
      })
      setSubmitting(false)
      if(!response.ok) {
        response.json().then(data => setError(data.error))
      }
      if(response.ok) {
        response.json().then(data => router.push(`/paste/${data.pasteID}`))
      }
    } catch(err) {
      console.log(err)
    }
  }
  return (
    <div>
      {error && (
        <div>
          <AlertBox type="danger" handleClick={setError} alertText={error} />
        </div>
      )}
      <h4 className="font-medium text-2xl pb-4">Create a paste</h4>
      <HrtlLine/>
        <form className='flex flex-col gap-6 py-4' onSubmit={handleSubmit}>
        <input required className='form__input' disabled={submitting} placeholder='Title here' value={paste.title} onChange={(e) => setPaste({...paste,title:e.target.value})}/>
        <textarea required rows={15} className='form__input' disabled={submitting} value={paste.paste} placeholder='Enter text here...' onChange={(e) => setPaste({...paste,paste:e.target.value})}/>
        <Button disabled={submitting} type="submit" text="Submit"/>
      </form>
      <HrtlLine/>
    </div>
  )
}

export default Home