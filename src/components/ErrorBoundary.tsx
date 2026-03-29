import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * ErrorBoundary — Catches render errors and shows a Hindi-friendly
 * recovery screen instead of a white page.
 */
export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Jeevika ErrorBoundary:", error, info.componentStack);
  }

  handleReset = () => {
    // Clear persisted state that might be corrupted
    localStorage.removeItem("jeevika-game-state");
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <main
          style={{
            minHeight: "100dvh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            background: "var(--cream, #FFF8F0)",
            fontFamily: "'Noto Sans Devanagari', sans-serif",
            textAlign: "center",
            gap: "16px",
          }}
        >
          <h2 style={{ fontSize: "1.4rem", color: "#3E2723" }}>
            कुछ गड़बड़ हो गई
          </h2>
          <p style={{ fontSize: "0.9rem", color: "#5D4037", maxWidth: "280px" }}>
            चिंता मत करो — फिर से शुरू करो।
          </p>
          <button
            onClick={this.handleReset}
            style={{
              padding: "12px 28px",
              borderRadius: "999px",
              background: "#C84B31",
              color: "#fff",
              fontSize: "1rem",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
            }}
          >
            शुरू से खेलो
          </button>
        </main>
      );
    }

    return this.props.children;
  }
}
 
