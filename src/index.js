import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./Chat";
import Train from "./Train";
import Admin from "./Admin";

export default function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Train />} />
          <Route path="chat" element={<Chat />} />
          <Route path="admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Application />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
