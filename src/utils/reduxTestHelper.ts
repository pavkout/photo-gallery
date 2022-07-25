import { initialState } from '../state/initialState';
import { ActionType, IState } from '../types';

/**
 * Use this function to test your reducers. You can select what you want to test
 * by passing the corresponding states. It implements the Builder pattern:
 * http://tinyurl.com/h9hgpw7
 *
 * For example to test a reducer on a required action you can do the following:
 * test(reducer)
 *   .onAction({
 *     type: CHANGE_SEARCHING_VALUE,
 *     payload: 'test'
 *   })
 *   .withCurrentState({
 *     isSettingsOpen: false,
 *     isRealImages: false,
 *     isRandomSize: false,
 *     gutters: 15,
 *     columnWidth: 150,
 *     earchingValue: '',
 *   })
 *   .withDesiredState({
 *     isSettingsOpen: false,
 *     isRealImages: false,
 *     isRandomSize: false,
 *     gutters: 15,
 *     columnWidth: 150,
 *     earchingValue: test,
 *   })
 *   .run();
 *
 * Here's how to test a reducer on unknown action type:
 * test(reducer).withCurrentState(initialState).run();
 *
 * This previous is equivalent to:
 * it('handles action with unknown type', () => {
 *  return expect(reducer(initialState, {})).toEqual(currentState);
 * });
 */
export default function test(reducer: any) {
  let action: any = null;
  let currentState: IState = initialState;
  let desiredState: IState = initialState;
  let comment = action
    ? `handles action of type ${action.type}`
    : 'handles action with unknown type';

  return {
    /**
     * Set an action object to test
     */
    onAction(object: ActionType) {
      action = object;
      comment = object.type ? `handles action of type ${object.type}` : comment;

      return this;
    },
    /**
     * You can set the current state
     */
    withCurrentState(state: IState) {
      currentState = state;

      return this;
    },
    /**
     * This object represets the result of the reducer with the given action
     */
    withDesiredState(state: IState) {
      desiredState = state;

      return this;
    },
    /**
     * You can customize your output by setting the comment you want to appear
     * in the console
     */
    withComment(text = '') {
      comment = text;

      return this;
    },
    /**
     * This function will run the unit test with the given settings
     */
    run() {
      it(comment, () => {
        // When we have a previous state we use Object.freeze to check for unesessary
        // mutations
        if (currentState) {
          Object.freeze(currentState);
        }

        // If we don't provdie an action we just check if the reducer handles it properly
        if (!action) {
          return expect(reducer(initialState, {})).toEqual(currentState);
        }

        return expect(reducer(currentState, action)).toEqual(desiredState);
      });
    },
  };
}

// Create a test searching value.
const testSearchingValue = 'test';

// Create a test column value.
const testColumnWidth = 350;

// Create a test gutters.
const testGutters = 20;

// Create a test state for test.
const testState: IState = Object.freeze({
  isSettingsOpen: false,
  isRealImages: false,
  isRandomSize: false,
  gutters: 15,
  columnWidth: 150,
  searchingValue: '',
});

export { testSearchingValue, testColumnWidth, testGutters, testState };
