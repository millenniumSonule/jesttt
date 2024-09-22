import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe('App component', ()=> {

  test('initial count is zero', ()=> {
    render(<App/>);
    const count = screen.getByText('0');
    expect(count).toBeInTheDocument();
  });

  test('increment count when button is clicked ', ()=> {
    render(<App/>);
    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);
    const count = screen.getByText('1');
  })  

  test('decrement count when button is clicked ', ()=>{
    render(<App/>);
    const count = screen.getByText('Decrement');
    fireEvent.click(count);
    const updatedCount = screen.getByText('-1'); 
    expect(updatedCount).toBeInTheDocument('-1')
  })

  test('reset count when button is clicked ', ()=>{
    render(<App/>);
    const count = screen.getByText('Reset');
    fireEvent.click(count);
    const updatedCount = screen.getByText('0');
    expect(updatedCount).toBeInTheDocument('0')
  })

})