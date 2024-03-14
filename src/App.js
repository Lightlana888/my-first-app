import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 9],
  ["Eat", 3],
  ["Commute", 2],
  ["Beuty routine", 1],
  ["Sleep", 8],
  ["Yoga", 1]
];

export const options = {
  title: "My Daily Activities",
  is3D: true,
  backgroundColor: '#282c34',
  titleTextStyle: { color: 'white', fontSize: 24 },
  legendTextStyle: { color: 'white' },
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React!
        </p>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"500px"}


        />
      </header>
    </div>
  );
}

export default App;
