/* React */
import { Fragment, useState } from 'react';

/* Libraries */
import { NavLink } from "react-router-dom";

/* MUI */
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";

/* Component/Application modules */
import navigationConfig, { MenuItem, IconType } from '../../config/NavigationConfig';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Icon } from '../util-components/icon/Icon';

interface CommonMenuItemProps {
  label: string;
  path: string;
  key: string;
  icon?: IconType;
  submenu?: MenuItem[];
  selectedItem: boolean;
  handleItemClick: () => void;
}

type MenuItemProps = CommonMenuItemProps;

type NestedMenuProps = CommonMenuItemProps & {
  selectedNestedItem: string | null;
  handleNestItemClick: (key: string) => void;
}

const baseMenuStyle = {
  my: 1,
  py: 1.5,
  pl: 2,
  borderRadius: 2,
  fontSize: 16,
  color: "white",
  cursor: "pointer",
  whiteSpace: "nowrap",
  alignItems: "center",
  display: "flex",
  "&:hover": {
    bgcolor: "white",
    color: "black"
  },
}

function getBackgroundColor(selectedItem: boolean, submenu?: MenuItem[]) {
  if (submenu && submenu.length > 0) {
    return null;
  } else if (selectedItem) {
    return { bgcolor: "white", color: "black" };
  }

  return null;
}

function getActiveAndHoveredStyle(
  isHovered: boolean,
  selectedItem?: boolean,
  submenu?: MenuItem[]
) {
  const linkStyle = {
    padding: "2px 1px",
    textDecoration: "none",
    marginLeft: "20px",
    color: "white"
  }

  if (isHovered) return { ...linkStyle, color: "black" };

  if (submenu && submenu.length > 0) {
    return { ...linkStyle, color: "white" };
  }

  if (selectedItem && selectedItem !== undefined) {
    return { ...linkStyle, color: "black" };
  }

  return linkStyle;
}

const MenuListItem = (props: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const { path, label, icon, selectedItem, handleItemClick } = props;

  const selectedItemStyle = {
    ...baseMenuStyle,
    ...getBackgroundColor(selectedItem),
  };

  return (
    <Stack
      spacing={4}
      direction="row"
      sx={selectedItemStyle}
      onClick={handleItemClick}
      onMouseEnter={() => setIsHovered(!isHovered)}
      onMouseLeave={() => setIsHovered(!isHovered)}
    >
      {icon && <Icon Icon={icon} />}
      <NavLink
        to={path}
        style={() => getActiveAndHoveredStyle(isHovered, selectedItem)}
      >
        {label}
      </NavLink>
    </Stack>
  );
}

const NestedMenu = (props: NestedMenuProps) => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const {
    label,
    icon,
    path,
    submenu,
    selectedItem,
    selectedNestedItem,
    handleItemClick,
    handleNestItemClick
  } = props;

  const hasSubmenu = submenu && submenu.length > 0;

  const handleToggle = () => {
    const isBool = hasSubmenu ? !open : open;
    setOpen(isBool);
    handleItemClick();
  };

  const selectedItemStyle = {
    justifyContent: "space-between",
    ...baseMenuStyle,
    ...getBackgroundColor(selectedItem, submenu),
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stack
        direction="row"
        sx={selectedItemStyle}
        onClick={handleToggle}
        onMouseEnter={() => setIsHovered(!isHovered)}
        onMouseLeave={() => setIsHovered(!isHovered)}
      >
        <Stack direction="row" spacing={4}>
          <Icon Icon={icon} />
          <NavLink
            to={path}
            style={() => getActiveAndHoveredStyle(isHovered, selectedItem, submenu)}
          >
            {label}
          </NavLink>
        </Stack>

        {hasSubmenu ? (
          <Fragment>
            {open ? <ExpandLess /> : <ExpandMore />}
          </Fragment>
        ) : null}
      </Stack>

      <Collapse sx={{ width: "100%" }} in={open} timeout="auto" unmountOnExit>
        <List component="nav" disablePadding>
          {submenu?.map(({ key, label, icon, path }) => (
            <MenuListItem
              key={key}
              icon={icon}
              path={path}
              label={label}
              selectedItem={selectedNestedItem === key}
              handleItemClick={() => handleNestItemClick(key)}
            />
          ))}
        </List>
      </Collapse>
    </Box>
  );
};

const MenuContent = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>("dashboards");
  const [selectedNestedItem, setSelectedNestItem] = useState<string | null>(null);

  const handleItemClick = (key: string) => {
    setSelectedItem(key);
    setSelectedNestItem(null);
  }

  const handleNestItemClick = (key: string) => {
    setSelectedNestItem(key);
    setSelectedItem(null);
  }

  return (
    <List component="nav" sx={{ width: '100%', maxWidth: 360 }}>
      {navigationConfig.map(({ key, label, icon, submenu, path }) =>
        submenu ? (
          <NestedMenu
            key={key}
            label={label}
            icon={icon}
            path={path}
            submenu={submenu}
            selectedItem={selectedItem === key}
            selectedNestedItem={selectedNestedItem}
            handleNestItemClick={handleNestItemClick}
            handleItemClick={() => handleItemClick(key)}
          />
        ) : (
          <MenuListItem
            key={key}
            label={label}
            icon={icon}
            path={path}
            selectedItem={selectedItem === key}
            handleItemClick={() => handleItemClick(key)}
          />
        )
      )}
    </List>
  );
};

export default MenuContent;
