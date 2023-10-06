import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import App from '../App';
import { Provider } from "react-redux";
import { store } from '../store';
import React from 'react';

test('demo', () => {
  expect(true).toBe(true)
})

test("Renders the home page", () => {
  console.log(React?.version)
  render(<div><Provider store={store}><App /></Provider></div>)
  expect(true).toBeTruthy()

})