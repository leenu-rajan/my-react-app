import { describe, expect, test } from "vitest";
import App from "./App";
import { fireEvent, render, screen } from '@testing-library/react'


describe('Tests for App class', () => {

    test('rendering of the App class', () => {

        render(<App />);

        const modalOpenButton = screen.getByRole('button', { name: /open modal/i })
        //  const modalOpenButton = screen.getByRole('button', {name: 'open modal'})
        expect(modalOpenButton).toBeInTheDocument();
    })


    test('rendering of the App class', () => {

        render(<App />);

        const modalOpenButton = screen.getByRole('button', { name: /open modal/i })
        //  const modalOpenButton = screen.getByRole('button', {name: 'open modal'})
        expect(modalOpenButton).toBeInTheDocument();
        fireEvent.click(modalOpenButton);

        expect(screen.getByText("User Details")).toBeInTheDocument();
        expect(screen.getByText("The details about the user will be shown below:")).toBeInTheDocument();

        const modalCloseButton = screen.getByRole('button', { name: 'Close' })
        expect(modalCloseButton).toBeInTheDocument();

        fireEvent.click(modalCloseButton);

        // After closing, the modal title should no longer be present
        expect(screen.queryByText("User Details")).toBeNull();

    })
})