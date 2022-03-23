import { Link } from "react-router-dom"

const Home = () => {
    return(
        <>
            <div>
                <h1>Home</h1>
                <Link to="/signup">Signup</Link>
                <br />
                <Link to="/login">login</Link>
            </div>
        </>
    )
}

export default Home