import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  let button = screen.getByRole("button");
  expect(button).toHaveTextContent("Login");

  let usernameField = screen.getByLabelText("username");
  expect(usernameField).toHaveAttribute("placeholder","indtast brugernavn");
});

test('has login button', ()=>{
      render(<App />);
    }

);
