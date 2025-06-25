export default function PurchasedSu() {
  return (
    <div className="fixed left-6 bottom-48.5 z-50 w-[200px]">
      <div className="flex flex-col justify-center rounded-xl shadow-2xl  p-2">
        <h1 className="text-white font-bold text-base mb-2 text-left flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-violet-500 rounded-full animate-pulse"></span>
          Purchase Successful!
        </h1>
        <hr className="w-0 animate-hr-sweep bg-violet-500 h-1 border-0 rounded-full" />
      </div>
      <style>
        {`
          @keyframes hr-sweep {
            from { width: 0; }
            to { width: 100%; }
          }
          .animate-hr-sweep {
            animation: hr-sweep 3s cubic-bezier(0.4,0,0.2,1) forwards;
          }
        `}
      </style>
    </div>
  );
}
