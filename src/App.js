import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ProjectList from './ProjectList';


const store = createStore(reducer);


const App = () => (
  <Provider store={store}>
    <ProjectList/>
  </Provider>
);

export default App;
