import CareSidebar from "./CareSidebar";
import CareHeader from "./CareHeader";
import CareDashboard from "./CareDashboard";

export default function CareLayout({ children }) {
  return (
    <div className={`min-h-screen flex bg-slate-50/80`}>
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        aria-hidden
      >
        <div className="absolute top-0 right-0 w-[55%] h-[45%] bg-gradient-to-bl from-slate-100/60 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[45%] h-[35%] bg-gradient-to-tr from-slate-100/50 to-transparent rounded-full blur-3xl" />
      </div>

      <CareSidebar />
      <div className="flex-1 flex flex-col min-h-0 relative z-10">
        <CareHeader />
        {children || <CareDashboard />}
      </div>
    </div>
  );
}
