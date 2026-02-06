import { Login, useAuth } from "@/features/auth";
import { Devices } from "@/features/devices";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

function App() {
  const user = useAuth((s) => s.user);

  if (!user) return <Login />;

  return (
    <DashboardLayout>
      <Devices />
    </DashboardLayout>
  );
}

export default App;
