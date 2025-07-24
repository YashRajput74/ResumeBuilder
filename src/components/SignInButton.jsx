import { useState } from "react";
import { useDispatch } from "react-redux";
import { supabase } from "../supabaseClient";
import { userlogin } from "../features/auth/authActions";

const SignInButton = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = async (e) => {
        e.preventDefault();

        const { user, error } = await supabase.auth.signUp({ email, password });
        if (error) {
            alert(error.message);
        } else {
            dispatch(userlogin(email, password));
            alert("Check your email for confirmation.");
        }
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
            <button onClick={handleSignIn}>Sign In</button>
        </div>
    );
};

export default SignInButton;
