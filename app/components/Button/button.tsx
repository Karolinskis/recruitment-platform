/// Todo:

/// Need to pass classname as a prop and etc.
/// Not reusable atm

export default function Button() {
  return (
    <a href="/login">
      <div className="bg-purple-400 max-w-max 3xl:left-[750px] 3xl:top-[270px]   bg-opacity-80 absolute top-[280px] left-[500px] hover:outline hover:outline-amber-400 hover:bg-violet-700 hover:outline-offset-2 hover:outline-2 hover:bg-opacity-80 ">
        <p className="h-16 w-36 flex justify-center items-center font-bold hover:h-20 hover:w-40 text-white">
          Pradėk dirbti!
        </p>
      </div>
    </a>
  );
}
