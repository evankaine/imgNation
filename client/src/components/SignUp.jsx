import {useState} from 'react'
import {createUser} from "../services/apiConfig"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import "./signup.css"


export default function SignUp() {
    let history = useHistory()
    let defaultInput = {
        username: "",
      email: "",
        password: "",
    }
    const [input, setInput] = useState(defaultInput)

    function handleChange(event) {
        let {name, value} = event.target
        setInput(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    async function handleSubmit(event) {
        event.preventDefault()
        await createUser(input)
        history.push("/home")
    }

    return (
      <div className="wrapper">
        <div className="form">
        <div className="title">
            <h1>imgNation</h1>
            <br />
            <h3>Sign Up:</h3>
        </div>
            <form onChange={handleChange} onSubmit={handleSubmit}>
          <div className="input_wrap">
              <input type="text" name="username" placeholder="Username" value={input.username} />
          
                <input type="email" name="email" placeholder="Email" value={input.email} />
          
                <input type="password" name="password" placeholder="Password" value={input.password} />
          </div>
                <button className="raise" type="submit">Sign Up</button>
          </form>
          <p className="linkWrap"><Link to="/" className="signInLink">Back to Sign In</Link></p>
          </div>
        </div>
    )
}