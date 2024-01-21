const AuthSidePanel = () => {
  return (
    <div className="w-full relative h-full flex-1 hidden overflow-hidden lg:block rounded-xl bg-gradient-to-br from-[#daf1eb] to-[#e0f8de]">
      <div className="p-10 space-y-4">
        <h2 className="text-[32px] leading-[1.5]  max-w-md font-semibold text-green-950 ">The easiest way to track all of your favourite games</h2>
        <p className="text-green-900 max-w-xl text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit velit ipsum nemo quam adipisci iure vel cum, atque explicabo laudantium.</p>
      </div>
      <img
        src="/patterns/green-wave.jpg"
        className="absolute w-full h-[50%] bottom-0"
      />
    </div>
  );
};

export default AuthSidePanel;
