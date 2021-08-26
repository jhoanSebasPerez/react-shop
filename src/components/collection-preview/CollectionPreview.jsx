import React from "react";
import CollectionItem from "../collection-item/CollectionItem";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  const previewItems = items.slice(0, 4);

  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {previewItems.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
