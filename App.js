// src/App.js
import React from 'react';
import Counter from './state';
import UseEffect from './useeffect';
import ExpenseEntryItem from './classcomponent';

const App = () => {
  return (
    <div>
      <Counter/>
      <UseEffect/>
      <ExpenseEntryItem/>
    </div>
  );
};
export default App;
