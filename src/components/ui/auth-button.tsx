import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const authButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[#351C75] font-inter font-semibold text-base text-primary-foreground hover:bg-[#5C3FA3] h-12 px-2 py-2",
        secondary: "font-inter font-semibold text-base text-[#351C75] hover:bg-secondary/80 h-12 px-2 py-2 border border-[#351C75]",
        ghost: "hover:bg-accent hover:text-accent-foreground h-12 px-2 py-2",
      },
      size: {
        default: "h-12 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-14 rounded-md px-8",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface AuthButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof authButtonVariants> {
  asChild?: boolean
}

const AuthButton = React.forwardRef<HTMLButtonElement, AuthButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(authButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
AuthButton.displayName = "AuthButton"

export { AuthButton, authButtonVariants }