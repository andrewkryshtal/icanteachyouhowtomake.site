import { MainHeaderComponent } from './MainHeaderComponent';
import { useTitle } from '../../hooks/useHeaderContext';

export const MainHeaderContainer = () => {
  const { state: headerTitle } = useTitle();
  return <MainHeaderComponent headerTitle={headerTitle} />
}
