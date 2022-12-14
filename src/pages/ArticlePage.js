import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import articles from "./article-content";
import axios from "axios";
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";

const ArticlePage = () => {
    const { user, isLoading } = useUser()
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
   
    const addUpvote = async() => 
    {
        const response = await axios.put(`/api/articles/${articleId}/upvote`)
        const updateArticle = response.data
        setArticleInfo(updateArticle)
    }

    if (!article) {
       return <NotFoundPage />
    }

    return(
        <>
        <h1>{article.title}</h1>
        <div className="upvotes-section">
           {user
           ? <button onClick={addUpvote} >Upvote</button>
           : <button>Login to Upvote</button> 
           }
           <p> This article has {articleInfo.upvotes} upvotes !!!</p>
        </div>
        {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))} 
        {user 
        ?  <AddCommentForm
           articleName={articleId}
           onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}
        />
        : <button>login to add a comment</button>
        }
        <CommentsList comments={articleInfo.comments} />
        </>
    )
}

export default ArticlePage