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
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-8">
      <h1 className="text-6xl font-brand font-bold text-[#351C75] mb-8 text-center">OYRQ</h1>
      <div className="relative w-full max-w-md mx-auto">
        <div className="flex items-center mb-6" style={{ position: 'relative' }}>
          <button
            onClick={onBack}
            className="flex items-center text-black"
            style={{ position: 'absolute', left: '-70px', top: '50%', transform: 'translateY(-50%)', padding: 0, fontWeight: 500, fontSize: '1rem', lineHeight: '2rem' }}
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <h2 className="text-3xl font-brand font-bold text-foreground" style={{marginBottom: 0}}>Forgot Password</h2>
        </div>
        <p className=" font-inter text-[#8C8C8C] mb-6">
          Please, enter your email address. You will receive an OTP via email.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-inter text-sm text-[#8C8C8C] mb-2">
              Email Address
            </label>
            <AuthInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jon_doe123@gmail.com"
              className="bg-white"
            />
          </div>
          <AuthButton type="submit" className="w-full mt-4">
            CONTINUE
          </AuthButton>
        </form>
      </div>
    </div>
  )
}