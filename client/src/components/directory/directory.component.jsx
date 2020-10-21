import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

//This import is also needed when using CSS in JS
import { DirectoryMenuContainer } from './directory.styles'

//=================================================
// needed when using SCSS styling method
// + directory.styles.scss file
//=================================================
// import './directory.styles.scss';

// const Directory = ({ sections }) => (
//    <div className='directory-menu'>
//       {sections.map(({ id, ...otherSectionProps }) => (<MenuItem key={id} {...otherSectionProps}/>
//       ))}    
//     </div>
// );
//=================================================

//=================================================
// needed using CSS in JS styling method +
// directory.styles.jsx file
//=================================================
const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);


const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);