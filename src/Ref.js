import { useRef } from 'react'

export default function Ref() {
    const email = useRef()
    const password = useRef()

    const submit = e => {
        e.preventDefault()
        console.log(email.current.value, password.current.value)
    }

    return (
        <form onSubmit={submit}>
            <input
                name="email"
                type="email"
                ref={email}
            />
            <input
                name="password"
                type="password"
                ref={password}
            />
            <button>Submit</button>
        </form>
    )
}