import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import StyledEditName from './EditName.styled';
import { firstNameSelector, lastNameSelector } from '../../../selectors';

function EditName({ SaveChanges, toggleEdit }) {
  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const firstName = useSelector(firstNameSelector);
  const lastName = useSelector(lastNameSelector);

  const submitHandler = (e) => {
    e.preventDefault();
    SaveChanges({
      firstName: firstNameInput.current.value,
      lastName: lastNameInput.current.value,
    });
    toggleEdit();
  };

  const handleCancel = (e) => {
    e.preventDefault();
    toggleEdit();
  };

  return (
    <StyledEditName>
      <input type="text" ref={firstNameInput} defaultValue={firstName} />
      <input type="text" ref={lastNameInput} defaultValue={lastName} />
      <input type="submit" onClick={submitHandler} value="Save" />
      <button onClick={handleCancel}>Cancel</button>
    </StyledEditName>
  );
}

export default EditName;
