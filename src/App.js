import './App.css';
import { Logo } from './components/Logo';
import { TasksList } from './components/TasksList';

function App() {

  return (
    <div className="App">
      <div className='tasks-app'>
        <Logo/>
        <div className='main-container'>
          <h1>My tasks:</h1>
          <TasksList />
        </div>
      </div>
    </div>
  );
}

export default App;
