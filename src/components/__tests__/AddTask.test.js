import { getByText, render, screen } from '@testing-library/react';
import AddTask from '../AddTask'

test('should render input', () => {
    const { getByTestId } = render(<AddTask />)

    const issueType  = getByTestId('issue-type')
    expect(issueType).toBeInTheDocument()

    const nameField  = getByTestId('name')
    expect(nameField).toBeInTheDocument()

    const descriptionField  = getByTestId('description')
    expect(descriptionField).toBeInTheDocument()

    const deadlineField  = getByTestId('deadline')
    expect(deadlineField).toBeInTheDocument()
});