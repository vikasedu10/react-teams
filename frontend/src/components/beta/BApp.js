import { Header } from "../../components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import {BChat} from './BChat';
import {BActivity} from './BActivity';
import {BHome} from './BHome';

function BApp() {
  return (
    <>
    <Router>
      <Header title="Microsoft Teams" searchBar="true" />
      <Routes>
        <Route path="/" element={<Navigate replace to="/teams" />} />

        <Route path="/teams" element={<BHome />}>
          <Route path="activity" element={<BActivity />} />
          <Route path="chat" element={<BChat />} />
        </Route>
            
        {/* <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} /> */}
      </Routes>
    </Router>
    </>
  );
}

export default BApp;
