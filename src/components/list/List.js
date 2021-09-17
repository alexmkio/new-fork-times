import './List.css';
import { Card } from "../card/Card"

export const List = ({ articles }) => {
  let articleCards = articles.map(currentArticle => {
    return (
      <Card
        key={`${currentArticle.url}`}
        article={currentArticle}
      />
    )
  })

  return (
    <section className='articlesContainer'>
      <h2>Articles</h2>
      <section className='cards'>
        {articleCards}
      </section>
    </section>
  )
}