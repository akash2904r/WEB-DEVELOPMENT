import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
      <Script>
        { `alert("Welcome to the contact page")` }
      </Script>
      I am Contact
    </div>
  )
}

export default contact

export const metadata = {
  title: "Contact | Facebook - Connect with the world",
  description: "This is the contact page of facebook",
};