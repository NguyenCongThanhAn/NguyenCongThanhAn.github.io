import Login from "./Login";
function Header({user, onOpenLogin, onLogout}) {
    
    return (
        <header className="header">
            <div className="header-left">
                Logo and Text
            </div>
            <nav>
            {user=={name: null, password: null} ? (
            // Show this if the user is logged in
            
            <button onClick={onLogout}>Log Out</button>
            
            
            ) : (
            // Show this if the user is NOT logged in
            <button onClick={onOpenLogin}>Log In</button>
            )}
            </nav>
        </header>
    );
}
export default Header;
