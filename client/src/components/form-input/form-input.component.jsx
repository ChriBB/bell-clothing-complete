import React from 'react';

// imports needed when using CSS in JS
import {
    GroupContainer,
    FormInputContainer,
    FormInputLabel
  } from './form-input.styles';
  

//=================================================
// needed when using SCSS styling method
// + form-input.styles.scss file
//=================================================
// import './form-input.styles.scss';

// const FormInput = ({ handleChange, label, ...otherProps }) => (
//     <div className="group">
//         <input className='form-input' onChange={ handleChange } { ...otherProps } />
//         {
//             label ?
//             (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}> 
//                 {label}
//             </label>)
//             : null
//         }
//     </div>
// );
//=================================================

//=================================================
// needed using CSS in JS styling method +
// form-input.styles.jsx file
//=================================================
const FormInput = ({ handleChange, label, ...props }) => (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...props} />
      {label ? (
        <FormInputLabel className={props.value.length ? 'shrink' : ''}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
export default FormInput;