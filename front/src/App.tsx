import {BrowserRouter, Route, Routes} from "react-router-dom"
import AppLayout from "./components/Layout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
    <AppLayout>
      <Routes>
      <Route element={<HomePage/>} path="/"/>  
      </Routes>
    </AppLayout>
    </BrowserRouter>
  )
}

export default App;
