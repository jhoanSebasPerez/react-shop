import { selectCollection } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/CollectionItem";
import "./collection.styles.scss";

const Collection = ({ collection }) => {
  return (
    <div className="collection-page">
      <h2>{collection.title}</h2>
      {collection.items.map((item) => (
        <CollectionItem item={item} key={item.id} />
      ))}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
