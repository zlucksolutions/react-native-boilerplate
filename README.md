# ZluckLabs React Native Boilerplate

A modern, feature-first React Native boilerplate project designed to kickstart your mobile app development. This project follows best practices and includes a robust architecture that makes it easy to scale and maintain your application, perfect for teams working on large-scale projects.

<img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjBsanU1Z3hsNXgzZGI3cXBjNzZlc2R5MWlpMXhqOWJxZnl0NW02NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VLO8UdTcTpRJPYChrl/giphy.gif" alt="Alt Text" width="250" />

## Table of Contents
- [ZluckLabs React Native Boilerplate](#zlucklabs-react-native-boilerplate)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Project Structure](#project-structure)
  - [Feature-First Architecture Benefits](#feature-first-architecture-benefits)
  - [Core Utilities and Helpers](#core-utilities-and-helpers)
  - [Theme System](#theme-system)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
    - [iOS](#ios)
    - [Android](#android)
  - [Features](#features)
  - [Testing](#testing)
  - [Development Guidelines](#development-guidelines)
    - [Code Style](#code-style)
    - [Git Workflow](#git-workflow)
  - [Environment Configuration](#environment-configuration)
  - [Troubleshooting](#troubleshooting)
  - [Contributing](#contributing)
  - [License](#license)

## Overview

ZluckLabs React Native Boilerplate is a carefully crafted template that implements a feature-first architecture, making it perfect for building scalable mobile applications. It comes pre-configured with essential tools and patterns to help you focus on building features rather than setting up infrastructure.

## Project Structure

The project follows a feature-first architecture where each feature is self-contained:

```
src/
├── features/         # Feature modules
│   ├── auth/        # Authentication feature
│   │   ├── components/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── types/
│   │   └── tests/
│   └── ...
├── components/      # Shared components
├── shared/         # Shared utilities and helpers
│   ├── utils/      # Utility functions
│   ├── helpers/    # Helper functions
│   └── hooks/      # Custom hooks
├── theme/          # Theme configuration
│   ├── colors.ts
│   ├── typography.ts
│   ├── spacing.ts
│   └── index.ts
├── navigation/     # Navigation configuration
└── types/         # Global TypeScript definitions
```

## Feature-First Architecture Benefits

The feature-first pattern is especially beneficial for team collaboration:

1. **Team Autonomy**
   - Teams can work on different features independently
   - Reduced code conflicts and merge issues
   - Clear ownership of feature modules

2. **Code Organization**
   - Each feature is self-contained with its own components, services, and tests
   - Easier to understand and maintain code
   - Natural separation of concerns

3. **Scalability**
   - Easy to add new features without affecting existing ones
   - Simple to remove or modify features
   - Better code reusability within feature boundaries

4. **Testing and Documentation**
   - Feature-specific tests are co-located with the feature
   - Easier to maintain test coverage
   - Documentation can be feature-specific

## Core Utilities and Helpers

The project includes several utility and helper functions to streamline development:

1. **Utils (`src/shared/utils/`)**
   - `api.ts`: API request handling and interceptors
   - `storage.ts`: AsyncStorage wrapper functions
   - `validation.ts`: Form and data validation
   - `formatting.ts`: Date, currency, and text formatting

2. **Helpers (`src/shared/helpers/`)**
   - `permissions.ts`: Permission handling
   - `navigation.ts`: Navigation helpers
   - `error.ts`: Error handling and logging
   - `analytics.ts`: Analytics tracking

3. **Hooks (`src/shared/hooks/`)**
   - `useForm.ts`: Form handling
   - `useAuth.ts`: Authentication state
   - `useTheme.ts`: Theme context
   - `useNetwork.ts`: Network status

## Theme System

The theme system (`src/theme/`) provides consistent styling across the app:

1. **Colors**
   - Brand colors
   - Semantic colors
   - Gradient definitions
   - Dark/Light mode variants

2. **Typography**
   - Font families
   - Font sizes
   - Line heights
   - Font weights

3. **Spacing**
   - Consistent spacing scale
   - Layout constants
   - Responsive sizing

4. **Usage**
   ```typescript
   import { useTheme } from '@/theme';
   
   const Component = () => {
     const { colors, spacing } = useTheme();
     return (
       <View style={{ 
         backgroundColor: colors.background,
         padding: spacing.medium 
       }} />
     );
   };
   ```

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or newer)
- npm or yarn
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)
- CocoaPods (for iOS dependencies)

## Installation

1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   cd RNBoilerplate
   ```

2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

3. Install iOS dependencies:
   ```bash
   cd ios && pod install && cd ..
   ```

## Running the App

### iOS
```bash
# Start the Metro bundler
yarn start

# Run on iOS simulator
yarn ios

# Clean iOS build
yarn ios-clean
```

### Android
```bash
# Start the Metro bundler
yarn start

# Run on Android device/emulator
yarn android

# Build release APK
yarn apk

# Build release AAB
yarn aab

# Clean Android build
yarn apk-clean
```

## Features

- 🏗 **Feature-First Architecture**: Organized by feature for better scalability
- 🧭 **React Navigation**: Pre-configured navigation with type safety
- 🔄 **State Management**: Redux Toolkit + Redux Saga setup
- 🌐 **API Integration**: Axios setup with interceptors
- 🎨 **UI Components**: Essential shared components
- 🌍 **Internationalization**: i18next integration
- 💾 **Storage**: AsyncStorage configuration
- ✨ **Splash Screen**: Custom splash screen setup
- 📱 **Device Info**: Access to device-specific information
- 🎯 **Type Safety**: Full TypeScript support
- 🧪 **Interactive Testing Guide**: Built-in educational testing examples
  - Live counter component with tests
  - Todo list with form handling tests
  - Interactive examples with code snippets
  - Step-by-step testing tutorials

## Testing

This boilerplate includes a dedicated "Tests" tab that serves as an interactive guide to testing React Native applications. The testing examples demonstrate:

1. **Basic Component Testing**
   - Rendering components
   - Checking initial states
   - Verifying component updates

2. **User Interaction Testing**
   - Button presses
   - Form submissions
   - List item interactions

3. **Form Handling**
   - Input validation
   - Form submission
   - Input clearing

4. **State Management**
   - Component state updates
   - Complex state interactions
   - State persistence

To run the tests:

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test --watch

# Run tests with coverage
yarn test --coverage

# Run tests for a specific file
yarn test path/to/test/file.test.tsx
```

The test files follow these best practices:
- Co-location with components
- Descriptive test names
- Comprehensive assertions
- Real-world examples

For more information about testing, check out the "Tests" tab in the app, which provides interactive examples and detailed explanations.

## Development Guidelines

### Code Style
- Follow the ESLint configuration
- Use TypeScript for type safety
- Follow the feature-first architecture
- Write tests for new features

### Git Workflow
1. Create a feature branch from main
2. Make your changes
3. Write/update tests
4. Submit a pull request

## Environment Configuration

1. Create a `.env` file in the root directory
2. Copy `.env.example` to `.env`
3. Update the variables as needed

**Note**: Never commit sensitive information to version control.

## Troubleshooting

Common issues and solutions:

1. **Build fails**
   - Clean the build: `yarn ios-clean` or `yarn apk-clean`
   - Delete node_modules and reinstall dependencies

2. **Metro bundler issues**
   - Clear Metro cache: `yarn start --reset-cache`

3. **iOS simulator issues**
   - Reset simulator
   - Clean build and rebuild

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

Please ensure your PR:
- Follows the code style
- Includes tests
- Updates documentation
- Has a clear description of changes

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

For additional help or questions, please open an issue in the repository.
