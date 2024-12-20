import React from "react";
import { useNavigate } from "react-router-dom";
import "./categories.styles.scss";
const CategoryItem = (category) => {
  const { id, imgUrl, title, route } = category;

  const Navigate = useNavigate();

  const goToPage = () => Navigate(route);

  return (
    <div className="category" key={id} onClick={goToPage}>
      <div
        className="bg-img"
        alt="no img"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      />

      <div className="category_body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
