import { fireEvent, render, screen } from '@testing-library/react'

import Modal from "./Modal";
import { describe, test, vi, expect } from 'vitest';

test('environment has document', () => {
    expect(typeof document).toBe('object');
    expect(typeof window).toBe('object');
});

describe('Tests for Modal component', () => {
    const titleText = "User Details";
    const childText = "The details about the user will be shown below:";

    test('renders nothing when isOpen = false', () => {

        const onClose = vi.fn();

        render(<Modal
            isOpen={false}
            title={titleText}
            children={<p> {childText}</p>}
            onClose={onClose}
            size="small"
        />);
        expect(screen.queryByText(titleText)).toBeNull();
        expect(screen.queryByText(childText)).toBeNull();

    })

    test('renders title, childText, clode Button isOpen = true', () => {
        const onClose = vi.fn();
        render(<Modal
            isOpen={true}
            title={titleText}
            children={<p> {childText}</p>}
            onClose={onClose}
            size="small"
        />);

        expect(screen.queryByText(titleText)).toBeInTheDocument();
        expect(screen.queryByText(childText)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();

    })

    test('calls onClose 1 times when close button is clicked', () => {
        const onClose = vi.fn();
        render(<Modal
            isOpen={true}
            title={titleText}
            children={<p> {childText}</p>}
            onClose={onClose}
            size="small"
        />)

        const closeButton = screen.getByRole('button', { name: /close/i })
        fireEvent.click(closeButton);
        expect(onClose).toHaveBeenCalledTimes(1)

    })

    test("applies correct size class for the modal based on the size prop", () => {
        const onClose = vi.fn();
        const { container } = render(<Modal
            isOpen={true}
            title={titleText}
            children={<p> {childText}</p>}
            onClose={onClose}
            size="large"
        />)

        const contentDiv = container.querySelector('.modal-content')
        expect(contentDiv).toHaveClass('modal-content-large')

    })
})