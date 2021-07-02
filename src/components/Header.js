import React from 'react'
function header(props)
{
    console.warn(props.data)
    return(
        <div>
            <div className="cart-box">
            <span className="cart-count">{props.data.length}</span>
                <img src="https://www.mangoextensions.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/a/j/ajaxaddtocartsite.jpg" />
            </div>
        </div>
    )
}

export default header