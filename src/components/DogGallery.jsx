const DogGallery = ({ dogs, isLoading }) => {
  if (isLoading) {
    return <p>Загрузка...</p>
  }
  return (
    <div className="dog-gallery">
      {dogs.map((item) => (
        <img key={item} src={item} alt="Сабака" />
      ))}
    </div>
  )
}
export default DogGallery
