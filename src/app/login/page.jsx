import LoginContent from "@/components/LoginContent";
import { Suspense } from "react";

const LoginPage = () => {
    return (
        <Suspense fallback={<div className="min-h-screen bg-cyan-50 flex items-center justify-center">Loading...</div>}>
            <LoginContent />
        </Suspense>
    );
};

export default LoginPage;