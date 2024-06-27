"use client";

import React, { ReactNode, useEffect, useState } from "react";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div>
            {/* Include shared UI here e.g. a header or sidebar */}
            {children}
        </div>
    );
}
