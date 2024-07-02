import AppForm from "../AppForm";
import AppMain from "../AppMain";
import AppNav from "../AppNav";
import AppNow from "../AppNow";
import { Route, Routes } from 'react-router-dom';
import { AppContainer, AppHeader } from "./styles";

const App = () => {
  return (
      <>
        <AppHeader>
          <AppNav />
        </AppHeader>

        <AppContainer>
          <Routes>
            <Route path="/AppMain" element={<AppMain />} />
            <Route path="/AppNow" element={<AppNow />} />
            <Route path="/AppForm" element={<AppForm />} />
          </Routes>
        </AppContainer>   
      </> 
  );
}

export default App;
