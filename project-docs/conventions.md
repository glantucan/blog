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