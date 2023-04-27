import  PropTypes from "prop-types"

const PageTop = ({ title }) => {
    return (

        <>
            <div > 
                <h4 className="border-bottom pb-3">
                    {title}
                </h4>
            </div>
        </>
    )
}

export default PageTop

PageTop.propTypes= {
    title:PropTypes.string
}
PageTop.defaultProps = { 
title:''
}