import "./category.styles.scss";
import React from "react";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import { CategoriesContext } from "../../contexts/categoriesContext";

import ProductCard from "../../components/Product_Card/product-card";

const Category = () => {
  const { categories } = useContext(CategoriesContext);
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <div className="category-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Category;
