
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import About from './Pages/About';

import Services from './Pages/Services';
import Contacts from './Pages/Contacts';
import HomeSection from './Pages/Home';

function App() {
  return (
   <BrowserRouter>
     <Header />
     <Routes>
       {/* <Route path='/' element={<Home />} /> */}
       <Route path='/about' element={<About/>}/> 
       
       <Route path='services' element={<Services/>}/>
       <Route path='/contacts' element={<Contacts/>}/>
       <Route path='/' element={<HomeSection/>}/>
     </Routes>
   </BrowserRouter> 
    
  );
}

export default App;
