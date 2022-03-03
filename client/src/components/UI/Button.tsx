import { cloneElement, isValidElement, ReactElement } from 'react';

type ButtonChildren = ReactElement<{ className: string; onClick?: (event: MouseEvent) => void }>;

interface ButtonProps {
  children: ButtonChildren;
}
export const Button = ({ children }: ButtonProps) => {
  const createRipple = (event: MouseEvent) => {
    if (event.currentTarget instanceof HTMLElement) {
      const button = event.currentTarget;
      const circle = document.createElement('span');
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      let vpOffset = button.getBoundingClientRect();

      circle.style.width = `${diameter}px`;
      circle.style.height = `${diameter}px`;
      circle.style.left = `${event.pageX - window.scrollX - vpOffset.left - radius}px`;
      circle.style.top = `${event.pageY - window.scrollY - vpOffset.top - radius}px`;
      circle.classList.add('ripple');

      const ripple = button.getElementsByClassName('ripple')[0];

      if (ripple) {
        ripple.remove();
      }
      button.appendChild(circle);
    }
  };
  if (!isValidElement(children)) return <></>;
  return cloneElement(children, {
    className: `btn ${children.props.className}`,
    onClick: (e: MouseEvent) => {
      createRipple(e);
      if (children.props.onClick) {
        children.props.onClick(e);
      }
    },
  });
};
