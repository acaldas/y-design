import React from "react";
// @ts-ignore
import useStyles from 'react-with-styles/lib/hooks/useStyles';
import { getComputedStyles } from "./utils";

// @ts-ignore
const BaseComponent: React.FC = ({ customStyles, children }) => {
  const { css, styles } = useStyles({ stylesFn: baseStylesFn });

  const computedStyles = getComputedStyles(styles.test, customStyles);

  return (
      <div {...css(computedStyles)}>{children}</div>
  );
}

// @ts-ignore
const baseStylesFn = theme => ({
  test: {
    border: `1px solid ${theme.colors.primary}`,
    padding: "4px"
  }
});

export default BaseComponent;