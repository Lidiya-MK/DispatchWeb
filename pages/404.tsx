import React from "react";

export default function NotFound(): JSX.Element {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">404 — Page Not Found</h1>
        <p className="mt-2 text-muted-foreground">If you expected the SPA, reload the page.</p>
      </div>
    </main>
  );
}
