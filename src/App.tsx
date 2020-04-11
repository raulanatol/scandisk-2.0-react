import React, { FC, useState } from 'react';
import { CheckingPhase } from "./pages/checkingPhase/CheckingPhase.page";

type AppPhase = 'CHECKING' | 'SURFACE' | 'SUMMARY';

const App: FC = () => {
  const [phase, setPhase] = useState<AppPhase>('CHECKING');

  if (phase === 'CHECKING') {
    return <CheckingPhase/>;
  }

  return null;
};

export default App;
