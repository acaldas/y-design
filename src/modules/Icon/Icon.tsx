import React from "react";
import { ReactSVG } from "react-svg";

export interface IIconProps {  
    name: string;
    src?: string;
    width?: number;
    height?: number;
    size?: number;
    fill?: string;
    stroke?: string;
    color?: string;
}
export const Icon: React.FC<IIconProps> = ({ name, height, width, stroke, fill, color, src, size }) => {
    const svgIcon = src || `assets/icons/${name}.svg`;
    return <ReactSVG src={svgIcon} beforeInjection={svg => {
        svg.setAttribute("class", "y-icon")
        if(size) {
            svg.setAttribute("height", size.toString())
            svg.setAttribute("width", size.toString())
        } 
        if(height) {
            svg.setAttribute("height", height.toString());
        }
        if(width) {
            svg.setAttribute("width", width.toString());
        }
        if(stroke) {
            svg.setAttribute("stroke", stroke);
        }
        if(fill) {
            svg.setAttribute("fill", fill);
        }
        if(color) {
            svg.setAttribute("fill", color);
            svg.setAttribute("stroke", color);
        }
      }}/>
}
export default Icon;