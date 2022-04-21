import React from 'react'
import PropTypes from 'prop-types'

function Bar(props){
    return(
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}

Bar.propTypes = {
    title : PropTypes.string.isRequired
}

Bar.defaultProps = {
    title : "Default App"
}

export default Bar;