import { useState } from 'react';
import classnames from 'classnames';
import './CollapsibleContent.scss';

const CollapsibleContent = ({
  children,
  className,
  shorter = false,
}: {
  children: React.ReactNode;
  className?: string;
  shorter?: boolean;
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      className={classnames('collapsible', {
        [className as string]: className,
        'collapsible--open': open,
        'collapsible--closed': !open && !shorter,
        'collapsible--closed-shorter': !open && shorter,
      })}
      onClick={() => setOpen(!open)}
    >
      {children}
      {!open && <div className="collapsible--fade" />}
    </div>
  );
};

export default CollapsibleContent;
