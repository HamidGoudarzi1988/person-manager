import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setPerson } from './../../actions/person';
import { addPerson } from './../../actions/persons';

const NewPerson = () => {
  const focusInput = useRef(null);
  const person = useSelector((state) => state.person);
  const dispatch = useDispatch();
  return (
    <div className='m-2 p-2'>
      <form
        className='form-inline justify-content-center'
        onSubmit={(event) => event.preventDefault()}
      >
        <div className='input-group w-25'>
          <input
            ref={focusInput}
            type='text'
            placeholder='Give a name'
            className='form-control'
            onChange={(e) => {
              dispatch(setPerson(e));
            }}
            value={person}
          />
          <div className='input-group-prepend'>
            <Button
              type='submit'
              variant='success'
              size='sm'
              className='fa fa-plus-square'
              onClick={() => dispatch(addPerson(person))}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewPerson;
