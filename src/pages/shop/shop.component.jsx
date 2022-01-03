import React from "react";
import { idText } from "typescript";
import CollectionPreview from "../../components/collection-preview/collection-preview";

import SHOP_DATA from "./shot.data";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const { collections } = this.state;
        return <div calssname='shop-page'>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps}
                />
            ))}
        </div>
    }
}

export default ShopPage;