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
    <>
        <h1>{props.header}</h1>
        <small>{props.date}</small>
        <p>{props.content}</p>
    </>

  )
}


export default ArticlesSummary;
