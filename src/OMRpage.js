import './OMRpage.css';
import React, { useState } from 'react';
import Axios from 'axios';


function OMRpage() {

    // const url = "https://6139f67e1fcce10017e78cd6.mockapi.io/api/post-api-react/pdfStringName";
    const [data, setData] = useState({
        name: ""
    });

    function submit(e) {
        e.preventDefault();
        console.log("data")
        console.log(data)
        var file = data;

        const headers = {
            "content-type": "multipart/form-data",
            Accept: "application/pdf",
        };
        const formData = new FormData();
        formData.append("file", file);
        Axios
            .post("https://6139f67e1fcce10017e78cd6.mockapi.io/api/post-api-react/sendPDF", formData, {
                headers: headers,
            })
            .then((response) => {
                console.log("response")
                console.log(response)

            })
            .catch((e) => {
                alert(e.message);
            });

    }

    function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        var file = e.target.files[0]
        console.log(file)
        return file;
        // console.log(newdata);
    }

    return (
        <div className="OMRpage">
            <h2 className="header__OMRpage">Upload OMR Answer Sheets</h2>

            <div className="firstparagraph__OMRpage">
                <ul>
                    <li>Only PDF files are allowed.</li>
                    <li>Maximum file size is 20MB.</li>
                    <li>When scanning, 300dpi resolution is recommended.</li>
                    <li>Barcode decode is the most likely failure mode if insufficient resolution is used.</li>
                    <li>The system will accept black/white, grayscale or color scans.</li>
                    <li>If black/white is used it is important that scanner settings are adjusted for good contrast.</li>
                    <li>Barcode lines and fiducials must be clear. It is important that half-toning is not used if scanning in black/white.</li>
                </ul>
            </div>

            <div className="secondparagraph__OMRpage">


                <form encType="multipart/form-data" id="import_form" onSubmit={(e) => submit(e)}>
                    <div>
                        <input type="radio" id="newsheetlayout" name="version" value="newsheetlayout" defaultChecked />
                        <label htmlFor="newsheetlayout">New Sheet Layout (Created using GEMS Basic version 1.6.0 or later)</label>
                    </div>

                    <div>
                        <input type="radio" id="oldsheetlayout" name="version" value="oldsheetlayout" />
                        <label htmlFor="oldsheetlayout">Old Sheet Layout (Created using GEMS Basic version older than 1.6.0)</label>
                    </div>

                    <input className="importfile__OMRpage" onChange={(e) => handle(e)} id="name" value={data.name} type="file" accept="application/pdf" />
                    <br />
                    {/* <input className="startbutton__OMRpage" type="button" value="Start" onClick={() => uploadSingleFile()} /> */}
                    <button className="startbutton__OMRpage">Start</button>
                    {/* button: ... onClick="document.getElementById('import_form').submit()" */}
                </form>

            </div>

        </div>
    );
}

export default OMRpage;
