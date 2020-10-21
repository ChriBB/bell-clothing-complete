import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
// This import is also needed when using CSS in JS 
import { CollectionsOverviewContainer} from './collections-overview.styles';

//=================================================
// needed when using SCSS styling method
// + collection-overview.styles.scss file
//=================================================
// import './collections-overview.styles.scss';

// const CollectionsOverview = ({ collections }) => (
//     <div className='collections-overview'>
//          {collections.map(({ id, ...otherCollectionProps}) =>(
//             <CollectionPreview key={id} {...otherCollectionProps} />
//             ))}
//     </div>
// );
//=================================================

//=================================================
// needed using CSS in JS styling method +
// collection-overview.styles.jsx file
//=================================================
const CollectionsOverview = ({ collections }) => (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});


export default connect(mapStateToProps)(CollectionsOverview);

