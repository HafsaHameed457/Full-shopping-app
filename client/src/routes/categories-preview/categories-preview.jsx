import React, { Fragment } from "react";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categoriesContext";
import CategoryPreview from "../../components/category-preview/category-preview";
import "./categories-preview.styles.scss";
const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);
  console.log(categories);
  return (
    <Fragment>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
