import React, { useState } from 'react';

export function useHomePage() {
  const [homePageState, setHomePageState] = useState('');
  setHomePageState('Home Page State');
  return homePageState;
}

export default useHomePage