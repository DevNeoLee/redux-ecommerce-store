import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Category from '../category/category';

import { selectCollectionsForCategory } from '../../redux/shop/shop-selectors';

import collectionsStyle from './collections.module.scss';

const Collections = ({ collections }) => (

  <div className={ collectionsStyle.main }>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <Category key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForCategory
});

export default connect(mapStateToProps)(Collections);