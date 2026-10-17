import React, { Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Unhandled UI exception:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#121416] text-[#e2e2e5] flex items-center justify-center p-6 text-center">
          <div className="bg-[#181A1D] border-2 border-[#ffc400] p-8 max-w-md shadow-[8px_8px_0px_#000000]">
            <h2 className="font-headline text-2xl uppercase font-bold text-[#ffc400] mb-2">
              Taller Mecánico Hermanos Ruiz
            </h2>
            <p className="text-sm text-[#c3c6cf] mb-4">
              Se ha producido un problema inesperado al cargar la interfaz.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#ffc400] text-[#111315] font-headline text-base uppercase px-6 py-2.5 font-bold hover:bg-[#ffdf99] transition-colors"
            >
              Recargar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
