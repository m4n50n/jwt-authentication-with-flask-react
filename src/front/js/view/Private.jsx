import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Private = () => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            <h4 className="text-center mb-3">This is your <i>private</i> area</h4>
        </div>
    );
};