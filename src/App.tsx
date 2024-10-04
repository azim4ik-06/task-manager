import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Todo from "./components/Todo";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
