import { createRoot } from 'react-dom/client';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Service from './routes/Service';
const root = createRoot(document.getElementById("root"));
// What is createRoot?
// createRoot is a method from ReactDOM that creates a root for rendering React components.
// It is used to render the React application into a specific DOM element.
// What is the purpose of the root variable?   
// The root variable is used to hold the reference to the root of the React application.
// It allows us to render components into the DOM element with the id "root".
// What is the purpose of the root.render method?
// The root.render method is used to render the React components into the DOM.
// What are Routes in React?
// Routes in React are used to define the different paths in a single-page application (SPA).
root.render(
    <>
        {/* <Routes> */}
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/Service' element={<Service/>}/>
                </Routes>
                
            </BrowserRouter>
        {/* </Routes> */}
        
        {/* <h1>Ok</h1> */}
    </>
)