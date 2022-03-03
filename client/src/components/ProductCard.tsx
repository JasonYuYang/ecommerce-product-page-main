import NumberFormat from 'react-number-format';
import FreeShipingIcon from '../assets/images/free-shipping.png';
import XtraCashBack from '../assets/images/xtraCashBack.png';

interface ProductPropsType {
  label: string;
  background?: string;
}

export const ProductCard = ({ label, background }: ProductPropsType) => {
  const testString = 'Nike React Miler gg23 42ffwd f gg fgwretgergefgg';
  return (
    <div className='productCardContainer'>
      <span className='productCard__sales-info-ribbon'>
        <span className='productCard__sales-info-ribbon--discountrate'>20%</span>
        OFF
      </span>
      <div className='productCard__image'>
        <img src='' alt='' />
        <div className='producutCard__image--like'></div>
      </div>
      <div className='productCard__info'>
        <div className='productCard__info--title'>{testString}</div>
        <ul className='productCard__info--labels'>
          <li className='productCard__info--labels--1' style={{ backgroundColor: background }}>
            {label}
          </li>
          <li className='productCard__info--labels--2'>
            <img src={FreeShipingIcon} alt='free-shipping' />
          </li>
          <li className='productCard__info--labels--3'>
            <img src={XtraCashBack} alt='xtra-cashback' />
          </li>
        </ul>
        <div className='productCard__info--ratings'>
          <div className='rating-outer'>
            <div className='rating-inner' style={{ width: `${(3.7 / 5) * 100}%` }}></div>
          </div>
          <span>3.7</span>
        </div>

        <div className='productCard__info--price'>
          <div className='productCard__info--price-info'>
            <p className='productCard__info--price-info--original'>
              <NumberFormat value={2456981} displayType='text' thousandSeparator prefix='$' />
            </p>
            <p className='productCard__info--price-info--after-discount'>
              <NumberFormat value={2581} displayType='text' thousandSeparator prefix='$' />
            </p>
          </div>
          <div className='productCard__info--price-sold-quantity'>
            <span>Sold</span>
            <span className='sold-quantity'>
              <NumberFormat value={2454543} displayType='text' thousandSeparator />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
