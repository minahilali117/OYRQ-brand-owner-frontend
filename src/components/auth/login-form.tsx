import React, { useState } from "react"
import { AuthInput } from "@/components/ui/auth-input"
import { AuthButton } from "@/components/ui/auth-button"
import loginBg from "@/assets/images/login.png"

interface LoginFormProps {
  onForgotPassword: () => void
}

export const LoginForm: React.FC<LoginFormProps> = ({ onForgotPassword }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("jon_doe123@gmail.com")
  const [password, setPassword] = useState("12345")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt:", { email, password })
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form */}
      <div className="flex-1 flex items-center justify-center bg-background p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-8">OYRQ</h1>
            <h2 className="text-2xl font-semibold text-foreground mb-2">Log In</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
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
            </div>

            <AuthButton type="submit" className="w-full">
              LOG IN
            </AuthButton>

            <div className="text-center">
              <button
                type="button"
                onClick={onForgotPassword}
                className="text-muted-foreground underline hover:text-foreground transition-colors"
              >
                FORGOT PASSWORD?
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right side - Background Image */}
      <div className="hidden lg:block flex-1 relative">
        <div 
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${loginBg})` }}
        >
        </div>
      </div>
    </div>
  )
}