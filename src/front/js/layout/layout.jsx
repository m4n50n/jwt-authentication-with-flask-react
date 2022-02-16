import React from "react";
import PropTypes from "prop-types";

import { Footer } from "../component/footer.jsx";

const Layout = (props) => {
    return (
        <>
            {props.children}
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.any
}

export default Layout;