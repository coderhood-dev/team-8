import { Link } from "react-router-dom";
import catLogo from "../assets/cat-clean-256.png";

export const Home = () => {
  return (
    <div className="App">
        <header className="App-header">
          <img src={catLogo} alt="cat logo" />
          <p>
            Clean Cat
          </p>
          <Link 
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Link>
        </header>
      </div>
  );
};
