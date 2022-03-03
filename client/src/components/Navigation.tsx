interface NavigationPropsTypes {
  show?: boolean;
}
export const Navigation = ({ show = false }: NavigationPropsTypes) => {
  const categories = [
    'Electronics',
    'Cameras',
    'Laptops',
    'Accessories',
    'Headphones',
    'Food',
    'Books',
    'Clothes/Shoes',
    'Beauty/Health',
    'Sports',
    'Outdoor',
    'Home',
  ];
  return (
    <section className={`navigation__wrapper ${show ? 'show' : ''}`}>
      <div className='navigation'>
        <div className='navigation__close-icon'></div>
        <div className='navigation__user'>
          <div className='navigation__user--login'>Log In</div>
          <div className='navigation__user--signup'>Sign Up</div>
        </div>{' '}
        <h5 className='navigation__title'>Product Categories</h5>
        <ul className='navigation__categories'>
          {categories.map((category) => (
            <li className='navigation__category' key={category}>
              {category}
            </li>
          ))}
        </ul>
        <h5 className='navigation__title'>More from SHOPIT</h5>
        <div className='navigation__info'>
          <div className='navigation__about'>About Us</div>
          <div className='navigation__contact'>Contact Us</div>
          <div className='navigation__language'>Language</div>
        </div>
      </div>
    </section>
  );
};
