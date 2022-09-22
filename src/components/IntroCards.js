import React from 'react';
import IntroItem from './IntroItem';

function Intros() {
  return (
    <div class="container">
  <ul class="thumbnails">
    <li>
      <input type="radio" name="select" id="image1" />
      <div class="item-hugger">
        <div class="title">Image 1</div>
        <img class="thumb-image" src="CK_heart_wall_2.JPG" />
        <label for="image1"/>
      </div>
      <div class="content">
        <div class="item-wrapper"> 
          <img src="CK_heart_wall_2.JPG" />
          <div class="title">Image 1</div>
        </div>
      </div>
    </li>
    <li class="is-active">
      <input type="radio" name="select" id="image2" checked />
      <div class="item-hugger">
        <div class="title">Image 2</div>
        <img class="thumb-image" src="images/CK_heart_wall_2.JPG" />
        <label for="image2"/>
      </div>
      <div class="content">
        <div class="item-wrapper">
          <img src="images/CK_heart_wall_2.JPG" />
          <div class="title">Image 2</div>
        </div>
      </div>
    </li>
    <li>
      <input type="radio" name="select" id="image3" />
      <div class="item-hugger">
        <div class="title">Image 3</div>
        <img class="thumb-image" src="images/CK_heart_wall_2.JPG" />
        <label for="image3"/>
      </div>
      <div class="content">
        <div class="item-wrapper">
          <img src="images/CK_heart_wall_2.JPG" />
          <div class="title">Image 3</div>
        </div>
      </div>
    </li>
    <li>
      <input type="radio" name="select" id="image4" />
      <div class="item-hugger">
        <div class="title">Image 4</div>
        <img class="thumb-image" src="images/CK_heart_wall_2.JPG" />
        <label for="image4"/>
      </div>
      <div class="content">
        <div class="item-wrapper">
          <img src="images/CK_heart_wall_2.JPG" />
          <div class="title">Image 4</div>
        </div>
      </div>
    </li>
  </ul>
  <div class="white-box"></div>
</div>
  );
}

export default Intros;