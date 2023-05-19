import Header from "./components/header";
import TextEditor from './components/Editor';
import GoogleOptions from "./components/GoogleOptions";
import './index.css';
import styled from 'styled-components';

const Container = styled.div`
height: 100vh;
width: 100vw;
background-color: #fbfbfb;
`;

const App = () => {
  return (
    <Container>
      <Header />
      <div className="editorOptions">
        <TextEditor />
        <GoogleOptions />
      </div>
      
    </Container>
  )
}

export default App;