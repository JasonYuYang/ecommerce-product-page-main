import { useState } from 'react';
import SearchIcon from '@images/search.svg?react';
import CloseIcon from '@images/icon-close.svg?react';
import TrashIcon from '@images/trash-fill.svg?react';
import FlameIcon from '@images/flame.svg?react';
import XcircleIcon from '@images/x-circle.svg?react';

interface SearchProps {
  show?: boolean;
  onCloseClick?: () => void;
}
// { isSearching }: SearchProps
export const Search = ({ show = false, onCloseClick }: SearchProps) => {
  const [keyword, setKeyword] = useState<string>('');
  const rankNumberColor = {
    backgroundColor: 'rgba(255, 0, 0, 1)',
    color: 'white',
  };
  const testString = [
    '23423',
    'asdfwtg234',
    '23423423423424',
    '343434343',
    '345',
    '3453533ggg',
    '665',
    '55454',
    '34535434534535',
    '7ggrgjheghr',
  ];
  const searchHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <section className={`search ${show ? 'show' : ''}`}>
      <form className='search__group' onSubmit={searchHandler}>
        <input
          type='text'
          id='search_field'
          name='search_field'
          className='search__group--input'
          placeholder='What are you looking for ...'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          autoComplete='off'
        />
        <label htmlFor='search_field' className='search__group--icon'>
          <SearchIcon className='search__icon' />
        </label>
        <CloseIcon className='close__icon' onClick={onCloseClick} />
      </form>
      <div className='search__keywords'>
        {' '}
        <div className='search__history'>
          <div className='search__history--title'>
            Search History
            <div className='search__history--clear'>
              {' '}
              <TrashIcon />
              <span>Clear</span>
            </div>
          </div>

          <ul className='search__history--group'>
            <li className='search__history--result'>
              <p>23334234</p>
              <XcircleIcon />
            </li>
            <li className='search__history--result'>
              <p>23434</p>
              <XcircleIcon />
            </li>
            <li className='search__history--result'>
              <p> 2344444444243</p>
              <XcircleIcon />
            </li>
            <li className='search__history--result'>
              <p> 2243</p>
              <XcircleIcon />
            </li>
          </ul>
        </div>
        <div className='search__recommendation'>
          <div className='search__recommendation--title'>
            <FlameIcon />
            <span>Trending Keywords</span>
          </div>
          <ul className='search__recommendation--group'>
            {testString.map((string, index) => (
              <li className='search__recommendation--result' key={string}>
                <div
                  className='rank'
                  style={{
                    ...rankNumberColor,
                    backgroundColor:
                      index < 5 ? `rgba(255, ${50 * index}, 0, 1)` : 'rgba(0, 0, 0, 0.55)',
                  }}
                >
                  <p>{index + 1}</p>
                </div>
                <p>{string}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
