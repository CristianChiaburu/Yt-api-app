import React from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
    // TODO: Make sure we call callback from parent component
  };
  return (
    <div className='ui segment'>
      <form action='' className='ui form' onSubmit={onSubmit}>
        <div className='field'>
          <label htmlFor=''>Search for a video</label>
          <input
            type='text'
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
