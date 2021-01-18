import React from "react";

export const Heading = (props: any): JSX.Element => {
    return (
        <h1 className="c-heading">
            { props.children }
        </h1>
    );
};
