import { Header } from "./components/Header";
import { Home } from "./components/Home";
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

function App() {
  return (
    <>
    <Router>
      <Header title="Microsoft Teams" searchBar="true" />
      <Routes>
        <Route path="/" element={<Navigate replace to="/teams" />} />

        <Route path="/teams" element={<Home />}>
          <Route path="feed" element={<FeedContent />} />

          <Route path="activity" element={<Activity />}>
            <Route path=":activityId" element={<ActivityContent />} />
          </Route>
          
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
