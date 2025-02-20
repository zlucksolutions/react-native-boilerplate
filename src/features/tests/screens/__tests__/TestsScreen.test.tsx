import React from 'react';
import { Text } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import { TestsScreen } from '../TestsScreen';

// Mock the theme provider
jest.mock('@shared/theme/ThemeProvider', () => ({
  useTheme: () => ({
    theme: {
      colors: {
        background: '#FFFFFF',
        text: '#000000',
        primary: '#007AFF',
        card: '#F2F2F2',
        border: '#E1E1E1',
      },
    },
  }),
}));

// Mock Alert
jest.mock('react-native/Libraries/Alert/Alert', () => ({
  alert: jest.fn(),
}));

describe('TestsScreen', () => {
  describe('Value Matching Test', () => {
    it('updates expected and actual values', () => {
      const { getByTestId } = render(<TestsScreen />);
      const expectedInput = getByTestId('expected-value-input');
      const actualInput = getByTestId('actual-value-input');

      fireEvent.changeText(expectedInput, '10');
      fireEvent.changeText(actualInput, '10');

      expect(expectedInput.props.value).toBe('10');
      expect(actualInput.props.value).toBe('10');
    });
  });

  describe('Password Validation Test', () => {
    it('handles password input', () => {
      const { getByTestId } = render(<TestsScreen />);
      const passwordInput = getByTestId('password-input');

      // Test invalid password
      fireEvent.changeText(passwordInput, 'short');
      expect(passwordInput.props.value).toBe('short');

      // Test valid password
      fireEvent.changeText(passwordInput, 'ValidPassword123');
      expect(passwordInput.props.value).toBe('ValidPassword123');
    });
  });

  describe('Todo List Test', () => {
    it('adds and manages todos', () => {
      const { getByTestId, queryByTestId } = render(<TestsScreen />);
      const input = getByTestId('todo-input');
      const addButton = getByTestId('add-todo-button');

      // Initially empty
      expect(queryByTestId('todo-item-0')).toBeNull();

      // Add a todo
      fireEvent.changeText(input, 'Test Todo');
      fireEvent.press(addButton);

      // Verify todo was added
      const todoItem = getByTestId('todo-item-0');
      expect(todoItem).toBeTruthy();
    });
  });

  describe('Test Runner', () => {
    it('shows success alert when all tests pass', () => {
      const { getByTestId } = render(<TestsScreen />);
      const Alert = require('react-native/Libraries/Alert/Alert');

      // Set up passing conditions
      const expectedInput = getByTestId('expected-value-input');
      const actualInput = getByTestId('actual-value-input');
      const passwordInput = getByTestId('password-input');
      const todoInput = getByTestId('todo-input');
      const addTodoButton = getByTestId('add-todo-button');

      // Make values match
      fireEvent.changeText(expectedInput, '5');
      fireEvent.changeText(actualInput, '5');

      // Add valid password
      fireEvent.changeText(passwordInput, 'ValidPassword123');

      // Add a todo
      fireEvent.changeText(todoInput, 'Test Todo');
      fireEvent.press(addTodoButton);

      // Run tests
      const runButton = getByTestId('run-tests-button');
      fireEvent.press(runButton);

      // Verify success alert was shown
      expect(Alert.alert).toHaveBeenCalledWith(
        '✅ All Tests Passed!',
        'Great job fixing the tests!',
      );
    });

    it('shows failure alert when tests fail', () => {
      const { getByTestId } = render(<TestsScreen />);
      const Alert = require('react-native/Libraries/Alert/Alert');

      // Run tests without fixing anything
      const runButton = getByTestId('run-tests-button');
      fireEvent.press(runButton);

      // Verify failure alert was shown
      expect(Alert.alert).toHaveBeenCalledWith(
        '❌ Failed Tests',
        expect.stringContaining('Counter should match expected value'),
      );
    });
  });
}); 