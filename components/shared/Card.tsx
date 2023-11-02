

const Card = ({children, reverse}:any) => {
  return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  )
}


export default Card