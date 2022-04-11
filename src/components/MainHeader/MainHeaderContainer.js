import { useEffect } from 'react';
import { MainHeaderComponent } from './MainHeaderComponent';
import { useTitle } from '../../hooks/useHeaderContext';

export const MainHeaderContainer = () => {
  useEffect(() => {
    (async () => {
      const battery = await navigator.getBattery()
      console.log({ battery })
    })()
  }, [])
  const { state: headerTitle } = useTitle();
  return <MainHeaderComponent headerTitle={headerTitle} />
}
