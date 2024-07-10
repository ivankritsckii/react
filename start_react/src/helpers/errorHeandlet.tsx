import React, { ErrorInfo, ReactNode } from "react";
interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class MyErrorBoundary extends React.Component <Props, State> {
  public state: State = {
    hasError: false
  };

    public static getDerivedStateFromError():State {
        return { hasError: true }
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo)
        return { hasError: true }
    }

    public render() {
        if (this.state.hasError) {
            return <div className="error_handler">Something went wrong. Please reload the page or contact support</div>
        }
        return this.props.children
    }
}
