/* eslint-disable react/prop-types */
export const Card = ({ icon, title, description }) => {
  return (
    <div className="flex sm:w-[90%] md:w-[60%] flex-col gap-4 w-1/4 bg-gray p-6 text-center justify-center items-center text-black rounded-br-[200px] pb-20 shadow-darkViolet shadow-xl">
      <img src={icon} alt={""} className="w-[100px] h-[100px]"></img>
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="pb-2 w-full bg-violet"></div>
      <p className="sm:w-full">{description}</p>
    </div>
  );
};
