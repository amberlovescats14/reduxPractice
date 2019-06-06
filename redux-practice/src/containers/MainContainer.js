import Main from '../components/Main'
import { connect } from 'react-redux'
import { getRepos } from '../redux/Actions'

const mapStateToProps = (state) => ({
  title: state.title
})
const mapDispatchToProps = (dispatch) => ({
  getRepos: (e) => dispatch(getRepos(e))

})
export default connect(mapStateToProps, mapDispatchToProps)(Main)