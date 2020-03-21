import React from "react";
import Layout from "../components/MyLayout";
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import {Show} from "../interfaces";
import {NextPage} from "next";

type Props = {
    shows: Show[]
}

const Index : NextPage<Props> = ({shows}) => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {shows.map(show => (
                <li key={show.id}>
                    <Link href={"/p/[id]"} as={`/p/${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    return {
        shows: data.map(entry => entry.show)
    };
};

export default Index;
