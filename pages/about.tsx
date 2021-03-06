import React from 'react'
import Link from 'next/link'
import Layout from '../components/MyLayout'
import {NextPage} from "next";

const AboutPage: NextPage = () => (
    <Layout>
        <h1>About</h1>
        <p>This is the about page</p>
        <p>
            <Link href="/">
                <a>Go home</a>
            </Link>
        </p>
    </Layout>
)

export default AboutPage
