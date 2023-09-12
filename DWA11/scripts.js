/* eslint-disable linebreak-style */
/**
 * Represents the initial state object with a value property.
 * @typedef {Object} InitialState
 * @property {number} value - The initial value.
 */

/**
 * Represents a state object with a value property.
 * @typedef {Object} State
 * @property {number} value - The current value.
 */

/**
 * Logs the current value in the state to the console.
 * @param {State} state - The current state object.
 */
const getState = (state) => {
  console.log('count is now:', state.value);
};

// Initialize the initial state
/**
 * The initial state object.
 * @type {InitialState}
 */
const initialState = {
  value: 0,
};

// Get and display the initial state
getState(initialState);

/**
 * Increments the value property of the state by 1.
 * @param {State} currentState - The current state object.
 * @returns {State} A new state object with the updated value.
 */
const add = (currentState) => {
  const newState = {
    ...currentState,
    value: currentState.value + 1,
  };
  return newState;
};

// Perform the addition operations
/**
 * The state object after the first addition.
 * @type {State}
 */
const addedOnce = add(initialState); // First call to add

/**
 * The state object after the second addition.
 * @type {State}
 */
const addedTwice = add(addedOnce); // Second call to add

console.log('count is now:', addedOnce.value);
console.log('count is now:', addedTwice.value); // Output: 2

/**
 * Decrements the value property of the state by 1.
 * @param {State} currentState - The current state object.
 * @returns {State} A new state object with the updated value.
 */
const subtract = (currentState) => {
  const newState = {
    ...currentState,
    value: currentState.value - 1,
  };
  return newState;
};

// Perform the subtraction operation
/**
 * The state object after the subtraction.
 * @type {State}
 */
const minus = subtract(addedTwice);
console.log('count is now:', minus.value);

/**
 * Resets the value property of the state to 0.
 * @param {State} currentState - The current state object.
 * @returns {State} A new state object with the value set to 0.
 */
const reset = (currentState) => {
  const newState = {
    ...currentState,
    value: 0,
  };
  return newState;
};

// Perform the reset operation
/**
 * The state object after the reset.
 * @type {State}
 */
const restart = reset(minus);
console.log('count is now:', restart.value);
