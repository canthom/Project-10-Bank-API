import React, { useState } from 'react';
import StyledEditName from './EditName.styled';
import store from '../../../redux/store';

function EditName({ SaveChanges, toggleEdit }) {
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
  });

  const submitHandler = (e) => {
    e.preventDefault();
    SaveChanges(details);
    toggleEdit();
  };

  const handleCancel = (e) => {
    e.preventDefault();
    toggleEdit();
  };

  return (
    <StyledEditName>
      <input
        type="text"
        onChange={(e) => setDetails({ ...details, firstName: e.target.value })}
        defaultValue={store.getState().user.firstName}
      />
      <input
        type="text"
        onChange={(e) => setDetails({ ...details, lastName: e.target.value })}
        defaultValue={store.getState().user.lastName}
      />
      <input type="submit" onClick={submitHandler} value="Save" />
      <button onClick={handleCancel}>Cancel</button>
    </StyledEditName>
  );
}

export default EditName;
