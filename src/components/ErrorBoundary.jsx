import React from 'react';
import { Link } from 'react-router-dom';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center px-6 py-24 text-center bg-[#FAF7F2]">
          <div className="mx-auto max-w-md space-y-5 bg-white p-8 rounded-3xl border-2 border-[#D4AF37]/35 shadow-xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C84B31] font-bold block">
              Sharda Dinings Gorakhpur
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl text-[#1C1617] leading-tight font-bold">
              Something went slightly off track
            </h1>
            <p className="text-xs text-[#1C1617]/75 leading-relaxed font-light">
              We encountered a brief rendering glitch. Please refresh or return to the main dining sanctuary.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  this.setState({ hasError: false, error: null });
                  window.location.reload();
                }}
                className="px-6 py-2.5 rounded-full bg-[#C84B31] text-white text-xs font-mono uppercase tracking-wider font-bold shadow-md hover:bg-[#b33e26] transition-colors cursor-pointer"
              >
                Reload Page
              </button>
              <Link
                to="/"
                onClick={() => this.setState({ hasError: false, error: null })}
                className="px-6 py-2.5 rounded-full border-2 border-[#1C1617] text-[#1C1617] text-xs font-mono uppercase tracking-wider font-bold hover:bg-[#1C1617] hover:text-white transition-colors"
              >
                Return Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
