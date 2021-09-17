import './Functions.css';

export const Functions = ({ sorted, sortArticles }) => {
  let sortButton = sorted ? null : <button onClick={event => sortArticles(event)}>Sort by Last Updated</button>

  return (
    <>
      {sortButton}
    </>
  )
}