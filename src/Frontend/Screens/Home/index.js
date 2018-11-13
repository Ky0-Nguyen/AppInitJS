import View from './view'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  listUserData: state.listUserData
})

export default connect(mapStateToProps, null)(View)
