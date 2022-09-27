import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import articles from "./article-content";
import axios from "axios";
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList";

const ArticlePage = () => {

    const [articleInfo, setArticleInfo] = useState({upvotes: 0, comments : []})
    const { articleId } = useParams();
   
    useEffect(() => {
      const loadArticleInfo = async () => {
          const response = await axios.get(`/api/articles/${articleId}`)
          const newArticleInfo = response.data;
          setArticleInfo(newArticleInfo)
      }  
     loadArticleInfo()
    },[articleId])

    const article = articles.find(article => article.name === articleId)
   
    if (!article) {
       return <NotFoundPage />
    }

    return(
        <>
        <h1>{article.title}</h1>
        <p>This article has {articleInfo.upvotes} upvotes !!!</p>
        {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))} 
        <CommentsList comments={articleInfo.comments} />
        </>
    )
}

export default ArticlePage