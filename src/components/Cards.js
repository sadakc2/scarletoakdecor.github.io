import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Portfolio</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/making_Cs_shower_decor.jpeg'
              text="Creating Christina's Bridal Shower Decor"
              label='Signage'
              path='/portfolio'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/bridal_shower_macaron_sign.jpeg'
              text='Bridal Shower Macaron Sign with Florals'
              label='Signage'
              path='/portfolio'
            />
            <CardItem
              src='images/shower_big_vase_closeup.jpeg'
              text='Bridal Shower Centerpieces'
              label='Bridal Shower'
              path='/portfolio'
            />
            <CardItem
              src='images/showe_vases_lineup.jpeg'
              text='Bridal Shower Centerpiece'
              label='Bridal Shower'
              path='/portfolio'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/bridal_shower_vases.jpeg'
              text='Bridal Shower Centerpieces'
              label='Bridal Shower'
              path='/portfolio'
            />
            <CardItem
              src='images/shower_medium_vase_closeup.jpeg'
              text='Bridal Shower Centerpiece'
              label='Bridal Shower'
              path='/portfolio'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/Ks_whole_party.JPG'
              text='Bridal Party Flowers'
              label='Wedding Florals'
              path='/portfolio'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/Ks_bridal_bouquet_2.jpeg'
              text='Bridal Bouquet'
              label='Bouquet'
              path='/portfolio'
            />
          <CardItem
              src='images/Ks_florals.jpg'
              text='Bridal Party Flowers'
              label='Wedding Florals'
              path='/portfolio'
            />
            <CardItem
              src='images/Ks_arbor.jpeg'
              text='Arbor Flowers'
              label='Wedding Florals;'
              path='/portfolio'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/Ks_welcome_sign.jpeg'
              text='Welcome Sign'
              label='Signage'
              path='/portfolio'
            />
            <CardItem
              src='images/arbor_closeup.jpeg'
              text='Arbor Flowers'
              label='Wedding Florals;'
              path='/portfolio'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/cascading_bouquet.jpeg'
              text='Cascading Bridal Bouquet'
              label='Bouquet'
              path='/portfolio'
            />
            <CardItem
              src='images/real_bride_cascading.jpeg'
              text='SOD Bride with her Bouquet'
              label='Bouquet'
              path='/portfolio'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/orange_bouquet_side.jpeg'
              text='Bridesmaid Bouquet'
              label='Bouquet'
              path='/portfolio'
            />
            <CardItem
              src='images/orange_sweetheart_table_flowers.jpeg'
              text='Sweetheart Table Arrangement'
              label='Wedding Florals'
              path='/portfolio'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/orange_flowers_full_order.jpeg'
              text='Bridesmaid Bouquet'
              label='Bouquet'
              path='/portfolio'
            />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;