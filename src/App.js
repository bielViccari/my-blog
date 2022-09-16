import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlesListPage from './pages/ArticlesListPage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <NavBar />
       <div id="page-body">
        <Routes>
         <Route path='/' element={<HomePage />} /> 
          <Route path='/article/:articleId' element={<ArticlePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/articles' element={<ArticlesListPage />}/>
        </Routes>
       </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
