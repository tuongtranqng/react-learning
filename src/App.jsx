import "./App.css";
import ArticlesSummary from './Articles.jsx'
import { ARTICLES } from "./data";


function App() {
  return(
    < ArticlesSummary id={ARTICLES[0].id} header={ARTICLES[0].header} date={ARTICLES[0].date} content={ARTICLES[0].content}/>
  )
}

export default App;