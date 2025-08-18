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
          <h2 className="text-3xl font-brand font-bold text-foreground" style={{marginBottom: 0}}>Enter OTP</h2>
        </div>
        <p className="font-inter text-[#8C8C8C] mb-6">
          An email has been sent to your email address.<br />
          Kindly verify the OTP and reset your password.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <OTPInput
            length={6}
            value={otp}
            onChange={setOtp}
            className="mb-4"
          />
          <div className="space-y-4">
            <AuthButton type="submit" className="w-full mt-8">
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