import PropTypes from 'prop-types';
import './Functions.css';

export const Functions = ({ sorted, sortArticles }) => {

  return (
    <section className="function-container">
      <section>
        <label>
            Sort By
          <select onChange={event => sortArticles(event.target.value)} defaultValue={{sorted}} >
            <option value={'pubDesc'}>Published - descending</option>
            <option value={'pubAsc'}>Published - ascending</option>
            <option value={'upDesc'}>Updated - descending</option>
            <option value={'upAsc'}>Updated - ascending</option>
          </select>
        </label>
      </section>
    </section>
  )
}

Functions.propTypes = {
  sorted: PropTypes.string.isRequired,
  sortArticles: PropTypes.func.isRequired
}