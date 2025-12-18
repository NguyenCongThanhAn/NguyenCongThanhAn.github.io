import { useState } from "react"

const Login = ({onLoginSuccess, onClose}) => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    
    const handleSubmit = async (e) => {
        //Prevent page from refresh
        e.preventDefault();

        // Input validation
        const trimId = identifier.trim();
        const trimPassword = password.trim();
        if (!trimId || !trimPassword) {
            setMessage("Identifier and password cannot be empty!");
            setIsError(true);
            return;
        }

        const apiEndpoint = 'http://localhost/api/login';  //POTENTIAL BUG FLAG

        try {
            const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            // Send identifier and password in JSON
            body: JSON.stringify({ trimId, trimPassword }), 
            });

            const data = await response.json();

            if (response.ok && data.status === 'success') {
                setMessage(data.message);
                setIsError(false);
                // Handle success/redirect
                onLoginSuccess();
            } else {
            setMessage(data.message || "An unknown error occurred.");
            setIsError(true);
            }
        } catch (error) {
        console.error('Network error:', error);
        setMessage("Cannot connect to the server. Please check your network.");
        setIsError(true);
        }
    }

    return (
        <div className="Login-form">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>User Information</legend>
                    <label>Username or password:</label>
                    <input type="text" value={identifier} onChange={ (e) => {setIdentifier(e.target.value)}}/>
                    <br />
                    <label>Password:</label>
                    <input type="text" value={password} onChange={(e) => {setPassword(e.target.value)}}/>

                    { isError && (
                        <label>{message}</label>
                    )}

                </fieldset>
                <fieldset>
                    <button type="submit">Login</button>
                    <button onClick={onClose}>Cancel</button>
                </fieldset>
            </form>
        </div>
    );
}
export default Login;