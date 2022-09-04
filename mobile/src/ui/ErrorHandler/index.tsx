import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler'
import { showErrorMessage } from 'ui/utils'

import { ErrorFallback } from './ErrorHandler';

setJSExceptionHandler((error, isFatal) => {
    console.log(error, isFatal)
    showErrorMessage()
})
setNativeExceptionHandler(exceptionString => {
    console.log({ exceptionString });
    //custom global error handler
    // google analytics to track crashes.
    //custom api to inform the dev team.
    //NOTE: alert or showing any UI change via JS
});
const myErrorHandler = (error: Error) => {
    console.log(error);
    //   captureException(error);
};

export const ErrorHandler = ({ children }: { children: React.ReactNode }) => (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
        {children}
    </ErrorBoundary>
);