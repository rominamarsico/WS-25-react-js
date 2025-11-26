import "./Card.css"

export function Card({ title, link, image }) {

  return (
    <div className="cardContainer">
      <img src={image} />
      <div className="textContainer">
        <h3>{title}</h3>
        <a href={link}>Link to {title}</a>
      </div>
    </div >
  )
}