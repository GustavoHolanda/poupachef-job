import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import Login from './login';
import { store } from './../../store/store'


describe("Login component test", () => {

    test("Should be an input with Username/Email placeholder", () => {
        render(
            <Provider store={store}>
                <Login />
            </Provider>
        );
        const input = screen.getByPlaceholderText('Username/Email');
        expect(input).toBeInTheDocument();
    })
    test("Should be an input with Password placeholder", () => {
        render(
            <Provider store={store}>
                <Login />
            </Provider>
        );
        const input = screen.getByPlaceholderText('Password');
        expect(input).toBeInTheDocument();
    })
    test("Should be a button Sign in", () => {
        render(
            <Provider store={store}>
                <Login />
            </Provider>)
        const button = screen.getByRole('button', { name: /Sign in/i });
        expect(button).toBeInTheDocument();
    })
    test("There is an object with Welcome to... and test classes", () => {
        render(
            <Provider store={store}>
                <Login />
            </Provider>
        );
        const object = screen.getByText('Welcome to the');
        expect(object).toBeInTheDocument();
        expect(object).not.toHaveClass('');
    })
    test("Shouldn't be a element with logging in... text", () => {
        render(
            <Provider store={store}>
                <Login />
            </Provider>
        );
        const button = screen.queryByText('Logging in...');
        expect(button).not.toBeInTheDocument();
    })
    test("Check that all form elements are shown", () => {
        render(
            <Provider store={store}>
                <Login />
            </Provider>
        );

        const button = screen.getByRole('button', { name: /Sign in/i });
        const username = screen.getByPlaceholderText('Username/Email');
        const password = screen.getByPlaceholderText('Password');

        expect(button).toBeInTheDocument();
        expect(password).toBeInTheDocument();
        expect(username).toBeInTheDocument();
    })
})

