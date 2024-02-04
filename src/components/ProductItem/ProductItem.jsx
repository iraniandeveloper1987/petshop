import React from "react"

function ProductItem({ image, title, desc, linkContent }) {
  const handleDragStart = (e) => e.preventDefault()
  return (
    <div className="card mt-3">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <a href="#" className="btn btn-primary">
          {linkContent}
        </a>
      </div>
    </div>
  )
}

export default ProductItem
