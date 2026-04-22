"use client";

/**
 * Catches failures in the root `layout` (normal `app/error.tsx` does not).
 * Uses system colors only — no GLC CSS bundle required.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          padding: 24,
          maxWidth: 640,
          margin: "0 auto",
          color: "CanvasText",
          background: "Canvas",
        }}
      >
        <h1 style={{ marginTop: 0, fontSize: "1.25rem" }}>Something went wrong</h1>
        {isDev ? (
          <>
            <pre
              style={{
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                fontSize: 13,
                padding: 12,
                border: "1px solid ButtonBorder",
                background: "Field",
              }}
            >
              {error.message}
            </pre>
            {error.digest ? (
              <p style={{ fontSize: 12, opacity: 0.75 }}>Digest: {error.digest}</p>
            ) : null}
          </>
        ) : (
          <p>An unexpected error occurred. Please try again.</p>
        )}
        <button
          type="button"
          onClick={() => reset()}
          style={{
            marginTop: 16,
            padding: "10px 18px",
            cursor: "pointer",
            border: "1px solid ButtonBorder",
            background: "ButtonFace",
            color: "ButtonText",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
