import { render, renderHook } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';
import Profile from './Components/Profile';
import Search from './Components/SearchBar';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


test('check render', () => {
  render(<App />);
  render(<Search />);
  render(<Profile />);
});

const makeSut = () => {
  return renderHook(() => Search());
};

describe("Search()", () => {
  test("Should return undefined on initial state", () => {
    const { result } = makeSut();
    expect(result.current.state).toBe(undefined);
  });
});