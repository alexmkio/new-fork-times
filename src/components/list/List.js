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
    <section>
      {articleCards}
    </section>
  )
}