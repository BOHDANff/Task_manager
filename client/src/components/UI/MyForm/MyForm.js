import React from "react";
import cl from "./MyForm.modal.css"

export const MyForm = ({children, ...props}) => {
    return (
        <form {...props}
              className={cl.myForm}
              noValidate>
            {children}
        </form>
    );
};