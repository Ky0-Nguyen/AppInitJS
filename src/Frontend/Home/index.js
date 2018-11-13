import View from './view'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    ...state
})

export default connect(mapStateToProps, null)(View)
