import './Card.css';

export const Card = ({ article }) => {
  return (
    <article className='card'>
      <dl>
        <dt>Title:</dt>
        <dd>{article.title}</dd>

        <dt>By:</dt>
        <dd>{article.byline}</dd>

        <dt>Last Updated:</dt>
        <dd>{article.updated_date}</dd>

        <dt>Section:</dt>
        <dd>{article.section}</dd>

        <dt>URL:</dt>
        <dd>{article.url}</dd>

        <dt>Picture:</dt>
        <dd>{article.multimedia[0].url}</dd>
      </dl>
    </article>
  )
}