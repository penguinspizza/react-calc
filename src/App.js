import './App.css';
import Layout from './Layout';
import Calc from './Calc';

function App() {
  return (
    <div className="App">
      <Layout title="Realtime Calculator v0.0.0" footer="&copy;penguinspizza">
        <Calc />
      </Layout>
    </div>
  );
}

export default App;
