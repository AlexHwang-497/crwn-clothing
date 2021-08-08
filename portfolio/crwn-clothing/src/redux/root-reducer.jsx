// todo: root reducer - the actual base reducer object aht represents all of the state of our application
    // todo: this reducer will end up being the actual code that combines all of our states together
        // todo: we do this because we ant to break the code up into it's individual section.  



import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer
});