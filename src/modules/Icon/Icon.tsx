import React from "react";
import { ReactSVG } from "react-svg";
import { StandardProps, ThemeStyleSheetFactory } from "../../types";
import { useStyles } from "../../base";

const styleSheet: ThemeStyleSheetFactory = () => ({
  icon: {
    display: "block",
    "> div": {
      display: "flex"
    }
  }
});

export interface IIconProps extends StandardProps<"svg"> {
  name: string;
  src?: string;
  size?: number;
}
export const Icon: React.FC<IIconProps> = ({
  name,
  height,
  width,
  stroke,
  fill,
  color,
  className,
  src,
  size
}) => {
  const svgIcon = src || `assets/icons/${name}.svg`;
  const [styles, cx] = useStyles(styleSheet);
  return (
    <ReactSVG
      src={svgIcon}
      className={cx(styles.icon, className)}
      beforeInjection={svg => {
        svg.setAttribute("class", "y-icon");
        if (size) {
          svg.setAttribute("height", size.toString());
          svg.setAttribute("width", size.toString());
        }
        if (height) {
          svg.setAttribute("height", height.toString());
        }
        if (width) {
          svg.setAttribute("width", width.toString());
        }
        if (stroke) {
          svg.setAttribute("stroke", stroke);
        }
        if (fill) {
          svg.setAttribute("fill", fill);
        }
        if (color) {
          svg.setAttribute("fill", color);
          svg.setAttribute("stroke", color);
        }
      }}
    />
  );
};
export default Icon;
