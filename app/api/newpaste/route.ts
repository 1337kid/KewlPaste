import connectToDB from '@utils/database';
import Paste from '@models/paste';

export const POST = async (req: Request) => {
  const { title, paste } = await req.json();

  if (title === '') {
    return new Response(
      JSON.stringify({ error: 'Title seems to be empty' }),
      { status: 400, headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' } }
    );
  } else if (paste === '') {
    return new Response(
      JSON.stringify({ error: 'Paste seems to be empty' }),
      { status: 400, headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' } }
    );
  }

  try {
    await connectToDB();
    const newPaste = new Paste({ title, paste });
    await newPaste.save();
    return new Response(
      JSON.stringify({ message: 'OK', pasteID: newPaste._id }),
      { status: 200, headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Error' }),
      { status: 500, headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' } }
    );
  }
};
