import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Chat } from "./components/Chat";
import { Activity } from "./components/Activity";
import { ChatContent } from "./components/helper/ChatContent";

function App() {
  return (
    <>
    <Router>
      <Header title="Microsoft Teams" searchBar="true" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Home />}>
          <Route path="activity" element={<Activity />} />
          <Route path="chat" element={<Chat />}>
            <Route path=":enterpriseId" element={<ChatContent />} />
          </Route>
        </Route>

        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
