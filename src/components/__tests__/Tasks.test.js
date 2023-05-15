import { render, screen } from '@testing-library/react';
import Tasks from '../Tasks'

test('should render tasks component', () => {
    const tasks = [{
      id: 1,
      issueType: 'Task',
      name: 'Add banner image',
      description: 'test',
      deadline: '2023-05-15',
      component: "React App",
    }];
    render(<Tasks tasks={tasks}/>);
    const taskElement = screen.getByTestId('tasks-list');
    expect(taskElement).toBeInTheDocument();
    expect(taskElement).toHaveTextContent('Add banner image');
    expect(taskElement).toContainHTML('</a>');
  });