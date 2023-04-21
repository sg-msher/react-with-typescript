import React, { Suspense } from 'react';

type ReturnType<T> = (props: T) => JSX.Element;

export const withLoading = <T extends object>(Component: React.ComponentType<T>): ReturnType<T> => {
  return (props: T) => (
    <Suspense fallback={<p>Loding...</p>}>
      <Component {...props} />
    </Suspense>
  );
};