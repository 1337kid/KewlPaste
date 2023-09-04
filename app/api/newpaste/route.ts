import connectToDB from '@utils/database'
import Paste from '@models/paste'

export const POST = async(req:Request) => {
  const {title,paste} = await req.json()
  try {
    await connectToDB();
    const newPaste = new Paste({title,paste})
    await newPaste.save()
    return new Response(JSON.stringify({message:'OK',pasteID:newPaste._id}),{status:200})
  } catch(error) {
    console.log(error)
  }
}