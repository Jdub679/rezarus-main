import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "..";

const SignInOutButton = () => {
  return (
    <Button
      className="text-[#235cbd]" 
      type="submit"
    >
      Sign In
    </Button>
  )
}

export default SignInOutButton