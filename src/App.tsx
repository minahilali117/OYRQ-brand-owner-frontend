import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DashboardPage from "./pages/Dashboard";
import ProductsPage from "./pages/Products";
import ShopsPage from "./pages/Shops";
import OrdersPage from "./pages/Orders";
import AnalyticsPage from "./pages/Analytics";
import CategoriesPage from "./pages/Categories";
import ProfilePage from "./pages/Profile";
import { RegisterForm } from "./components/auth/register-form";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/shops" element={<ShopsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<Index />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
