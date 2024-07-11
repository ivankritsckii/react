import { Routes, Route } from 'react-router-dom';
import { App } from './App';
import { Page404 } from './Page_404/page_404'

export function Router() {
  console.log("in router")
  return (
    <Routes>
    <Route path='/react' element= {<App />} />
    <Route path='/react/page=1' element= {<App page = {1}/>} />
    <Route path='/react/page=2' element= {<App page = {2}/>} />
    <Route path='/react/page=3' element= {<App page = {3}/>} />
    <Route path='/react/page=4' element= {<App page = {4}/>} />
    <Route path='/react/page=5' element= {<App page = {5}/>} />
    <Route path='/react/page=6' element= {<App page = {6}/>} />
    <Route path='/react/page=7' element= {<App page = {7}/>} />
    <Route path='/react/page=8' element= {<App page = {8}/>} />
    <Route path='/react/page=9' element= {<App page = {9}/>} />
    <Route path='/react/page=10' element= {<App page = {10}/>} />
    <Route path='*' element= {<Page404 />} />
    </Routes>
  );
  
}