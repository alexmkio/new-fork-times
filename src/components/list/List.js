import PropTypes from 'prop-types';
import './List.css';
import { Card } from "../card/Card"
import { Link } from 'react-router-dom';

export const List = ({ articles }) => {
  let articleCards = articles.map(currentArticle => {
    let unique = currentArticle.short_url.split("/")[3]
    return (
      <Link to={`/article/${unique}`} key={`${unique}`} >
        <Card key={`${unique}`} article={currentArticle} />
      </Link>
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

List.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired
}