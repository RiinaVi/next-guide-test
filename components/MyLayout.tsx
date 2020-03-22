import Header from "./Header";
import React from "react";
import {NextPage} from "next";
import Head from "next/head";

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

type Props = {}

const Layout: NextPage<Props> = ({children}) => (
    <div style={layoutStyle}>
        <Head>
            <title>Batman Shows</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                  crossOrigin="anonymous"/>

            <link rel="shortcut icon" href="../static/batman.png"/>
        </Head>
        <Header />
        {children}
    </div>
);

export default Layout;
