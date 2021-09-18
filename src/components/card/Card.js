import { ExternalLink } from 'react-external-link';
import PropTypes from 'prop-types';
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
        <dd>{(new Date(article.updated_date)).toLocaleString().split(",").join(" ---")}</dd>

        <dt>Section:</dt>
        <dd>{article.section}</dd>
      </dl>
    </article>
  )
}

Card.propTypes = {
  article: PropTypes.object.isRequired
}