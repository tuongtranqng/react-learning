import { ARTICLES } from "./data";
import ArticlesSummary  from "./Articles";

function Display(props){
  return(
    <ul className="container">
     {ARTICLES.map((article, index) =>(
      <li key={article.id}>
        < ArticlesSummary index={article.id} header={article.header} date={article.date} content={article.content} />

      </li>
     ))}
    </ul>
  );
}

export default Display;