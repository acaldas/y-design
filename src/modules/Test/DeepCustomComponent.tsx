import React from "react";
// @ts-ignore
import useStyles from 'react-with-styles/lib/hooks/useStyles';
import CustomComponent from "./CustomComponent";

// @ts-ignore
const DeepCustomComponent: React.FC = ({ onClick, children }) => {
  const { styles } = useStyles({ stylesFn: deepCustomStylesFn });

  return (
    // @ts-ignore
    <CustomComponent customStyles={styles.test} onClick={onClick}>{children}</CustomComponent>
  );
};

// @ts-ignore
const deepCustomStylesFn = theme => ({
  test: {
    border: `10px solid ${theme.colors.success.success25}`,
    textDecoration: "underline"
  }
});

export default DeepCustomComponent;