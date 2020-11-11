import home from './reducers/home';
import uploadform from './reducers/uploadform';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({ home, uploadform, router: routerReducer })