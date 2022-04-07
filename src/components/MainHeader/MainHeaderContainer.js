import { MainHeaderComponent } from './MainHeaderComponent';
import { useTitle } from '../../hooks/useHeaderContext';

export const MainHeaderContainer = () => {
  const { state: headerTitle, dispatch: setHeaderTitle } = useTitle();
  console.log({ headerTitle });
  return <MainHeaderComponent headerTitle={headerTitle} setHeaderTitle={setHeaderTitle} />
}
