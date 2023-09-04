"use client"
import { ButtonProps } from "@types"

const Button = ({text,onClick,type,disabled}:ButtonProps) => {
  return (
    <div className="flex justify-center">
      <button type={type || 'button'} disabled={disabled || false} className="border border-violet-600 py-1.5 px-3 rounded-md hover:bg-violet-600 hover:text-black text-[16px] disabled:cursor-not-allowed hover:gradient" onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button