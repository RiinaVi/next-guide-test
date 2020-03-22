import React from "react";
import {NextPage} from "next";

const DownloadInput: NextPage = () => {
        function autoSubmit(e) {
            e.target.parentElement.submit()
        }


        return (
            <form
                action="/uploadfile"
                encType="multipart/form-data" method="POST">
                <input onChange={event => autoSubmit(event)} type="file" name="myFile" />
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
