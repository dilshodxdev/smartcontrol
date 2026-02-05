import { Login, useAuth } from "./features/auth";
import { Button } from "@/components/ui/button";
import { Devices } from "./features/devices";

function App() {
  const user = useAuth((s) => s.user);
  const logout = useAuth((s) => s.logout);

  if (!user) {
    return <Login />;
  }

  return (
    <>
      <div className="p-6 space-y-4">
        <p>Assalomu aleykum: {user.email}</p>

        <Button onClick={logout}>Logout</Button>

        <h2 className="text-xl font-bold">Dashboard</h2>

        <Devices />
      </div>
    </>
  );
}

export default App;
