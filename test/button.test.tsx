import { render, screen } from "@testing-library/react"; 
import React from "react";
import { Button } from "../src/index";

describe ('Button', () => {
    describe('should be rendered correctly', () => {
        test('default', () => {
            render(<Button>Click me</Button>);
            const button = screen.getByText('Click me');
            expect(button.classList.contains('button__type_primary')).toBeTruthy();
        });
        // test('success', () => {});
        // test('disabled', () => {});

        // test('should be clickable', () => {});
        // test('should not be clickable', () => {});
    })
})