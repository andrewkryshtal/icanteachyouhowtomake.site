import { useEffect, useState } from 'react';
import { MainHeaderComponent } from './MainHeaderComponent';
import { useTitle } from '../../hooks/useHeaderContext';

export const MainHeaderContainer = () => {
  const { state: headerTitle } = useTitle();
  const [clock, setClock] = useState('');
  const updateClock = () => {
    setClock(new Date().toLocaleString())
  };
  useEffect(() => {
    const intervalId = setInterval(() => updateClock(), 1000)
    return () => {
      clearInterval(intervalId);
    }
  }, [])
  return <MainHeaderComponent headerTitle={headerTitle} clock={clock} />
}
