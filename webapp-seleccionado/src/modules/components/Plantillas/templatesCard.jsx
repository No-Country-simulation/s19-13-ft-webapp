
import PropTypes from 'prop-types'

export const Card = ({ children, className, ...props }) => {
  return (
    <div className={`  p-2  ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CardContent = ({ children, className, ...props }) => {
  return (
    <div className={` ${className}`} {...props}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}


