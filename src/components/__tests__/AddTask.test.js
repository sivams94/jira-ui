import { getByText, render, screen, fireEvent } from '@testing-library/react';
import {within} from '@testing-library/dom'
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import AddTask from '../AddTask'

let container = null;

describe("task from", () => {
    it('render 4 input components', () => {
        const {getByTestId} = render(<AddTask/>);

        expect(getByTestId(/issue-type/i)).toBeInTheDocument();
        expect(getByTestId(/name/i)).toBeInTheDocument();
        expect(getByTestId(/description/i)).toBeInTheDocument();
        expect(getByTestId(/deadline/i)).toBeInTheDocument();
        expect(getByTestId("submit")).toBeInTheDocument();
    });

    test("finding title", () => {
        const onSubmit = jest.fn().mockImplementation((e) => {
            e.persist();
        });
        const { container } = render(<AddTask onSubmit={onSubmit} />);

        fireEvent.submit(container.querySelector('form'));

        const one = screen.getByTestId('form-error');
        expect(one).toHaveTextContent('Please fill all the fields');
    });
});