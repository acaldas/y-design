import React from "react";
// @ts-ignore
import useStyles from 'react-with-styles/lib/hooks/useStyles';
import BaseComponent from "./BaseComponent";
import { getComputedStyles } from "./utils";

// @ts-ignore
const CustomComponent: React.FC = ({ customStyles, onClick, children }) => {
  const { styles } = useStyles({ stylesFn: customStylesFn });

  const computedStyles = getComputedStyles(styles.test, customStyles);

  return (
    // @ts-ignore
    <BaseComponent customStyles={computedStyles}>
      {children}
      <button onClick={onClick}></button>
    </BaseComponent>
  );
}

// @ts-ignore
const customStylesFn = theme => ({
  test: {
    border: `3px solid ${theme.colors.alert.alert25}`,
    fontSize: "20px"
  }
});

export default CustomComponent;