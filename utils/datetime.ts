"use client"

export const DateTime = (pasteID:string) => {
  const timestamp = pasteID.toString().substring(0,8)
  const datetime = new Date(parseInt( timestamp, 16 ) * 1000)
  const splidate = datetime.toLocaleDateString().toString().split('/')
  const time = datetime.toLocaleTimeString()
  
  let date:Array<string> = []
  const change = (val:string) => {
    if (val.length < 2) {
      date.push('0'+val)
    } else {
      date.push(val)
    }
  }
  splidate.forEach(change)
  const month:any = date.shift()
  date.splice(1,0,month)
  return {date:date.reverse().join('-').toString(),time:time}
}