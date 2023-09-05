import { Dispatch, SetStateAction } from "react"

export interface ButtonProps {
  text:string
  onClick?: () => void
  type:"button" | "submit"
  disabled?: boolean
}

export interface FormProps {
  paste:object
  setPaste: Function
  handleSubmit: () => void
}

export interface AlertBoxProps {
  type:string
  handleClick: Dispatch<SetStateAction<string>>
  alertText:string | null
}