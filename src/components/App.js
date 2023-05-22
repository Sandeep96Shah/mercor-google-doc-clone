import Header from "./header";
import TextEditor from './Editor';
import GoogleOptions from "./GoogleOptions";
import Share from './Share/index';
import { Container } from './styles';
import 'react-notifications/lib/notifications.css';

const App = () => {
  return (
    <Container>
      <Header />
      <div className="editorOptions">
        <TextEditor />
        <GoogleOptions />
      </div>

      <Share />
      
    </Container>
  )
}

export default App;