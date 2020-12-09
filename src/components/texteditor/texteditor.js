import React from 'react';
import { useSelector } from 'react-redux';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const TextEditor = () => {
    const file = useSelector(state => state.fileContent);



    return (
        <div>
            <TextareaAutosize value={file.content}></TextareaAutosize>
        </div>
    );
}

export default TextEditor;