# My Demo UI Library





## Installation

You can install this demo UI library using npm:

```
npm install ophelia-ui
```

## Usage

To use this demo UI library in your project, import the components you need from the library and use them in your React components.

```jsx
import React from "react";
import { Input, Button } from "ophelia-ui";

function App() {
  return (
    <div>
      <Input
        id="name"
        disabled={false}
        label="Enter your name"
        message="This field is required"
        error={false}
        success={false}
        onChange={(e) => console.log(e.target.value)}
        placeholder="Enter your name here"
      />
      <Button
        size="medium"
        primary={true}
        disabled={false}
        text="Click me!"
        onClick={() => alert("Button clicked!")}
      />
    </div>
  );
}

export default App;
```

## Contributing

This library is a demo for learning purposes only and is not intended to be contributed to. You can fork the repository and use the code for your personal use or learning.

### Steps

- Fork the repository.
- Clone the repository to your local machine.
- Install the dependencies using `npm install`.
- View the components in the browser using `npm run storybook`.
- Make your changes.
- Test the changes using `npm test`.
- Build the library using `npm run build`.
- Commit the changes and push them to your forked repository.
- Publish the package on [npm](https://www.npmjs.com/).
- Install and use the package in your project.

