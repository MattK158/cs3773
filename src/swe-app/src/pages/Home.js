import React from 'react';
import '../App.css';
import './Home.css';

function HeroSection() {
  return (
    <div className='home-main'>
      <div className='welcome-banner'>
        <h1>Welcome!</h1>
        <p>What are you looking for?</p>
      </div>
      <div className='category-display'>
        <div className='category'>
          <img src='https://cdn.discordapp.com/attachments/986188819592257546/1171974157626527834/category_produce.png?ex=655ea0fd&is=654c2bfd&hm=18cde29ffd25f0b19a5571e1282bd05618c87bf4ee9af11771b941be908bb721&'></img>
          <p>Produce</p>
        </div>
        <div className='category'>
          <img src='https://cdn.discordapp.com/attachments/986188819592257546/1171910477803175968/category_grocery.png?ex=655e65ae&is=654bf0ae&hm=5ac2d1e500db32a4d71037bf40b0160d1b036e77090abc851a2a1c681dc9b459&'></img>
          <p>Grocery</p>
        </div>
        <div className='category'>
          <img src='https://cdn.discordapp.com/attachments/986188819592257546/1171910476830089246/category_bakery.png?ex=655e65ae&is=654bf0ae&hm=ad9122623dc0b6746931c243f3fb6a7dd7e5886a97f14d2c65b96627c3f1e80f&'></img>
          <p>Bakery</p>
        </div>
        <div className='category'>
          <img src='https://cdn.discordapp.com/attachments/986188819592257546/1171910477283078185/category_genmerch.png?ex=655e65ae&is=654bf0ae&hm=bfa910c14293e78c322160b043190d4941806d99654e301cc26bbe9043832844&'></img>
          <p>General Merchandise</p>
        </div>
      </div>
      <div className='discount-box'>
          <p>Use DISCOUNT for $10 off your first order</p>
      </div>
    </div>
  );
}

export default HeroSection;