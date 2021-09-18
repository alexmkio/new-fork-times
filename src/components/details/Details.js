import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import PropTypes from 'prop-types';
import './Details.css';

export const Details = ({ article }) => {
  return (
    <section className="details-section">
      <dl>
        <dt>Title:</dt>
        <dd>{article.title}</dd>

        <dt>By:</dt>
        <dd>{article.byline}</dd>

        <dt>Published Date:</dt>
        <dd>{(new Date(article.published_date)).toLocaleString().split(",").join(" ---")}</dd>

        <dt>Last Updated:</dt>
        <dd>{(new Date(article.updated_date)).toLocaleString().split(",").join(" ---")}</dd>

        <dt>Section:</dt>
        <dd>{article.section}</dd>

        <dt>URL:</dt>
        <dd><ExternalLink href={article.short_url} /></dd>

        <dt>Picture:</dt>
        <dd><ExternalLink href={article.multimedia[0].url} /></dd>

        <dt>Abstract:</dt>
        <dd>{article.abstract}</dd>
      </dl>
      <Link to='/'>
        <button>Back</button>
      </Link>
    </section>
  )
}

Details.propTypes = {
  article: PropTypes.object.isRequired
}