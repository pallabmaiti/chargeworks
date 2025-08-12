import { useNavigationContainerRef, useRouter } from "expo-router";
import { useEffect, useState } from "react";

interface AuthGateProps {
  children: React.ReactNode;
}

const AuthGate: React.FC<AuthGateProps> = ({ children }) => {
  const router = useRouter();
  const navigationRef = useNavigationContainerRef();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsReady(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isReady && navigationRef.isReady()) {
      console.log("Navigating to welcome screen");
      router.replace("/welcome");
    }
  }, [isReady, navigationRef, router]);

  return <>{children}</>;
};

export default AuthGate;
