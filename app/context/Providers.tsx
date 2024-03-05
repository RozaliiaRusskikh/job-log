"use client";

import { SessionProvider } from "next-auth/react";

interface ProviderSessionProps {
  children: React.ReactNode;
}

const ProviderSession: React.FC<ProviderSessionProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default ProviderSession;
