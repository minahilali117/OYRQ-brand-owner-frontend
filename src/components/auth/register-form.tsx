import React, { useState } from "react"
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration logic here
    console.log("Register attempt:", { brandName, email, phone })
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Register Form */}
      <div className="flex-1 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-6xl font-brand font-bold text-[#351C75] mb-8 text-center">OYRQ</h1>
            <h2 className="text-3xl font-brand font-bold mb-2 text-left">Register</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-[#F6F3FC] h-24 w-24 flex items-center justify-center">
                <img src={registerIcon} alt="Register" className="h-10 w-10 opacity-60" />
              </div>
            </div>
            <div className="space-y-6">
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
