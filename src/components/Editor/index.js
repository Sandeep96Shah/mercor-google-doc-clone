import { useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { Container } from './styles';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = () => {
    const [editorState, setEditorState] = useState("");
    const handleEdit = (val) => {
        setEditorState(val);
    }
    return(
        <Container>
            <Editor
                editorState={editorState}
                editorClassName="editorClassName"
                onEditorStateChange={handleEdit}
            />;
        </Container>
    )
}

export default TextEditor;