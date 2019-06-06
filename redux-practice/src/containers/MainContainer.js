import Main from '../components/Main'
import { connect } from 'react-redux'
import { getRepos } from '../redux/Actions'

const mapStateToProps = (state) => ({
  title: state.title,
  api: state.api
})
const mapDispatchToProps = (dispatch) => ({
  getRepos: (text) => dispatch(getRepos(text))

})
export default connect(mapStateToProps, mapDispatchToProps)(Main)