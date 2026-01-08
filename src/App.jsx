import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./Pages/MainPage";
import Profile from "./Pages/Profile";
import ProtectedRoute from "./Routes/ProtectedRoute";

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
