import { useState } from 'react';
import PropTypes from 'prop-types'

function SidebarLinkGroup({
  children,
  isActive,
}) {

  const [open, setOpen] = useState(isActive);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${isActive && 'bg-slate-900'}`}>
      {children(handleClick, open)}
    </li>
  );
}

SidebarLinkGroup.propTypes = {
  children: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
}

export default SidebarLinkGroup;