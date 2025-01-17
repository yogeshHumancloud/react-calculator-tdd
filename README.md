# React Calculator with Testing

A simple calculator application built with React, featuring comprehensive test coverage using Jest and React Testing Library.

## Features

- Basic arithmetic operations (addition, subtraction, multiplication)
- Clean, responsive UI using Tailwind CSS
- Comprehensive test suite
- React 18+ compatibility

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm (v8 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yogeshHumancloud/calculator-tdd.git
cd calculator-tdd
```

2. Install dependencies:
```bash
npm install
```

## Project Structure

```
calculator-tdd/
├── src/
│   ├── components/
│   │   ├── Calculator.js
│   │   └── Calculator.test.js
│   ├── App.js
│   ├── index.js
│   └── setupTests.js
├── babel.config.js
├── jest.config.js
├── package.json
└── README.md
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Running Tests

The project uses Jest and React Testing Library for testing. To run the tests:

```bash
# Run tests once
npm test

# Run tests in watch mode
npm test -- --watch
```

## Test Coverage

The test suite covers:
- Component rendering
- Basic arithmetic operations
- User interactions
- Display updates
- Clear functionality

## Development

1. Start the development server:
```bash
npm start
```

2. Make your changes
3. Run tests to ensure everything works:
```bash
npm test
```

## Project Setup Steps

1. Create a new React project:
```bash
npx create-react-app calculator-tdd
cd calculator-tdd
```

2. Install required dependencies:
```bash
npm install @testing-library/react@12.1.5 @testing-library/jest-dom@5.16.5 @testing-library/user-event@13.5.0 jest@27.5.1 jest-environment-jsdom@27.5.1
```

3. Create `babel.config.js`:
```javascript
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};
```

4. Create `jest.config.js`:
```javascript
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testMatch: ['**/__tests__/**/*.js', '**/*.test.js'],
};
```

5. Update `src/setupTests.js`:
```javascript
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
```

## Dependencies

Main dependencies:
- React 18
- @testing-library/react@12.1.5
- @testing-library/jest-dom@5.16.5
- @testing-library/user-event@13.5.0
- jest@27.5.1
- jest-environment-jsdom@27.5.1

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Contact

Yogesh Vitekar - [@yogeshvitekar](https://github.com/yogeshHumancloud)
Project Link: [https://github.com/yogeshHumancloud/react-calculator-tdd](https://github.com/yogeshHumancloud/react-calculator-tdd)