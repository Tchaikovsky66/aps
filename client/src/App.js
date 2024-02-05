import logo from './logo.svg';
import './App.css';
import TenantForm from './components/TenantForm';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TenantForm/>
    </div>
  );
}

export default App;
