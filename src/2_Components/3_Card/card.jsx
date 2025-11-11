export default function Card({
  title,
  description,
  image,
  imageStyle,
  titleStyle,
  descStyle,
  cardStyle,
  style,
  children,
}) {
  return (
    <div className="card" style={style}>
      {/* Left side: image */}
      {image && <img src={image} alt={title} style={imageStyle} />}

      <div style={{ cardStyle }}>
        {title && <h1 style={titleStyle}>{title}</h1>}
        {description && <p style={descStyle}>{description}</p>}
      </div>

      {children}
    </div>
  );
}
