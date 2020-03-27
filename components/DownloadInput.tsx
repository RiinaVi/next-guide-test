import React, {useRef, useState} from "react";
import {NextPage} from "next";
import fetch from 'isomorphic-unfetch';

const DownloadInput: NextPage = () => {

        const form = useRef(null);
        const file = useRef(null);
        const [res, setRes] = useState(null);

        const submitHandler = async (e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append('myFile', file.current.files[0]);
            const response = await fetch('/upload', {
                method: 'post',
                headers: {
                    'Accept': 'application/json, application/xml, text/play, text/html, *.*',
                },
                body: formData
            });
            setRes((await response.json()).res);
        };

        return (
            <form
                ref={form}
                action={"/upload"}
                onSubmit={submitHandler}
                encType="multipart/form-data" method="POST">
                <input ref={file} onChange={submitHandler} type="file" name="myFile" />
                <div>{res}</div>
            </form>
        )
    }
;

export default DownloadInput;
