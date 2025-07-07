import { signInWithGoogle, signInWithEmail } from "../firebase/auth";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-orange-600">ZEYARA</h1>
        <div className="flex space-x-3">
          <button 
            onClick={signInWithGoogle}
            className="bg-[#FF6B00] text-white px-4 py-2 rounded-lg"
          >
            Sign in with Google
          </button>
          <button 
            onClick={signInWithEmail}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg"
          >
            Sign in with Email
          </button>
        </div>
      </div>
    </header>
  );
}
