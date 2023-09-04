import Paste from "@models/paste";
import connectToDB from "@utils/database";
import { redirect  } from "next/navigation";

export const GET = async(req:Request,{params}:any) => {
  try {
    await connectToDB()
    const paste = await Paste.findById(params.pasteID)
    if (!paste) redirect('/')
    return new Response(`${paste.paste}`,{status:200})
  } catch (err) {
    redirect('/')
  }
}