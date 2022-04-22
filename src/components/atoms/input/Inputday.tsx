import React, { FC, Fragment, ReactNode, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Box, Input } from "@chakra-ui/react";
import { Calendar } from "./Calendar";

let total: string = "";

type Props = {
  onClickBack?: string;
  children?: ReactNode;
};

export const Inputday: FC<Props> = (props) => {
  // 表示フラグ
  const [showFlag, setshowFlag] = useState(false);
  const onClickSwitchShowFlag = () => {
    setshowFlag(!showFlag);
  };

  const onClickBack = (start: string, end: string) => {
    if (start) {
      total = start + "~" + end;
      console.log(total);
    }
    setshowFlag(!showFlag);
  };
  return (
    <Fragment>
      <Box bg="white" w="sm" borderRadius="md" shadow="md">
        <Input
          placeholder="日付を入力"
          onClick={onClickSwitchShowFlag}
          value={total}
        />
        {showFlag && <Calendar onClickBack={onClickBack} />}
      </Box>
    </Fragment>
  );
};
