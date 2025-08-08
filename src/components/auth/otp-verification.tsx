import React, { useState } from "react"
import { OTPInput } from "@/components/ui/otp-input"
import { AuthButton } from "@/components/ui/auth-button"

interface OTPVerificationProps {
  onBack: () => void
  onVerify: () => void
}

export const OTPVerification: React.FC<OTPVerificationProps> = ({ onBack, onVerify }) => {
  const [otp, setOtp] = useState("697549")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onVerify()
  }

  const handleResend = () => {
    console.log("Resending OTP...")
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
            <h2 className="text-2xl font-semibold text-foreground">Enter OTP</h2>
          </div>
          
          <p className="text-muted-foreground mb-8">
            An email has been sent to your email address.<br />
            Kindly verify the OTP and reset your password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <OTPInput
            length={6}
            value={otp}
            onChange={setOtp}
            className="mb-8"
          />

          <div className="space-y-4">
            <AuthButton type="submit" className="w-full">
              VERIFY
            </AuthButton>
            
            <AuthButton 
              type="button" 
              variant="secondary" 
              className="w-full"
              onClick={handleResend}
            >
              RESEND THE CODE
            </AuthButton>
          </div>
        </form>
      </div>
    </div>
  )
}