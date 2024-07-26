import "./style.css"

const Skeleton = ({ className }) => {
    return (
        <div className={`skeleton ${className ? className : ''}`} />
    )
}

export default Skeleton