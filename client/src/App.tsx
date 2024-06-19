import * as React from 'react';
import { LoadingPage } from './components/loading';
import { RouterProvider } from "react-router";
import router from './router'
function App() {

  return (
    <>
      <React.Suspense fallback={<LoadingPage />}>
        <RouterProvider router={router}></RouterProvider>
      </React.Suspense>
    </>
  )
}

export default App
