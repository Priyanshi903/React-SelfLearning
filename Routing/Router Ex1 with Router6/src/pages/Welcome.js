import { Outlet, Route, Routes } from "react-router";
import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <section>
            <h1>The welcome page</h1>
            <Link to="new-user">New User</Link>

            {/* nested route */}
            {/* <Routes> */}
            {/* notice: welcome removed from the path,relative used */}
            {/* <Route path="/new-user" element={<p>Welcome.new user!</p>} /> */}
            {/* </Routes> */}

            {/* OR add nested route in app.js directly */}
            <Outlet />
        </section>
    )
};

export default Welcome;