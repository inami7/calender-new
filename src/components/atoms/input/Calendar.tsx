import ja from "date-fns/esm/locale/ja";
import moment from "moment";
import { FC, Fragment, ReactNode, useState } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import getMonth from "date-fns/getMonth";
import getYear from "date-fns/getYear";
import _ from "lodash";

import { Button1 } from "../button/Button1";
import { PrimaryButton } from "../button/PrimaryButton";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Stack,
  Container
} from "@chakra-ui/react";

type Props = {
  onClickBack: string;
};
registerLocale("ja", ja);
const years = _.range(2000, getYear(new Date()) + 1, 1);
const months = Array.from(Array(12).keys());

export const Calendar: FC<Props> = (props: Props) => {
  const { onClickBack } = props;
  const parseAsMoment = (dateTimeStr: string) => {
    return moment.utc(dateTimeStr, "YYYY-MM-DDTHH:mm:00Z", "ja").utcOffset(9);
  };
  const toUtcIso8601str = (momentInstance: any) => {
    return momentInstance.clone().utc().format("YYYY-MM-DDTHH:mm:00Z");
  };
  const [startDate, setStartDate] = useState(toUtcIso8601str(moment()));
  const [endDate, setEndDate] = useState(toUtcIso8601str(moment()));
  const handleChangeStart = (selectedDate: Date | null) => {
    setStartDate(toUtcIso8601str(moment(selectedDate)));
  };
  const handleChangeEnd = (selectedDate: Date | null) => {
    setEndDate(toUtcIso8601str(moment(selectedDate)));
  };

  return (
    <Fragment>
      <div className="input-area">
        <br />
        {
          <>
            <Box bg="blue" w="xs" p={4} borderRadius="md" shadow="md">
              <Heading as="h1" size="lg" textAlign="center">
                開始日
              </Heading>
              <Divider my={1} />
              <Stack spacing={6} py={1} px={1} textAlign="center">
                <ReactDatePicker
                  inline
                  locale="ja"
                  selected={moment(startDate).toDate()}
                  selectsStart
                  startDate={moment(startDate).toDate()}
                  endDate={moment(endDate).toDate()}
                  onChange={handleChangeStart}
                  customInput={
                    <button>
                      {startDate &&
                        parseAsMoment(startDate).format("YYYY/MM/DD")}
                    </button>
                  }
                  renderCustomHeader={({
                    date,
                    changeYear,
                    changeMonth,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled
                  }) => (
                    <div>
                      <Button1
                        onClick={decreaseMonth}
                        disabled={prevMonthButtonDisabled}
                      >
                        {`＜`}
                      </Button1>
                      <select
                        value={getYear(date)}
                        onChange={({ target: { value } }) => changeYear(value)}
                      >
                        {years.map((option) => (
                          <option key={option} value={option}>
                            {option}年
                          </option>
                        ))}
                      </select>
                      <select
                        value={getMonth(date)}
                        onChange={({ target: { value } }) => changeMonth(value)}
                      >
                        {months.map((option) => (
                          <option key={option} value={option}>
                            {option + 1}月
                          </option>
                        ))}
                      </select>
                      <Button1
                        onClick={increaseMonth}
                        disabled={nextMonthButtonDisabled}
                      >
                        {`＞`}
                      </Button1>
                    </div>
                  )}
                />
              </Stack>
            </Box>
            <Box bg="red" p={4} w="xs" borderRadius="md" shadow="md">
              <Heading as="h1" size="lg" textAlign="center">
                終了日
              </Heading>
              <Divider my={1} />
              <Stack spacing={6} py={1} px={1} textAlign="center">
                <ReactDatePicker
                  inline
                  locale="ja"
                  selected={moment(endDate).toDate()}
                  selectsEnd
                  startDate={moment(startDate).toDate()}
                  endDate={moment(endDate).toDate()}
                  onChange={handleChangeEnd}
                  minDate={moment(startDate).toDate()}
                  customInput={
                    <button>
                      {endDate && parseAsMoment(endDate).format("YYYY/MM/DD")}
                    </button>
                  }
                  renderCustomHeader={({
                    date,
                    changeYear,
                    changeMonth,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled
                  }) => (
                    <div>
                      <Button1
                        onClick={decreaseMonth}
                        disabled={prevMonthButtonDisabled}
                      >
                        {`＜`}
                      </Button1>
                      <select
                        value={getYear(date)}
                        onChange={({ target: { value } }) => changeYear(value)}
                      >
                        {years.map((option) => (
                          <option key={option} value={option}>
                            {option}年
                          </option>
                        ))}
                      </select>
                      <select
                        value={getMonth(date)}
                        onChange={({ target: { value } }) => changeMonth(value)}
                      >
                        {months.map((option) => (
                          <option key={option} value={option}>
                            {option + 1}月
                          </option>
                        ))}
                      </select>
                      <Button1
                        onClick={increaseMonth}
                        disabled={nextMonthButtonDisabled}
                      >
                        {`＞`}
                      </Button1>
                    </div>
                  )}
                />
              </Stack>
            </Box>
            <br />
            <Box p={1} w="xs" py={1} borderRadius="md" shadow="md">
              <PrimaryButton
                onClick={() =>
                  onClickBack(
                    parseAsMoment(startDate).format("YYYY/MM/DD"),
                    parseAsMoment(endDate).format("YYYY/MM/DD")
                  )
                }
              >
                確定
              </PrimaryButton>

              <PrimaryButton onClick={() => onClickBack()}>
                キャンセル
              </PrimaryButton>
            </Box>
          </>
        }
      </div>
      <br />
    </Fragment>
  );
};
