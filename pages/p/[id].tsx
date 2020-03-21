import React from 'react';
import Layout from "../../components/MyLayout";
import fetch from 'isomorphic-unfetch';
import {Show} from "../../interfaces";
import {NextPageContext, NextPage} from "next";


type Props = {
    show: Show,
}

const Post : NextPage<Props> = ({show}) => (
    <Layout>
        <h1>{show.name}</h1>
    <p>{show.summary.replace(/<[/]?[pb]>/g, '')}</p>
{show.image ? <img src={show.image.medium}  alt={'film poster image'}/> : null}
</Layout>
);

Post.getInitialProps = async function(context: NextPageContext) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();
    return { show };
};

export default Post;
