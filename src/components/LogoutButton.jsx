import { useDispatch } from "react-redux";
import { userlogout } from "../features/auth/authActions";

const LogoutButton = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(userlogout());
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;