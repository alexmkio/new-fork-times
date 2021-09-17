import PropTypes from 'prop-types';
import './Details.css';

export const Details = ({ article }) => {
  return (
    <dl>
      <dt>Title:</dt>
      <dd>{article.title}</dd>

      <dt>By:</dt>
      <dd>{article.byline}</dd>

      <dt>Published Date:</dt>
      <dd>{(new Date(article.published_date)).toLocaleString()}</dd>

      <dt>Last Updated:</dt>
      <dd>{(new Date(article.updated_date)).toLocaleString()}</dd>

      <dt>Section:</dt>
      <dd>{article.section}</dd>

      <dt>URL:</dt>
      <dd>{article.short_url}</dd>

      <dt>Picture:</dt>
      <dd>{article.multimedia[0].url}</dd>

      <dt>Abstract:</dt>
      <dd>{article.abstract}</dd>
    </dl>
  )
}

Details.propTypes = {
  article: PropTypes.object.isRequired
}