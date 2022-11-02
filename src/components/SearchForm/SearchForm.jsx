import React from 'react';
import { useState } from 'react';
import css from './SearchForm.module.css';

export function SearchForm({ getFormData }) {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = e => {
    setSearchValue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    getFormData(searchValue);
  };

  return (
    <form onSubmit={handleSubmit} className={css.search}>
      <input onChange={handleChange} className={css.input} />
      <button type="submit" className={css.btn}>
        Search
      </button>
    </form>
  );
}
