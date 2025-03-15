import { useState } from 'react';

export default function useCustomHook({
  defaultState,
  actions: customHookActions,
  debug,
  debugName = getCallerName(),
}) {
  const [state, setState] = useState(defaultState);
  const actions = {
    resetState: (initialState = {}) => {
      setState({ ...defaultState, ...initialState });
    },
    setState: newState => {
      const callerName = getCallerName();
      setState(previousState => {
        const combinedState = { ...previousState, ...newState };

        if (DEBUG && debug) {
          traceStateChanges(previousState, combinedState, debugName, callerName);
        }

        return combinedState;
      });
    },
    ...customHookActions,
  };

  return { state, actions };
}

const DEBUG = process.env.NODE_ENV === 'development';

function traceStateChanges(previousState, combinedState, debugName, callerName) {
  const changes = compareStates(previousState, combinedState);
  if (Object.keys(changes).length > 0) {
    console.groupCollapsed(`State Update (${debugName} -> ${callerName})`);

    Object.entries(changes).forEach(([key, { value }]) => {
      console.groupCollapsed(key);
      console.log(...value);
      console.groupEnd();
    });
    console.groupEnd();
  }
}

function compareStates(previousState, newState) {
  const changes = {};
  Object.keys(newState).forEach(key => {
    if (previousState[key] !== newState[key]) {
      changes[key] = {
        value: [
          '%c' + JSON.stringify(previousState[key]) + '%c → %c' + JSON.stringify(newState[key]),
          'color: #ff0000',
          'color: inherit',
          'color: #00ff00',
        ],
      };
    }
  });
  return changes;
}

function getCallerName() {
  try {
    throw new Error();
  } catch (e) {
    const stack = e.stack.split('\n');
    // Look through multiple stack lines to find a meaningful name
    for (let i = 3; i < Math.min(stack.length, 8); i++) {
      const line = stack[i];
      // Try to match common React patterns
      const matches = line.match(
        /at (?:async )?([A-Za-z0-9$_]+) |at (?:async )?([A-Za-z0-9$_]+)\./
      );
      if (matches) {
        const name = matches[1] || matches[2];
        // Filter out generic names
        if (!['eval', 'Object', 'ref', 'anonymous', 'eval*'].includes(name)) {
          return name;
        }
      }
    }
    return 'unknown';
  }
}
