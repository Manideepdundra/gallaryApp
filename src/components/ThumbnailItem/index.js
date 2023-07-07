import './index.css'

const ThumbnailItem = props => {
  const {thumbnail, thumbChange, isActive} = props
  const {imageAltText, thumbnailUrl, imageUrl, thumbnailAltText} = thumbnail
  const change = () => {
    thumbChange(imageUrl, imageAltText)
  }
  const isThumbActive = isActive ? 'thumbImgSelected' : ''
  return (
    <li>
      <button type="button">
        <img
          src={thumbnailUrl}
          onClick={change}
          alt={thumbnailAltText}
          className={`thumbImg ${isThumbActive}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
