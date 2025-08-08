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
              className="w-20 h-20"
            />
          </div>
          
          <h2 className="text-2xl font-semibold text-foreground">
            Account Recovered
          </h2>
          
          <p className="text-muted-foreground">
            Your account has been successfully recovered,<br />
            you can log in back with a new password
          </p>
        </div>

        <AuthButton onClick={onContinue} className="w-full">
          CONTINUE
        </AuthButton>
      </div>
    </div>
  )
}