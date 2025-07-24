import { supabase } from "../../supabaseClient";
import { login, logout } from "./authSlice";

export const userlogin = (email, password) => async (dispatch) => {
    try {
        const { user, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });
        if (error) throw error;
        dispatch(login(user));
    }
    catch (error) {
        console.error("login error: ", error.message);
    }
}

export const userlogout = () => async(dispatch) => {
    try {
        await supabase.auth.signOut();
        dispatch(logout());
    }
    catch (error) {
        console.error("Logout Error: ", error.message);
    }
}


/* 
user persistance on app load
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "./redux/authSlice";
import { supabase } from "./supabaseClient"; // Import supabase client

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Check if the user is logged in when the app loads
        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                dispatch(login(user)); // Dispatch the login action to set user state in Redux
            }
        };

        fetchUser();

        const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
            dispatch(login(session?.user || null)); // Update Redux state when auth state changes
        });

        return () => {
            listener.subscription.unsubscribe(); // Clean up the listener
        };
    }, [dispatch]);

    return (
        <div>
            <h1>Welcome to the App</h1>
        </div>
    );
};

export default App;

*/