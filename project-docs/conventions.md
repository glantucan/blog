# Javascript conventions:

## CORE PRINCIPLES:

- MUST: Write readable, self-explanatory code that does one thing well
- SHOULD: Keep code simple; avoid unnecessary complexity.
- SHOULD_NOT: Comment normal code
- SHOULD: Comment only non-obvious logic, hacks, or workarounds
- CAN: Supplement with external documentation if needed.
- MUST: Handle errors with exceptions, use try/catch for loading remote files or API calls and provide meaningful error messages.
- MUST: Write declarative code when possible, prefering functional over imperative programming.
- MUST: Each function does one thing; keep them small.
- SHOULD: Limit parameters; use an object argument if >2.
- SHOULD: Apply pure functions, immutability, composition, and functional programming principles when possible.
- SHOULD_NOT: Create classes or use Typescript
- CAN: Mix functional and imperative code only when the functional alternative is too obscure or inneficient.
- CAN: Use factory functions when object creation is necessary.
- SHOULD: Use async/await for async code.
- CAN: Use promise.all for parallel async operations.
- MUST: Implement secure coding practices.
- SHOULD: Validate inputs and use secure APIs.

## Next conventions:

- MUST: Separate routing from page components. page.js files must load components from the components folder and pass props to them.

## React conventions:

- MUST: Create small functional components; Create a folder for each component in the src/components
- MUST: Use functional components.
- SHOULD: Create reusable components whenever possible.
- MUST: Create separate custom hook files for managing state and side effects of each component.
- MUST: Create separate files for styled components
- MUST: Put reusable hooks in the src/hooks folder.
- SHOULD: Nest component folders when functionality is tightly coupled.
- CAN: skip custom hook files or styled component files for very simple components (<50 lines).

### Component files:

- MUST: Name component files as <ComponentName>.jsx
- MUST: Define DOM refs here and pass them as arguments to custom hooks if needed.
- SHOULD: Manage state and effects with custom hooks, pass them props as needed.
- SHOULD: Import Styled components from the styled component file.
- CAN: Define state and handler functions here if they are really simple.
- SHOULD: delegate handler functions to custom hooks actions object.

### Custom hook files:

- MUST: Name as use<ComponentName or SharedHookName>.hook.js; export single default function returning state/actions objects
- MUST: Use the useCustomHook factory from hooks/useCustomHook.js
- SHOULD: Keep actions simple, pure and single responsibility functions.
- CAN: Define async actions to manage async logic.
- MUST_NOT: Include DOM refs in the default or returned state.
- MUST: Create an actions object with all the functions that update the state of the component, load files, request data from an API, etc.
- CAN: Manage side effects with useEffect and useCallback.
- SHOULD: Delegate to reusable custom hooks for common logic of different components.
- SHOULD_NOT: Create custom hook files if the logic is very simple or there is no state or side effects to manage.

### Styled component files:

- MUST: Name styled component files as <ComponentName>.styled.js
- CAN: Export several styled components if needed to maintain styled components small, reusable, and readable
- SHOULD: Prefer to export just one styled components with sccs nested rules for simple components (< 100 lines).
