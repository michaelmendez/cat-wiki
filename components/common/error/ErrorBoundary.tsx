import { Component, ReactNode } from 'react';
import Fallback from '@/components/common/fallback/Fallback';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Fallback
          statusCode={500}
          title="Something Went Wrong"
          text="We're sorry for the inconvenience. Please try again later."
          imgSrc="/500.webp"
          alt="Sad Kitten"
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
