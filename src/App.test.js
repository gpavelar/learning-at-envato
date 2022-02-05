import { render, screen, within } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // Generating snapshop from DOMTree
  const tree = render(<App />);
  const linkElement = screen.getByText(/Pastel food/i);
  expect(linkElement).toBeInTheDocument();
  expect(tree).toMatchSnapshot();
});

test('renders second food link', () => {
  const tree = render(<App />);
  const linkElement_two = screen.getByText(/Feijoada food/i);
  expect(linkElement_two).toBeInTheDocument();

  expect(tree).toMatchSnapshot();
});

test('renders menu foods', () => {
  const tree = render(<App />);
  const foods = screen.getByRole('list', { name: /foods/i });

  // Should have 2 elements
  // Food will be a element
  const menuFoods = within(foods).getAllByRole('listitem');
  expect(menuFoods.length).toBe(2);

  expect(tree).toMatchSnapshot();
  //   const messages = document.getElementById('messages')
  // const helloMessage = within(messages).getByText('hello')
  // Check how many items are in the list
});
