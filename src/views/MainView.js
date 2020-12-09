import React from 'react';
import GitTable from '../components/table/table';
import TextEditor from '../components/texteditor/texteditor';


export default function MainView() {
    return (

        <div className="d-md-flex h-md-100 ">
            <div className="col-md-6 p-0 bg-indigo h-md-100">
                <div >
                    <GitTable />
                </div>
            </div>

            <div className="" id="sideBar">
                <div className="d-md-flex  h-md-100 p-5 justify-content-left" id='div2'>
                    <div id='div3' style={{ textAlign: "left", backgroundColor: 'lightgray' }}>
                        <TextEditor />
                    </div>
                </div>
            </div>
        </div>


    )
};
