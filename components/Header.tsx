import Link from 'next/link';
import React from "react";
import {NextPage} from "next";

const linkStyle = {
    marginRight: 15
};

const Header: NextPage = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href={"/about"}>
            <a style={linkStyle}>About</a>
        </Link>
    </div>
);

export default Header;
