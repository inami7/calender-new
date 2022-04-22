import { FC, ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  isFullWidth?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  onClick: () => void;
};

export const Button1: FC<Props> = (props) => {
  const {
    children,
    isFullWidth = false,
    disabled = false,
    isLoading = false,
    onClick
  } = props;

  return (
    <Button
      color="gray"
      borderRadius="10px"
      isFullWidth={isFullWidth}
      backgroundColor=""
      disabled={disabled || isLoading}
      isLoading={isLoading}
      onClick={onClick}
      width="auto"
      fontWeight="1000"
      border="none"
    >
      {children}
    </Button>
  );
};
