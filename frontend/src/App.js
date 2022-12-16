import {Fragment} from 'react';
import './App.css';
import ButtonAppBar from './components/Navbar';
import DisplayUploads from './components/DisplayUpload';
function App() {
  return (
    <Fragment>
      <ButtonAppBar />
      <main>
        <DisplayUploads />
      </main>
    </Fragment>
  );
}

export default App;
