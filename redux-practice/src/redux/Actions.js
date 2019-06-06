
export const getRepos = (text) => {
  return (dispatch) => {
    fetch(`https://api.github.com/search/repositories?q=${text}`)
    .then(res => res.json())
    .then(data => {
      console.log(data.items)
      dispatch({
        type: "SET_REPOS",
        value: data.items
      })
    })
  }
}