import React from "react";
import CategoryItem from "../category-item/category-item";
import "./category.scss";

const categories = [
  {
    id: 1,
    title: "Hats",
    imgUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "Jackets",
    imgUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "Sneakers",
    imgUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "Womens",
    imgUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "shop/womens",
  },
  {
    id: 4,
    title: "Mens",
    imgUrl: "https://i.ibb.co/R70vBrQ/womens.png",
    route: "shop/mens",
  },
];

const CategoryDesk = () => {
  return (
    <div className="categories">
      {categories.map((category) => (
        <CategoryItem
          id={category.id}
          imgUrl={category.imgUrl}
          title={category.title}
          route={category.route}
        />
      ))}
    </div>
  );
};

export default CategoryDesk;
