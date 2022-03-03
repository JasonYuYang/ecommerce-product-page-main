import { useState, useEffect } from 'react';

import {
  Navbar,
  BannerSlider,
  Search,
  Announcement,
  Navigation,
  SalesEvent,
  BrandMarkert,
  MetaData,
  ProductCategories,
} from '../components';

export const Home = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isNavigate, setIsNavigate] = useState<boolean>(false);

  useEffect(() => {
    if (isSearching || isNavigate) {
      document.body.classList.add('scroll-forbidden');
    } else {
      document.body.classList.remove('scroll-forbidden');
    }
  }, [isSearching, isNavigate]);

  const searchOnClick = () => {
    setIsSearching(true);
  };
  const closeSearchOnClick = () => {
    setIsSearching(false);
  };
  const navigateOnClick = () => {
    setIsNavigate((prev) => !prev);
  };
  const setEventTime = { hours: 3, minutes: 0, seconds: 0 };
  return (
    <>
      <MetaData title='Buy Best Products Online' />
      <main className='home'>
        {isSearching ? <Search show onCloseClick={closeSearchOnClick} /> : <Search />}
        {isNavigate ? <Navigation show /> : <Navigation />}
        <Navbar onSearchClick={searchOnClick} onNavigateClick={navigateOnClick} />
        <Announcement />
        <BannerSlider />
        <ProductCategories />
        <SalesEvent setEventTime={setEventTime} />
        <BrandMarkert />
      </main>
    </>
  );
};
/// 解決問題
