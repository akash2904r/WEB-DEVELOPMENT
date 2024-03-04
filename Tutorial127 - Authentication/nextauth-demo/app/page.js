"use client"

import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  console.log(session)

  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign Out</button>
    </>
  }

  return <>
    Not signed in <br />
    
    {/* Redirects to another page questioning whether to sign in or not */}
    {/* <button onClick={() => signIn()}>Sign In</button> */}

    {/* Directly signs in */}
    <button onClick={() => signIn("github")}>Sign In with GitHub</button>
  </>
}