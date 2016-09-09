import { createStore } from 'redux';
import noteApp from '../reducers/index.js';

const store = createStore(noteApp, window.devToolsExtension && window.devToolsExtension());

export default store;
