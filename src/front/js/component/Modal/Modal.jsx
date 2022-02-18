import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal"; // https://react-bootstrap.github.io/getting-started/introduction

import PropTypes from "prop-types";

export const AppModal = (props) => (
    <Modal show={props.params.show} centered>
        <Modal.Body className="rounded-2 pt-3 pb-0 bg-light text-center">
            {props.params.message}

            <Link to="/login" className="btn btn-success m-3">
                <strong>Log In</strong> now!
            </Link>
        </Modal.Body>
    </Modal>
);

AppModal.propTypes = {
    params: PropTypes.object
};