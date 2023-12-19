'use client'

// Import necessary types and hooks
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Define the type for the 'request' parameter
interface NewPasswordProps {
  // Adjust the type as needed based on the actual 'request' type
  request: any;
}

// Define the type for the payload
interface ResetPasswordPayload {
  newPassword: string;
  newPasswordConfirm: string;
}

// Function to reset the password
async function resetPassword(payload: ResetPasswordPayload) {
  const res = await fetch('/reset-password', { method: 'POST', body: JSON.stringify(payload) });

  if (!res.ok) return undefined;
  return res.json();
}

// Component for the NewPassword page
const NewPassword: React.FC<NewPasswordProps> = ({ request }) => {
    const router = useRouter();
    const [error, setError] = useState<string | undefined>();
  
    async function onResetPassword(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
  
      const formData = new FormData(event.currentTarget);
      const newPassword = formData.get('new_password') as string;
      const newPasswordConfirm = formData.get('new_password_confirm') as string;
  
      // Check if the passwords match
      if (newPassword !== newPasswordConfirm) {
        setError("Slaptažodžiai nėra tokie patys");
        return;
      }
  
      // Check if the password length is at least 8 symbols
      if (newPassword.length < 8) {
        setError("Slaptažodis turi būti bent 8 simbolių ilgio");
        return;
      }
  
      const payload: ResetPasswordPayload = {
        newPassword,
        newPasswordConfirm,
      };
  
      const response = await resetPassword(payload);
  
      if (response?.error) {
        setError(response.error);
      } else if (response?.redirect) {
        router.push(`${response.redirect}?message=${response.message}`);
      }
  
      return true;
    }
  
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <form
          method="post"
          onSubmit={onResetPassword}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          {error && (
            <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              {error}
            </div>
          )}
          <div className="mb-4 text-black">Įveskite naują slaptažodį, kurį naudosite</div>
          <div className="mb-4">
            <label htmlFor="new_password" className="block text-gray-700 text-sm font-bold mb-2">
              Naujas slaptažodis
            </label>
            <input
              type="password"
              name="new_password"
              id="new_password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="new_password_confirm" className="block text-gray-700 text-sm font-bold mb-2">
              Pakartokite naują slaptažodį
            </label>
            <input
              type="password"
              name="new_password_confirm"
              id="new_password_confirm"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <input
            type="submit"
            value="Pakeiskite slaptažodį"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          />
        </form>
      </main>
    );
  };
  
  export default NewPassword;