import { useState } from "react";
import { useDispatch } from "react-redux";
import { userlogin } from "../features/auth/authActions";

const LoginButton = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(userlogin(email, password));
    };

    return (
        <div>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginButton;