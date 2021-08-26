import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import { Route } from "react-router";
import Collection from "../collection/collection";

const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shop;
