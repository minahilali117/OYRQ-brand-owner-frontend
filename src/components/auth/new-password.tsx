import React, { useState } from "react"
import hideIcon from "@/assets/icons/hide.png";
import unhideIcon from "@/assets/icons/unhide.png";
import { AuthInput } from "@/components/ui/auth-input"
import { AuthButton } from "@/components/ui/auth-button"

interface NewPasswordProps {
  onBack: () => void
  onSave: () => void
}

export const NewPassword: React.FC<NewPasswordProps> = ({ onBack, onSave }) => {
  const [password, setPassword] = useState("12345")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === confirmPassword) {
      onSave()
    } else {
      alert("Passwords don't match!")
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8" style={{ backgroundColor: '#fcf8fd' }}>
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
          <h2 className="text-3xl font-brand font-bold text-foreground" style={{marginBottom: 0}}>New Password</h2>
        </div>
        <p className="font-inter text-[#8C8C8C] mb-6">
          You can now set your new password here.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block font-inter text-sm" style={{ color: '#8C8C8C' }}>
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="focus:outline-none"
                >
                  {showPassword ? (
                    <img src={unhideIcon} alt="Unhide" className="h-5 w-5" />
                  ) : (
                    <img src={hideIcon} alt="Hide" className="h-5 w-5" />
                  )}
                </button>
              </div>
              <AuthInput
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="12345"
                className="bg-white"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block font-inter text-sm" style={{ color: '#8C8C8C' }}>
                  Confirm Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="focus:outline-none"
                >
                  {showConfirmPassword ? (
                    <img src={unhideIcon} alt="Unhide" className="h-5 w-5" />
                  ) : (
                    <img src={hideIcon} alt="Hide" className="h-5 w-5" />
                  )}
                </button>
              </div>
              <AuthInput
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="*****"
                className="bg-white"
              />
            </div>
          </div>
          <AuthButton type="submit" className="w-full mt-8">
            SAVE PASSWORD
          </AuthButton>
        </form>
      </div>
    </div>
  )
}