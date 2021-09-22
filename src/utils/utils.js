export const sortByPublishedAsc = (articles) => {
  return articles.sort((a, b) => {
    return new Date(a.published_date) - new Date(b.published_date)
  })
}

export const sortByPublishedDesc = (articles) => {
  return articles.sort((a, b) => {
    return new Date(b.published_date) - new Date(a.published_date)
  })
}

export const sortByUpdatedAsc = (articles) => {
  return articles.sort((a, b) => {
    return new Date(a.updated_date) - new Date(b.updated_date)
  })
}

export const sortByUpdatedDesc = (articles) => {
  return articles.sort((a, b) => {
    return new Date(b.updated_date) - new Date(a.updated_date)
  })
}