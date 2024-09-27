const StickyWarpper = ({ children }) => {
  return (
    <div className="hidden lg:block sticky self-end bottom-8 w-[368px]">
      <div className="sticky flex flex-col gap-y-6 top-6 min-h-[calc(100vh-48px)]">
        {children}
      </div>
    </div>
  );
};

export default StickyWarpper;
