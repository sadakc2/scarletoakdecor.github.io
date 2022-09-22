import React from 'react';
import { Link } from 'react-router-dom';

function IntroItem(props) {
  return (
    <>
      <li className='intros__item'>
        <Link className='intros__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='intros__item__img'
              alt='SOD Image'
              src={props.src}
            />
          </figure>
          <div className='intros__item__info'>
            <h5 className='intros__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default IntroItem;
