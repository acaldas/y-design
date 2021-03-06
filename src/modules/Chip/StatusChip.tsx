import React from "react";
import { Theme, WithStylesProps } from "../../types";
import BaseChip, { IProps as BaseChipProps } from "./BaseChip";
import extendStyles from "../../base/extendStyles";

type ChipTypes = "default" | "success" | "warning" | "danger";

export interface IProps extends BaseChipProps {
  type: ChipTypes;
  styleSheet: (theme: Theme) => {};
}

const colorMap = (theme: Theme) => ({
  default: {
    chip: {
      borderColor: theme.colors.grey.grey50
    },
    selected: {
      backgroundColor: theme.colors.grey.grey50
    }
  },
  success: {
    chip: {
      borderColor: theme.colors.success.success100
    },
    selected: {
      backgroundColor: theme.colors.success.success100
    }
  },
  warning: {
    chip: {
      borderColor: theme.colors.warning.warning100
    },
    selected: {
      backgroundColor: theme.colors.warning.warning100
    }
  },
  danger: {
    chip: {
      borderColor: theme.colors.alert.alert100
    },
    selected: {
      backgroundColor: theme.colors.alert.alert100
    }
  }
});

const StatusChip: React.FC<IProps & WithStylesProps> = ({
  styleSheet,
  type,
  ...props
}) => {
  const styleSheet2 = extendStyles(
    theme => ({
      ...colorMap(theme)[type]
    }),
    theme => (styleSheet ? styleSheet(theme) : {})
  );

  const AlteredBaseChip = BaseChip.extendStyles(styleSheet2);

  return <AlteredBaseChip {...props} />;
};

export default StatusChip;
