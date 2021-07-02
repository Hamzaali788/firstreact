import { connect } from 'react-redux'
import header from '../components/Header'

const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    
})

export default connect(mapStateToProps,mapDispatchToProps)(header)

// export default Home