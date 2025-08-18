import React from "react"
import { AuthButton } from "@/components/ui/auth-button"
import successIcon from "@/assets/icons/success.png"

interface AccountRecoveredProps {
  onContinue: () => void
}

export const AccountRecovered: React.FC<AccountRecoveredProps> = ({ onContinue }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-8">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="space-y-6">
          <div className="flex justify-center">
            <img 
              src={successIcon} 
              alt="Success" 
              className="w-40 h-40"
            />
          </div>
          
          <h2 className="text-3xl font-inter font-bold text-foreground">
            Account Recovered
          </h2>
          
          <p className="font-inter text-[#8C8C8C]">
            Your account has been successfully recovered,<br />
            you can log in back with a new password
          </p>
        </div>

        <AuthButton onClick={onContinue} className="w-full" variant="secondary">
          CONTINUE
        </AuthButton>
      </div>
    </div>
  )
}