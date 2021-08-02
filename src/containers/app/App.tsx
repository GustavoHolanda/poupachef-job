import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';
import Root from '../../components/root';
import SnackbarControl from '../../components/snackbar-control';



const App = () => {
   const theme = useAppSelector((state: RootState) => state.config.theme);
   return (
      <div className={`app ${theme}`}>
         <Root />
         <SnackbarControl />
      </div>
   )
}


export default App;
