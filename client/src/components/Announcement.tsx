import { useState } from 'react';

import CloseIcon from '@images/icon-close.svg?react';

export const Announcement = () => {
  const [close, setClose] = useState<boolean>(false);
  return (
    <section className='announcement'>
      <div className={`announcement-event ${close ? 'close' : ''}`}>
        <span className='bold'>12.12 Super BrandDay !!</span>
        <p>
          20% Off! Event Code :<span className='bold'> SHOPIT1212</span>
        </p>
        <span>* Event start from today through Dec 12.</span>
        <span className='bold'>2 days left!</span>
      </div>
      <CloseIcon
        onClick={() => {
          setClose(true);
        }}
      />
    </section>
  );
};
