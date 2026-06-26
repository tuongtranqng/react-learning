import { ARTICLES } from "./data";


export function ArticleDetail() {
  return (
    <div key={props.id} className="container">
       <h1>{props.header}</h1>
        <small>{props.date}</small>
        <p>{props.content}</p>
      
    </div>
      
   );
}

function ArticlesSummary(props){
  return(
    <ul className="container">
      <li key={props.id}>
        <h1>{props.header}</h1>
        <small>{props.date}</small>
        <p>{props.content}</p>
      </li>
     </ul>
  )
}


export default ArticlesSummary;
