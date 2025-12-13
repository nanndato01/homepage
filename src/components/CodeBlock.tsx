import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
    lang: string;
    children: string;
    props: any;
}

export default function CodeBlock({ lang, children, props }: CodeBlockProps) {
    const [maxWidth, setMaxWidth] = useState<number>(0);
    useEffect(() => {
        const updateWidth = () => {
            const viewportWidth = document.documentElement.clientWidth;
            setMaxWidth(viewportWidth);
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return (
        <div className="my-4" style={{maxWidth: `${maxWidth > 768 ? maxWidth - 300 : maxWidth - 40}px`}}>
            <div className="text-gray-600 bg-gray-200 rounded-tl-lg rounded-tr-lg p-2 border border-gray-300">
                {lang}
            </div>

            <div className="overflow-x-auto">
                <SyntaxHighlighter
                    language={lang}
                    style={oneDark}
                    PreTag="div"
                    customStyle={{
                        borderRadius: "0 0 0.5em 0.5em",
                        margin: 0,
                    }}
                    {...props}
                >
                    {children.replace(/\n$/, "")}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}
