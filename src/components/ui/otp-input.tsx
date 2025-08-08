import * as React from "react"
import { cn } from "@/lib/utils"

export interface OTPInputProps {
  length?: number
  value: string
  onChange: (value: string) => void
  className?: string
}

const OTPInput = React.forwardRef<HTMLDivElement, OTPInputProps>(
  ({ length = 6, value, onChange, className }, ref) => {
    const inputRefs = React.useRef<(HTMLInputElement | null)[]>([])

    const handleChange = (index: number, inputValue: string) => {
      if (inputValue.length > 1) {
        inputValue = inputValue.slice(-1)
      }

      const newValue = value.split("")
      newValue[index] = inputValue
      onChange(newValue.join(""))

      if (inputValue && index < length - 1) {
        inputRefs.current[index + 1]?.focus()
      }
    }

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
      if (e.key === "Backspace" && !value[index] && index > 0) {
        inputRefs.current[index - 1]?.focus()
      }
    }

    const handlePaste = (e: React.ClipboardEvent) => {
      e.preventDefault()
      const pastedData = e.clipboardData.getData("text").slice(0, length)
      onChange(pastedData)
    }

    return (
      <div ref={ref} className={cn("flex gap-3 justify-center", className)}>
        {Array.from({ length }, (_, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={value[index] || ""}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className="w-12 h-12 text-center border border-input-border bg-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-lg font-medium"
          />
        ))}
      </div>
    )
  }
)
OTPInput.displayName = "OTPInput"

export { OTPInput }