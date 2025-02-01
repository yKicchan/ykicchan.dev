import type React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface P {
  children: React.ReactNode;
  language?: string;
}

const CodeBlock: React.FC<P> = ({ language, children }) => {
  return (
    <SyntaxHighlighter language={language} style={darcula}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
