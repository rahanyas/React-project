import Layout from './Layout/MainLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';

function App() {
  return (
     <div className='w-full'>
        <Router>
          <Routes>
            <Route path='/' element={<Layout/>}>
               <Route  index element={<Home/>}/>
            </Route>
          </Routes>
        </Router>
     </div>
  )
}

export default App
