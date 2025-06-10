import useAuthContext from "@/context/Auth/useAuthContext";

const SignInGoogle = () => {
    const { signInGoogle } = useAuthContext();

    return (
        <button onClick={signInGoogle} className="mt-5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Sign in with Google
        </button>
    );
}

export default SignInGoogle;
