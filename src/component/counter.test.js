import { render, screen, fireEvent } from "@testing-library/react";
import Counter from './counter';  

describe('App component', ()=> {

  test('initial count is zero', ()=> {
    render(<Counter/>);
    const count = screen.getByText('0');
    expect(count).toBeInTheDocument();
  });

  test('increment count when button is clicked ', ()=> {
    render(<Counter/>);
    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);
    const count = screen.getByText('1');
  })  

  test('decrement count when button is clicked ', ()=>{
    render(<Counter/>);
    const count = screen.getByText('Decrement');
    fireEvent.click(count);
    const updatedCount = screen.getByText('-1'); 
    expect(updatedCount).toBeInTheDocument('-1')
  })

  test('reset count when button is clicked ', ()=>{
    render(<Counter/>);
    const resetButton = screen.getByText('Restart');
    fireEvent.click(resetButton);
    let count = screen.getByText('0');
    expect(count).toBeInTheDocument();
  })

})