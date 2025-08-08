import React, { useState } from "react"
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
            <h2 className="text-2xl font-semibold text-foreground">New Password</h2>
          </div>
          
          <p className="text-muted-foreground mb-8">
            You can now set your new password here.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-muted-foreground mb-2">
                Password
              </label>
              <AuthInput
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="12345"
                showPassword={showPassword}
                onTogglePassword={() => setShowPassword(!showPassword)}
              />
            </div>

            <div>
              <label className="block text-sm text-muted-foreground mb-2">
                Confirm Password
              </label>
              <AuthInput
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="*****"
                showPassword={showConfirmPassword}
                onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            </div>
          </div>

          <AuthButton type="submit" className="w-full">
            SAVE PASSWORD
          </AuthButton>
        </form>
      </div>
    </div>
  )
}