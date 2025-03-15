# Javascript conventions:

## Readability:

- MUST: "Write code that's easy to read and understand."
- SHOULD: "Keep code simple; avoid unnecessary complexity."
- CAN: "Use clear, consistent formatting."

## Naming:

- MUST: "Use descriptive, meaningful names."
- SHOULD: "Use camelCase for variables and functions. All caps for constants."
- CAN: "Add extra context when it improves clarity."

## Functions:

- MUST: "Each function does one thing; keep them small."
- SHOULD: "Limit parameters; use an object if >2."
- CAN: "Extract helper functions for complex logic."

## Comments:

- MUST: "Write self-explanatory code."
- SHOULD: "Comment only non-obvious logic."
- CAN: "Supplement with external documentation if needed."

## Error handling:

- MUST: "Handle errors with exceptions (not error codes)."
- SHOULD: "Provide meaningful error messages."

## Security:

- MUST: "Implement secure coding practices."
- SHOULD: "Validate inputs and use secure APIs."

## Functional programming:

- MUST: "Use code as decalarative as possible."
- SHOULD: "Apply pure functions, immutability, and composition."
- CAN: "Mix with imperative code if the functional alternative is too obscure."

## OOP:

- MUST_NOT: "Use OOP unless it enhances clarity or maintainability."
- SHOULD_NOT: "Create classes."
- CAN: "Use OOP when the problem domain naturally fits. Use Factory functions to create objects if necessary."

## TypeScript:

- MUST_NOT: "Use TypeScript."
- SHOULD: "Stick to JavaScript."

## React conventions:

- Create a folder for each component in the src/components folder, with all the component related files (styled components, custom hooks, etc.).
- MUST: "Use functional components."
- MUST: "Create small, reusable components."
- MUST: "Create custom hook files for managing state and side effects of each component."
- MUST: "Create separate files for styled components, separating component logic from styling."
- MUST: "Put reuseable hooks in the src/hooks folder."
- MUST: "Nest component folders for components that are only used by a parent component if their functionality is tightly coupled with that parent component."

### Custom hook files:

- MUST: "Name each custom hook file following the pattern use<ComponentName or SharedHookName>.hook.js"
- MUST: "Export a single default function named use<ComponentName or SharedHookName> that returns an object with the state and actions objects."
- MUST: "Pass necessary arguments to the custom hook function to configure its behavior."
- MUST: "Define a defaultState object with all the state properties and their initial values for each custom hook."
- MUST_NOT: "Include ref definitions to reference DOM elements in custom hooks. If the custom hook requires access to them define them in the main component file and pass them as arguments to the custom hook."
- MUST_NOT: "Include DOM refs in the default or returned state."
- MUST: "Create an actions object with all the functions that update the state on each custom hook."
- MUST: "Actions will include always a setState function that accepts an object with the properties to update and a resetState function that resets the state to its default."
- CAN: "Manage side effects with useEffect and useCallback."
- SHOULD: "Create reusable custom hooks for common logic of different components."
- MUST: "Use the useCustomHook factory on hooks/useCustomHook.js to create custom hooks with the specified conventions."

### Styled component files:

- MUST: "Name styled component files as <ComponentName>.styled.js"
- CAN: "Export several styled components if needed to maintain styled components small, reusable, and readable"
