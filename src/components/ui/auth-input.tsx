import * as React from "react"
import { cn } from "@/lib/utils"

export interface AuthInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  showPassword?: boolean
  onTogglePassword?: () => void
}

const AuthInput = React.forwardRef<HTMLInputElement, AuthInputProps>(
  ({ className, type, showPassword, onTogglePassword, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-14 w-full rounded-lg border border-input-border bg-input px-4 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
AuthInput.displayName = "AuthInput"

export { AuthInput }