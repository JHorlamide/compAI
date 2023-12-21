import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { IconType } from '../../../config/NavigationConfig';

type IconProps = {
  svgIconProps?: SvgIconProps,
  Icon?: IconType
}

export function Icon(props: IconProps) {
  const { svgIconProps, Icon } = props;

  return (
    <SvgIcon {...svgIconProps}>
      {Icon && <Icon />}
    </SvgIcon>
  );
}