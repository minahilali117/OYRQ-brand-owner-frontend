import React, { useState } from "react"
import { LoginForm } from "@/components/auth/login-form"
import { ForgotPassword } from "@/components/auth/forgot-password"
import { OTPVerification } from "@/components/auth/otp-verification"
import { NewPassword } from "@/components/auth/new-password"
import { AccountRecovered } from "@/components/auth/account-recovered"

type AuthStep = "login" | "forgot" | "otp" | "newPassword" | "recovered"

export const AuthPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AuthStep>("login")

  const handleStepChange = (step: AuthStep) => {
    setCurrentStep(step)
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case "login":
        return (
          <LoginForm 
            onForgotPassword={() => handleStepChange("forgot")}
          />
        )
      case "forgot":
        return (
          <ForgotPassword
            onBack={() => handleStepChange("login")}
            onContinue={() => handleStepChange("otp")}
          />
        )
      case "otp":
        return (
          <OTPVerification
            onBack={() => handleStepChange("forgot")}
            onVerify={() => handleStepChange("newPassword")}
          />
        )
      case "newPassword":
        return (
          <NewPassword
            onBack={() => handleStepChange("otp")}
            onSave={() => handleStepChange("recovered")}
          />
        )
      case "recovered":
        return (
          <AccountRecovered
            onContinue={() => handleStepChange("login")}
          />
        )
      default:
        return null
    }
  }

  return <>{renderCurrentStep()}</>
}

export default AuthPage