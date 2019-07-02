import { useState, useEffect } from 'react'

const useEmailLocalStroage = initialEmail => {
  const key = 'email'
  const [email, setEmail] = useState(initialEmail)

  const setEmailExtended = email => {
    try {
      window.localStorage.setItem(key, email)
      setEmail(email)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    let emailStore
    try {
      emailStore = window.localStorage.getItem(key)
      if (emailStore == null) {
        emailStore = initialEmail
      }
    } catch (err) {
      console.log(err)
      emailStore = initialEmail
    }
    setEmail(emailStore)
  }, [])
  return [email, setEmailExtended]
}

export default useEmailLocalStroage;
