import Header from "./header";
import TextEditor from './Editor';
import GoogleOptions from "./GoogleOptions";
import { Container } from './styles';

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