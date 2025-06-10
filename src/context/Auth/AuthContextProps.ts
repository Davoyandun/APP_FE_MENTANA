import { User } from "@/models/user";

export interface AuthContextProps {
    user: User | null;
    error: string | null;
    isAuthenticated: () => Promise<boolean>;
    signInGoogle: () => Promise<void>;
    signOutGoogle: () => Promise<void>;
}
