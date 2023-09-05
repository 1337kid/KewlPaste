import Paste from "@models/paste";
import connectToDB from "@utils/database";

export const GET = async(req:Request,{params}:any) => {
  const re = new RegExp(/[0-9a-f]{24}/)
  if(!re.test(params.pasteID)) {
    return new Response(JSON.stringify({error:'Invalid Paste ID'}),{status:400})
  }

  try {
    await connectToDB()
    const paste = await Paste.findById(params.pasteID)
    if (!paste) return new Response(JSON.stringify({error:'Paste Not found'}),{status:404})
    return new Response(JSON.stringify(paste),{status:200})
  } catch (err) {
    return new Response(JSON.stringify({error:'Error'}),{status:500})
  }
}