import React from 'react'
function Home(props)
{
    console.warn("Home",props)
    return(
        <div>
            <h1>REDUX</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://imagineonline.store/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzgrIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--12b3113481cd074f57e83f57d0f8534b6b946480/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lQTVRBd01IZ3hNREF3UGdZNkJrVlUiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--3847b42f42b1c45c616f0212496bf183b1d8c25d/MGMT3HN_A_2.png" />
                </div>
                <div className="text-wrapper item">
                    <span>Iphone 12+</span>
                    <span>Price : 1000.00$</span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>props.addTocartHandler({name:'hamza', price:100})} >Add to Cart</button><br />
                    <button onClick={()=>props.removeTocartHandler()} >Remove to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home