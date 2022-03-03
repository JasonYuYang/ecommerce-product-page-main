import { cloneElement, isValidElement, ReactElement } from 'react';

type CardsChildren = ReactElement<{ className: string }>;

interface CardsProps {
  children: CardsChildren;
}
export const Card = ({ children }: CardsProps) => {
  if (!isValidElement(children)) return <></>;
  return cloneElement(children, {
    className: `card ${children.props.className}`,
  });
};

// export const CardMultipleChildren = ({ children }: CardsProps) => {
//   return React.Children.map(children, (child) => {
//     if (!isValidElement(child)) return <></>;
//     return cloneElement(child, {
//       className: `card ${children.props.className}`,
//     });
//   });
// };
