import React, {useRef, useState} from "react";
import {NextPage} from "next";
import {request} from "http";
import fetch from 'isomorphic-unfetch';

const DownloadInput: NextPage = () => {

        const form = useRef(null);
        const file = useRef(null);
        const [res, setRes] = useState(null);

        const submitHandler = async (e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append('myFile', file.current.files[0]);
            const response = await fetch('/uploadfile', {
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
                action="/uploadfile"
                onSubmit={submitHandler}
                encType="multipart/form-data" method="POST">
                <input ref={file} onChange={submitHandler} type="file" name="myFile" />
                <button>go</button>
                <div>{res}</div>
            </form>
        )

    }

    // <div className="input-group">
    //     <div className="input-group-prepend">
    // <span className="input-group-text" id="inputGroupFileAddon01">
    //   Upload
    // </span>
    //     </div>
    //     <div className="custom-file">
    //         <input
    //             type="file"
    //             className="custom-file-input"
    //             id="inputGroupFile01"
    //             aria-describedby="inputGroupFileAddon01"
    //         />
    //         <label className="custom-file-label" htmlFor="inputGroupFile01">
    //             Choose file
    //         </label>
    //     </div>
    // </div>
;

export default DownloadInput;
