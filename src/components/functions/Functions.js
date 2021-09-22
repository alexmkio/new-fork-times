import PropTypes from 'prop-types';
import './Functions.css';

export const Functions = ({ sorted, sortArticles }) => {
  console.log(sorted)
  let publishedAsc = sorted.published_asc ? null : <option value={'pubAsc'}>Published - ascending</option>
  let publishedDesc = sorted.published_desc ? null : <option value={'pubDesc'}>Published - descending</option>
  let updatedAsc = sorted.updated_asc ? null : <option value={'upAsc'}>Updated - ascending</option>
  let updatedDesc = sorted.updated_desc ? null : <option value={'upDesc'}>Updated - descending</option>

  return (
    <section className="function-container">
      <section>
        
      <label>
          Sort By
        <select name='precipProbability'
          onChange={event => sortArticles(event.target.value)}
        >
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