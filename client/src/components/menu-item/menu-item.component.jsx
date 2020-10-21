import React from 'react';
import { withRouter } from 'react-router-dom';

// imports needed when using CSS in JS
import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
  } from './menu-item.styles';

//=================================================
// needed when using SCSS styling method
// + form-input.styles.scss file
//=================================================

// import './menu-item.styles.scss';

// const MenuItem = ( {title, imageUrl, size, history, linkUrl, match }) => (
//    <div className={`${size} menu-item`} 
//         onClick={() => history.push(`${match.url}${linkUrl}`)}>
//     <div 
//         className='background-image' style={{
//         backgroundImage: `url(${imageUrl})`
//     }} 
//     />
//     <div className='content'>
//         <h1 className='title'>{title.toUpperCase()}</h1>
//         <span className='subtitle'>SHOP NOW</span>
//     </div>
//    </div>
// );
//=================================================

//=================================================
// needed using CSS in JS styling method +
// menu-item.styles.jsx file
//=================================================
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className='background-image'
        imageUrl={imageUrl}
      />
      <ContentContainer className='content'>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
  

export default withRouter(MenuItem);