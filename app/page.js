import Home from "../components/dashboard/Home";
import ProtectedRoute from "@/components/route/ProtectedRoute";

export default function HomePage() {
  return (
    <div>
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    </div>
  );
}
