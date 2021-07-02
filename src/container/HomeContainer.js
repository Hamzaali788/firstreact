
import { connect } from 'react-redux'
import Home from '../components/Home'
import {addToCart, removeToCart} from '../services/action/actions'

const mapStateToProps=state=>({
    // cardData:state
})
const mapDispatchToProps=dispatch=>({
    addTocartHandler:data=>dispatch(addToCart(data)),
    removeTocartHandler:data=>dispatch(removeToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)

// export default Home