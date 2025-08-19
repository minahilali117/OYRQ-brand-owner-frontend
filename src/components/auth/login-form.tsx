import React, { useState } from "react"
import hideIcon from "@/assets/icons/hide.png";
import unhideIcon from "@/assets/icons/unhide.png";
import { AuthInput } from "@/components/ui/auth-input"
import { AuthButton } from "@/components/ui/auth-button"
import { useNavigate } from "react-router-dom"
import loginBg from "@/assets/images/login.png"

interface LoginFormProps {
  onForgotPassword: () => void
}

export const LoginForm: React.FC<LoginFormProps> = ({ onForgotPassword }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("jon_doe123@gmail.com")
  const [password, setPassword] = useState("12345")
  const navigate = useNavigate()

  const handleRegister = () => {
    navigate("/register")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt:", { email, password })
    // Redirect to dashboard on successful login
    navigate("/dashboard")
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form */}
      <div className="flex-1 flex items-center justify-center" style={{ backgroundColor: '#fcf8fd' }}>
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-6xl font-brand font-bold text-[#351C75] mb-8 text-center">OYRQ</h1>
            <h2 className="text-3xl font-brand font-bold mb-2 text-left">Log In</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div>
                <label className="block font-inter text-sm mb-2" style={{ color: '#8C8C8C' }}>
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
                      // Unhide icon (password visible)
                      <img src={unhideIcon} alt="Unhide" className="h-5 w-5" />
                    ) : (
                      // Hide icon (password hidden)
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
            </div>

            <AuthButton type="submit" className="w-full mt-8">
              LOG IN
            </AuthButton>

            <div className="text-center">
              <button
                type="button"
                onClick={onForgotPassword}
                className="font-inter font-semibold underline transition-colors"
                style={{ color: '#351C75' }}
              >
                FORGOT PASSWORD?
              </button>
            </div>

            <div className="text-center">
              <span className="font-inter text-base" style={{ color: '#8C8C8C' }}>
                Don't have an account?{' '}
                <button
                  type="button"
                  className="font-inter font-semibold underline"
                  style={{ color: '#351C75' }}
                  onClick={handleRegister}
                >
                  REGISTER
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>

      {/* Right side - Background Image */}
      <div className="hidden lg:block flex-1 relative">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${loginBg})` }}
        >
        </div>
      </div>
    </div>
  )
}