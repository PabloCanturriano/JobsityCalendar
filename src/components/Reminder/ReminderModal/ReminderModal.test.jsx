import ReminderModal from './ReminderModal'
import { render, fireEvent, screen } from "@testing-library/react";
import {Provider} from "react-redux";
import reducers from "../../../reducers";
import getStore from "../../../store/getStore";
import userEvent from "@testing-library/user-event";

const emptyReminder = {
    title: '',
    city: '',
    date: '',
    time: ''
}

const store = getStore(reducers);

const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
);

describe("Reminder Modal", () => {
    it("should render the basic fields", () => {
        render(
            <Wrapper>
                <ReminderModal reminderData={emptyReminder} />
            </Wrapper>
        );

        expect(screen.getByTestId("title-input")).toBeInTheDocument();
        expect(screen.getByTestId("city-combo")).toBeInTheDocument();
        expect(screen.getByTestId("date-input")).toBeInTheDocument();
        expect(screen.getByTestId("time-input")).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /Save/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /Cancel/i })
        ).toBeInTheDocument();

    });
});

it('should add a reminder with title max length 30', () => {
    render(
        <Wrapper>
            <ReminderModal reminderData={emptyReminder} />
        </Wrapper>
    );

    userEvent.type(screen.getByTestId("title-input"), '1234567890123456789012345678901234512312414124123');
    expect(screen.getByTestId("title-input")).toHaveValue('123456789012345678901234567890');

    fireEvent.change(screen.getByTestId("date-input"), {target: {value: '2020-05-24'}})
    expect(screen.getByTestId("date-input")).toHaveValue('2020-05-24');

    fireEvent.change(screen.getByTestId("time-input"), {target: {value: '08:00:01'}})
    expect(screen.getByTestId("time-input")).toHaveValue('08:00:01');

    expect(store.getState().reminders.length).toBe(5)

    fireEvent.click(screen.getByRole("button", { name: /Save/i }));

    expect(store.getState().reminders.length).toBe(6)
});
