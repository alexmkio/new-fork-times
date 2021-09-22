import PropTypes from 'prop-types';
import './Functions.css';

export const Functions = ({ sorted, sortArticles }) => {
  let publishedAsc = sorted.published_asc
    ? <option value={'pubAsc'} selected>Published - ascending</option>
    : <option value={'pubAsc'}>Published - ascending</option>
  let publishedDesc = sorted.published_desc
    ? <option value={'pubDesc'} selected>Published - descending</option>
    : <option value={'pubDesc'}>Published - descending</option>
  let updatedAsc = sorted.updated_asc
    ? <option value={'upAsc'} selected>Updated - ascending</option>
    : <option value={'upAsc'}>Updated - ascending</option>
  let updatedDesc = sorted.updated_desc
    ? <option value={'upDesc'} selected>Updated - descending</option>
    : <option value={'upDesc'}>Updated - descending</option>

  return (
    <section className="function-container">
      <section>
        <label>
            Sort By
          <select onChange={event => sortArticles(event.target.value)} >
            {publishedAsc}
            {publishedDesc}
            {updatedAsc}
            {updatedDesc}
          </select>
        </label>
      </section>
    </section>
  )
}

Functions.propTypes = {
  sorted: PropTypes.object.isRequired,
  sortArticles: PropTypes.func.isRequired
}