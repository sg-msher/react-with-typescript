import React from 'react';

type WithLoadingProps = {
  isLoading: boolean;
}

type ReturnType<T> = (props: T) => JSX.Element;

const withLoading = <T extends object>(Component: React.ComponentType<T>) => {  
  const renderWithLoading = (props: T & WithLoadingProps) => {
    if(props.isLoading) {
      return <p>Loading...</p>
    } else {
      return <Component {...props} />
    }
  }
  return (props: T & WithLoadingProps) => renderWithLoading(props);
};

export default withLoading;