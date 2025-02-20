import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {useTheme} from '@shared/theme/ThemeProvider';
import {StyledText} from '@shared/components/StyledText';

type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

type TestCase = {
  description: string;
  test: () => boolean;
  errorMessage: string;
  fixHint: string;
};

export const TestsScreen: React.FC = () => {
  const {theme} = useTheme();
  const [inputText, setInputText] = React.useState('');
  const [todos, setTodos] = React.useState<TodoItem[]>([]);
  const [expectedValue, setExpectedValue] = React.useState(5);
  const [actualValue, setActualValue] = React.useState(0);
  const [passwordInput, setPasswordInput] = React.useState('');

  // Interactive test cases
  const testCases: TestCase[] = [
    {
      description: 'Counter should match expected value',
      test: () => actualValue === expectedValue,
      errorMessage: `❌ Expected ${expectedValue}, but got ${actualValue}`,
      fixHint: '💡 Update the actual value to match the expected value',
    },
    {
      description: 'Password should meet requirements',
      test: () => passwordInput.length >= 8 && /[A-Z]/.test(passwordInput),
      errorMessage: '❌ Password must be 8+ chars with at least 1 uppercase',
      fixHint: '💡 Try adding an uppercase letter or making it longer',
    },
    {
      description: 'Todo list should not be empty',
      test: () => todos.length > 0,
      errorMessage: '❌ Todo list is empty',
      fixHint: '💡 Add at least one todo item',
    },
  ];

  const runTests = () => {
    const results = testCases.map(testCase => ({
      ...testCase,
      passed: testCase.test(),
    }));

    const failedTests = results.filter(r => !r.passed);

    if (failedTests.length === 0) {
      Alert.alert('✅ All Tests Passed!', 'Great job fixing the tests!');
    } else {
      Alert.alert(
        '❌ Failed Tests',
        failedTests
          .map(
            test =>
              `${test.description}\n${test.errorMessage}\n${test.fixHint}`,
          )
          .join('\n\n'),
      );
    }
  };

  const addTodo = () => {
    if (inputText.trim()) {
      setTodos([
        ...todos,
        {id: Date.now(), text: inputText.trim(), completed: false},
      ]);
      setInputText('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo,
      ),
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: theme.colors.background,
    },
    section: {
      marginBottom: 24,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.colors.text,
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.text,
      marginTop: 16,
      marginBottom: 8,
    },
    text: {
      fontSize: 16,
      color: theme.colors.text,
      marginBottom: 8,
    },
    codeBlock: {
      backgroundColor: theme.colors.card,
      padding: 16,
      borderRadius: 8,
      marginVertical: 8,
    },
    codeText: {
      fontFamily: 'monospace',
      color: theme.colors.text,
    },
    button: {
      backgroundColor: theme.colors.primary,
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
      marginVertical: 8,
    },
    buttonText: {
      color: theme.colors.background,
      fontSize: 16,
      fontWeight: 'bold',
    },
    counter: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.colors.primary,
      textAlign: 'center',
      marginVertical: 8,
    },
    input: {
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: 8,
      padding: 12,
      color: theme.colors.text,
      marginBottom: 8,
    },
    todoItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 12,
      backgroundColor: theme.colors.card,
      borderRadius: 8,
      marginBottom: 8,
    },
    todoText: {
      flex: 1,
      fontSize: 16,
      color: theme.colors.text,
      textDecorationLine: 'none',
    },
    todoTextCompleted: {
      textDecorationLine: 'line-through',
      color: theme.colors.text + '80',
    },
    exampleContainer: {
      backgroundColor: theme.colors.card,
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
    },
    testSection: {
      backgroundColor: theme.colors.card,
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
    },
    testTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.text,
      marginBottom: 8,
    },
    testDescription: {
      fontSize: 16,
      color: theme.colors.text,
      marginBottom: 8,
    },
    valueContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    valueLabel: {
      fontSize: 16,
      color: theme.colors.text,
      flex: 1,
    },
    valueInput: {
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: 8,
      padding: 8,
      width: 100,
      color: theme.colors.text,
      textAlign: 'center',
    },
    runButton: {
      backgroundColor: theme.colors.primary,
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 16,
    },
    runButtonText: {
      color: theme.colors.background,
      fontSize: 16,
      fontWeight: 'bold',
    },
    textSpacing: {marginVertical: 10},
    textTopSpace: {marginTop: 20},
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <StyledText variant="h3" style={styles.textSpacing}>🧪 Interactive Testing Playground</StyledText>
        <StyledText variant="body1">
          Welcome to our interactive testing guide! Try to fix the failing tests
          by adjusting the values below. Run the tests to check your progress!
        </StyledText>
      </View>

      <View style={styles.section}>
        <StyledText
          variant="h4"
          style={styles.textSpacing}>
          🎯 Test Case 1: Value Matching
        </StyledText>
        <View style={styles.testSection}>
          <StyledText variant="body1">
            Make the actual value match the expected value:
          </StyledText>
          <View style={styles.valueContainer}>
            <StyledText variant="body1">Expected Value:</StyledText>
            <TextInput
              style={styles.valueInput}
              value={expectedValue.toString()}
              onChangeText={text => setExpectedValue(Number(text) || 0)}
              keyboardType="numeric"
              testID="expected-value-input"
            />
          </View>
          <View style={styles.valueContainer}>
            <StyledText variant="body1">Actual Value:</StyledText>
            <TextInput
              style={styles.valueInput}
              value={actualValue.toString()}
              onChangeText={text => setActualValue(Number(text) || 0)}
              keyboardType="numeric"
              testID="actual-value-input"
            />
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <StyledText variant="h4" style={styles.textSpacing}>
          🔐 Test Case 2: Password Validation
        </StyledText>
        <View style={styles.testSection}>
          <StyledText variant="body1">
            Enter a password that meets the requirements:
            {'\n'}- At least 8 characters
            {'\n'}- Contains at least 1 uppercase letter
          </StyledText>
          <TextInput
            style={styles.input}
            value={passwordInput}
            onChangeText={setPasswordInput}
            placeholder="Enter password"
            placeholderTextColor={theme.colors.text + '80'}
            secureTextEntry
            testID="password-input"
          />
        </View>
      </View>

      <View style={styles.section}>
        <StyledText variant="h4" style={styles.textSpacing}>
          📝 Test Case 3: Todo List
        </StyledText>
        <View style={styles.testSection}>
          <StyledText variant="body1">
            Add at least one todo item to pass this test:
          </StyledText>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Enter a todo item"
            placeholderTextColor={theme.colors.text + '80'}
            testID="todo-input"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={addTodo}
            testID="add-todo-button">
            <StyledText variant="button" color={theme.colors.background}>
              Add Todo
            </StyledText>
          </TouchableOpacity>
          {todos.map((todo, index) => (
            <TouchableOpacity
              key={todo.id}
              style={styles.todoItem}
              onPress={() => toggleTodo(todo.id)}
              testID={`todo-item-${index}`}>
              <StyledText
                variant="body1"
                style={[
                  styles.todoText,
                  todo.completed && styles.todoTextCompleted,
                ]}>
                {todo.text}
              </StyledText>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={styles.runButton}
        onPress={runTests}
        testID="run-tests-button">
        <StyledText variant="button" color={theme.colors.background}>
          🚀 Run Tests
        </StyledText>
      </TouchableOpacity>

      <View style={styles.section}>
        <StyledText variant="h4" style={styles.textTopSpace}>
          📚 Test Code Example
        </StyledText>
        <View style={styles.codeBlock}>
          <StyledText variant="caption" style={styles.codeText}>
            {`describe('Interactive Tests', () => {
  test('values should match', () => {
    expect(actualValue).toBe(expectedValue);
  });

  test('password should be valid', () => {
    expect(password.length).toBeGreaterThanOrEqual(8);
    expect(password).toMatch(/[A-Z]/);
  });

  test('todo list should not be empty', () => {
    expect(todos.length).toBeGreaterThan(0);
  });
});`}
          </StyledText>
        </View>
      </View>
    </ScrollView>
  );
};
