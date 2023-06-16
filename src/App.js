import Header from "./components/Header"
import FeedBackList from "./components/FeedBackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedBackForm from "./components/FeedBackForm"
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom'
import AboutIconLInk from './components/AboutIconLInk'



function App(){
   
  
    
    return (
        
        <FeedbackProvider>

        <Router>
        <Header/>

        <div className="container">
        <Routes>

        <Route exact path='/' 
            element={
                <>
                <FeedBackForm /> 
                <FeedbackStats />
                <FeedBackList   />
                <AboutIconLInk/>
                </>
            }>
        </Route>

        <Route path='/about' element={<AboutPage/>} ></Route>

        </Routes>
        </div>
        
        </Router>
        
        </FeedbackProvider>
    )
}

export default App