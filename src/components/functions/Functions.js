import PropTypes from 'prop-types';
import './Functions.css';

export const Functions = ({ sorted, sortArticles }) => {
  let sortButton = sorted ? null : <button onClick={event => sortArticles(event)}>Sort by Last Updated</button>

  return (
    <section className="function-container">
      <section>
        {sortButton}
      </section>
    </section>
  )
}

Functions.propTypes = {
  sorted: PropTypes.bool.isRequired,
  sortArticles: PropTypes.func.isRequired
}