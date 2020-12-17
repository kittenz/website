import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { screen } from '@testing-library/react';

import App from "../App";

let container: any = null;

// Create a DOM element as a render target
beforeEach(() => {
	container = document.createElement("div");
	document.body.appendChild(container);
});

// Cleanup
afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

// Test the router rendering
it("renders the router", () => {
	act(() => {
		render(<App />, container);
	});
	expect(screen.getByTestId("app-router")).toBeInTheDocument();
});
