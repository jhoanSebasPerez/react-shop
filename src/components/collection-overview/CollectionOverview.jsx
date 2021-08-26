import { connect } from "react-redux";
import { selectShopData } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import "./collection-overview.styles.scss";

const CollectionOverview = ({ collection }) => {
  return (
    <div className="collection-overview">
      {collection.map(({ id, ...objprops }) => (
        <CollectionPreview key={id} {...objprops} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collection: selectShopData,
});

export default connect(mapStateToProps)(CollectionOverview);
