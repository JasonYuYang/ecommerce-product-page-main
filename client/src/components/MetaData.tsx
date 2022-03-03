import { Helmet } from 'react-helmet-async';

interface MetaDataProsType {
  title: string;
}
export const MetaData = ({ title }: MetaDataProsType) => {
  return (
    <Helmet>
      <title>{`${title} - ShopIT`}</title>
    </Helmet>
  );
};
