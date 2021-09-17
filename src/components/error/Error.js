import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Error.css';
import httpResponses from '../../utils/httpResponses';

export const Error = ({ errorCode, clearSelected }) => {
  let response = httpResponses.find(response => response.code === Number(errorCode))
  return (
    <article className='error-container'>
      <div className='error-div'>
        <h2 className='error-h2'>Error {response.code}</h2>
        <h3>{response.message}</h3>
        <p>{response.description}</p>
        <Link to='/'>
          <button className='details-back' onClick={clearSelected}>Back</button>
        </Link>
      </div>
    </article>
  )
}

Error.propTypes = {
  errorCode: PropTypes.string.isRequired,
  clearSelected: PropTypes.func
};