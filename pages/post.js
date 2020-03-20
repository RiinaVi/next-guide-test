import {useRouter} from "next/router";
import React from 'react';
import withLayout from "../components/MyLayout";

const Content = () => {
    const router = useRouter();

    return (
        <>
            <h1>{router.query.title}</h1>
            <p>This is the blog post content.</p>
        </>
    );
};

const Page = ()=> <Content/>;

export default withLayout(Page);
