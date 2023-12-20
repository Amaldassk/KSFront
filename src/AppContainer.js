import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import AppRouter from './AppRouter';
import { Provider } from 'react-redux';
import appStore from './redux/appStore';
import CommonLoading from './components/loader/CommonLoading';

const AppContainer = () => {

  const ErrorComponent = ({ errorMessage }) => (
    <div className="text-red-500 font-bold text-center">{errorMessage}</div>
  );

  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeStore = async () => {
      try {
        const apStore = await appStore();
        setStore(apStore);
      } catch (err) {
        setError(`Error initializing the app: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    initializeStore();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        {loading ? <CommonLoading /> : <ErrorComponent errorMessage={error} />}
      </div>
    );
  }

  return (
    <>
      <Provider store={store}>
        <Helmet>Title</Helmet>
        <AppRouter/>
      </Provider>
    </>
  )
}

export default AppContainer