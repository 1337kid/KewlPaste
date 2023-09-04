import { Schema, model, models } from "mongoose";

const pasteSchema = new Schema({
  id: Schema.Types.ObjectId,
  title: String,
  paste: String
})

const Paste = models.Paste || model('Paste',pasteSchema)

export default Paste