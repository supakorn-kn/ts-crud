import React, { ReactNode } from "react";

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: ReactNode;
}) {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            {children}
        </section>
    );
}
