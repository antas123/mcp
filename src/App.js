import logo from './logo.svg';
import './App.css';
import ChorPolice from "./components/ChorPolice";
import Progressbar from "./components/Progressbar";
import TicTacToe from "./components/TicTacToe";
import Debouncing from "./components/Debouncing";

// import "./styles.css";
import FileExplorer from "./components/FileExplorer";
import folders from "./data/constant";
import ToDoList from "./components/ToDoList";
import Timer from "./components/Timer";
import CheckboxDemo from "./components/CheckboxDemo";
import StarRating from "./components/StarRating";
import Linkedinque from "./components/Linkedinque";
import Throttling from "./components/Throttling";
import ZeptoChallenge from "./components/ZeptoChallenge";
import Jira from './components/Jira/Jira';
// import Time from "./components/time";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1> */}
      {/* <Progressbar /> */}
      {/* <Time /> */}
       <Jira/>
      {/* <TicTacToe /> */}
      {/* <ChorPolice /> */}
      {/* <Debouncing /> */}
      {/* {folders.map((folder) => (
        <FileExplorer key={folder.id} folders={folder} />
      ))} */}
      {/* <ToDoList /> */}
      {/* <Timer /> */}
      {/* <CheckboxDemo /> */}
      {/* <StarRating /> */}
      {/* <Linkedinque /> */}
      {/* <Throttling /> */}
      {/* <ZeptoChallenge /> */}
    </div>
  );
}

export default App;
