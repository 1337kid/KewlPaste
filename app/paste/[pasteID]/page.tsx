"use client"
import { useParams,useRouter } from "next/navigation"
import { Button, HrtlLine } from "@components"
import { useState,useEffect } from 'react'
import { DateTime } from '@utils/datetime'

const Page = () => {
  const pasteID = useParams().pasteID.toString()
  const [paste,setPaste] = useState({title:'Loading...',paste:'Loading...'})
  const [datetime,setDatetime] = useState({date:'',time:''})
  const router = useRouter()

  useEffect(() => {
    fetch(`/api/paste/${pasteID}`).then(res => res.json()).then(data => setPaste(data))
    setDatetime(DateTime(pasteID))
  },[pasteID])

  return (
    <div>
      <h4 className="text-2xl font-medium pl-1 pb-4">{paste.title}</h4>
      <HrtlLine/>
      <pre className="my-4 bg-[rgba(4,4,4,0.58)] p-2 font-mono text-sm border border-gray-600 rounded-md overflow-auto">
        {paste.paste}
      </pre>
      {paste.title !==null &&
      <div className="flex flex-row justify-between">
        <div className="w-full flex flex-col gap-3 pb-5">
          <div className="self-center">Created On: {datetime.date}</div>
          <div className="self-center">Time: {datetime.time}</div>
        </div>
        <div className="w-full flex flex-col gap-3 pb-5">
          <div className="self-center">Size: {paste.paste.length}</div>
          <div className="self-center">
            <Button text="View Raw Text" type="button" onClick={() => router.push(`/paste/${pasteID}/raw`)}/>
          </div>
        </div>
      </div>
      }
      <HrtlLine/>
    </div>
  )
}

export default Page