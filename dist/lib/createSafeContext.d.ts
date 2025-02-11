import React from "react";
export default function createSafeContext<TValue extends {} | null>(): readonly [() => TValue, React.Provider<TValue | undefined>];
