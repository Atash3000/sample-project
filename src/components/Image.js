import React, { useEffect, Fragment, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../store/actions/main';

function Image() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.getDataReducer);
  const { loading, error, images } = state;

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <Fragment>
      {loading ? (
        <h2>...loading</h2>
      ) : error ? (
        <h2>...ERROR HAPPEN</h2>
      ) : (
        <div className='App'>
          <h1>HELLO</h1>
          {images.map((image) => {
            return (
              <img
                height='100px'
                key={image.id}
                src={image.url}
                alt={image.title}
              />
            );
          })}
        </div>
      )}
    </Fragment>
  );
}

export default Image;
