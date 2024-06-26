import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routers from './routers/routers';
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Routers />
        <ToastContainer transition={Flip} autoClose={2000} newestOnTop={true} theme="light" />
      </Provider>
    </div>
  );
}

export default App;
