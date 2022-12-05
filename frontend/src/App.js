import { Header } from "./components/Header";
import { Home } from "./components/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { Chat } from "./components/Chat";
import { Activity } from "./components/Activity";
import { ChatContent } from "./components/helper/chats/ChatContent";
import { ActivityContent } from "./components/helper/activity/ActivityContent";
import { FeedContent } from "./components/helper/feed/FeedContent";
import { UserContent } from "./components/helper/users/UserContent";
import { PNF } from "./components/PNF";
import { TodoContent } from "./components/helper/todos/TodoContent";

function App() {
  return (
    <>
      <Router>
        <Header title="Microsoft Teams" searchBar="true" />
        <Routes>
          <Route path="*" element={<PNF />} />
          <Route exact path="/" element={<Navigate replace to="/teams" />} />

          <Route path="/teams" element={<Home />}>
            <Route path="feed" element={<FeedContent />} />

            <Route path="activity" element={<Activity />}>
              <Route path=":activityId" element={<ActivityContent />} />
            </Route>

            <Route path="users" element={<UserContent />} />
            <Route path="todos" element={<TodoContent />} />

            <Route path="chat" element={<Chat />}>
              <Route path=":enterpriseId" element={<ChatContent />} />
            </Route>
          </Route>

          {/* <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;