export const TailwindIndicator = () => {
  if (process.env.NODE_ENV === 'production') return null;
  return (
    <div className="lg:bg-success pointer-events-none fixed bottom-5 right-5 z-999 rounded-bl bg-[#d86074] p-3 font-mono text-[#ffecec] shadow-md md:bg-danger">
      <span className="md:hidden lg:hidden">default</span>
      <span className="hidden md:block lg:hidden">md</span>
      <span className="hidden lg:block">lg</span>
    </div>
  );
};
