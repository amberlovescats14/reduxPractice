
export const getRepos = (e) => {
  return (dispatch) => {
    fetch(`https://api.github.com/search/repositories?q=redux`)
    .then(res => res.json())
    .then(data => {
      // console.log(data.items)
      dispatch({
        type: "SET_REPOS",
        value: data
      })
    })
  }
}