export const getData = async (section) => {
  let url = `https://api.nytimes.com/svc/topstories/v2/`
  let apiKey = `1sPI8hfEhEK7GiJ4Hc2odGXpANBbiCVJ`
  let response = await fetch(`${url}${section}.json?api-key=${apiKey}`)
  return checkForError(response)
}

const checkForError = async (response) => {
  if (!response.ok) {
    throw new Error(response.status)
  } else {
    let data = await response.json()
    return data
  }
}