export const GifItem = ({title, gifUrl}) => {
  return (
    <div className="card">
        <img src={gifUrl} alt={title}/>
        <p>{title}</p>
    </div>
  )
}
