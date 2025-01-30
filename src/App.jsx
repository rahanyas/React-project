import Layout from './Layout/MainLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import React , {Suspense} from 'react';
import './App.css'


function App() {
  const About = React.lazy(() => import('./Pages/About'));
  const Products = React.lazy(() => import('.//Pages/Products'))
  return (
     <div className='w-full'>
      <Suspense fallback={<h1>loading...</h1>}>
        <Router>
          <Routes>
            <Route path='/' element={<Layout/>}>
               <Route  index element={<Home/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/products' element={<Products/>}/>
            </Route>
          </Routes>
        </Router>
      </Suspense>
     </div>
  )
}

export default App
