import React, { useState } from "react"
import successIcon from "@/assets/icons/success.png"
import registerIcon from "@/assets/icons/register image icon.png"
import loginBg from "@/assets/images/login.png"
import { AuthInput } from "@/components/ui/auth-input"
import { AuthButton } from "@/components/ui/auth-button"
import hideIcon from "@/assets/icons/hide.png";
import unhideIcon from "@/assets/icons/unhide.png";

export const RegisterForm: React.FC = () => {
  const [brandName, setBrandName] = useState("Western Collection")
  const [email, setEmail] = useState("jon_doe123@gmail.com")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [website, setWebsite] = useState("")
  const [password, setPassword] = useState("12345")
  const [confirmPassword, setConfirmPassword] = useState("12345")
  const [bio, setBio] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [showAccountCreated, setShowAccountCreated] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate registration success
    setShowAccountCreated(true)
  }

  const handleContinue = () => {
    window.location.href = "/dashboard"
  }

  return (
    <div className="min-h-screen flex">
      {/* Account Created Modal */}
      {showAccountCreated && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-[#F6F3FC] rounded-2xl shadow-lg p-10 w-full max-w-xl text-center">
            <div className="flex flex-col items-center space-y-6">
              <img src={successIcon} alt="Success" className="w-32 h-32" />
              <h2 className="text-3xl font-inter font-bold text-foreground">Account Created</h2>
              <p className="font-inter text-[#8C8C8C]">
                Your account has been sent to admin for approval,<br />
                we'll notify you once your account is approved.
              </p>
            </div>
            <AuthButton onClick={handleContinue} className="w-full mt-8" variant="secondary">
              CONTINUE
            </AuthButton>
          </div>
        </div>
      )}
      {/* Left side - Register Form (scrollable) */}
      <div className="flex-1 p-8 overflow-y-auto h-screen" style={{ backgroundColor: '#fcf8fd' }}>
        <div className="w-full max-w-md mx-auto space-y-8 py-8">
          <div className="flex flex-col items-center mb-8">
            <h1 className="text-6xl font-brand font-bold text-[#351C75] mb-4 text-center">OYRQ</h1>
            <h2 className="text-3xl font-brand font-bold mb-4 self-start">Register</h2>
            <div className="rounded-full bg-white h-32 w-32 flex items-center justify-center mb-2 border" style={{ border: '1px solid #E0D7F3' }}>
              <img src={registerIcon} alt="Register" className="h-8 w-8 opacity-40" style={{ filter: 'brightness(0) saturate(100%) invert(80%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(90%) contrast(80%)' }} />
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              {/* ...existing code... */}
              <div>
                <label className="block font-inter text-sm mb-2" style={{ color: '#8C8C8C' }}>
                  Brand Name
                </label>
                <AuthInput
                  type="text"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder="Western Collection"
                  className="bg-white"
                />
              </div>
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
                <label className="block font-inter text-sm mb-2" style={{ color: '#8C8C8C' }}>
                  Phone
                </label>
                <AuthInput
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter phone"
                  className="bg-white"
                />
              </div>
              <div>
                <label className="block font-inter text-sm mb-2" style={{ color: '#8C8C8C' }}>
                  Address
                </label>
                <AuthInput
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter address"
                  className="bg-white"
                />
              </div>
              <div>
                <label className="block font-inter text-sm mb-2" style={{ color: '#8C8C8C' }}>
                  Website Link
                </label>
                <AuthInput
                  type="text"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="Enter link"
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
                  placeholder="12345"
                  className="bg-white"
                />
              </div>
              <div>
                <label className="block font-inter text-sm mb-2" style={{ color: '#8C8C8C' }}>
                  Bio
                </label>
                <AuthInput
                  type="text"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Enter bio"
                  className="bg-white"
                />
              </div>
            </div>
            <AuthButton type="submit" className="w-full mt-8">
              REGISTER
            </AuthButton>

            <div className="text-center">
              <span className="font-inter text-base" style={{ color: '#8C8C8C' }}>
                Already have an account?{' '}
                <button
                  type="button"
                  className="font-inter font-semibold underline"
                  style={{ color: '#351C75' }}
                  onClick={() => window.location.href = '/'}
                >
                  LOG IN
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
      {/* Right side - Background Image (fixed, half width) */}
      <div className="hidden lg:block relative h-screen w-1/2">
        <div
          className="absolute top-0 right-0 h-screen w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${loginBg})` }}
        >
        </div>
      </div>
    </div>
  )
}
