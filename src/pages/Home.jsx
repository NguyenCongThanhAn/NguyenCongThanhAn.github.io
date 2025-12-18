import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Login from "../components/Login";
import { useState } from "react";
import { Link } from "react-router-dom";
function Home() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [user, setUser] = useState({name: null, password: null});

    const handleLogin = (userData) => {
        // Need to authenticate first via API
        setUser(userData);
        setIsLoginModalOpen(false); // Close Login modal after successful login
    };
    const handleLogout = () => {
        setUser({name: null, password: null});
        // Clear local storage/token here
    };
    return (
        <div className='Home'>
            <Link to="/">Home</Link> | 
            <Link to="/profile">Profile</Link>
            <Header 
            user={user}
            onOpenLogin={() => setIsLoginModalOpen(true)}
            onLogout={() => handleLogout()}
        />
        <Main user={user} />
        <Footer />

        {/* Conditional element */}
        {
            isLoginModalOpen && (
            <Login 
            onLoginSuccess={handleLogin}
            onClose={ () => setIsLoginModalOpen(false)}
            />
            )
            }
    
        </div>
    );
}
export default Home;