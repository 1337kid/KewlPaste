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