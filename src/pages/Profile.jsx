import Footer from "../components/Footer";
import Header from "../components/Header";

function Profile() {
    return (
        <>
            <Header />
            <div className="profile">
                <h2>User information</h2>
                <div>
                    Username: <br />
                    Password: <br />
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Profile;