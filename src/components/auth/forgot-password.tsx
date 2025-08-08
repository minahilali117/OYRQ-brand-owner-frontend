import React, { useState } from "react"
import { AuthInput } from "@/components/ui/auth-input"
import { AuthButton } from "@/components/ui/auth-button"

interface ForgotPasswordProps {
  onBack: () => void
  onContinue: () => void
}

export const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onBack, onContinue }) => {
  const [email, setEmail] = useState("jon_doe123@gmail.com")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onContinue()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-8">OYRQ</h1>
          
          <div className="flex items-center justify-center mb-6">
            <button
              onClick={onBack}
              className="absolute left-4 flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            <h2 className="text-2xl font-semibold text-foreground">Forgot Password</h2>
          </div>
          
          <p className="text-muted-foreground mb-8">
            Please, enter your email address. You will receive an OTP via email.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-muted-foreground mb-2">
              Email Address
            </label>
            <AuthInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jon_doe123@gmail.com"
            />
          </div>

          <AuthButton type="submit" className="w-full">
            CONTINUE
          </AuthButton>
        </form>
      </div>
    </div>
  )
}