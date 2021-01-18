import React from "react";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";

export const Header = (): JSX.Element => {
    return (
        <div className="c-header">
            <Container maxWidth="lg">
                <a href="/" className="c-header__logo">
                    The Shoppies
                </a>
                <Divider />
            </Container>
        </div>
    );
};
