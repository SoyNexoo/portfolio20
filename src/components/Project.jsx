/* eslint-disable react/prop-types */
const Project = ({ image, title, description, list }) => {
  return (
    <div className="mb-3 group  last:mb-0 shadow-lg">
      <section className="bg-gray-100 max-w-[42rem] border p-4 border-black/5 rounded-lg overflow-hidden  relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 text-black  ">
        <div className=" gap-2 items-center justify-center w-[50%] md:w-full sm:w-full flex flex-col h-full group-even:ml-[18rem] sm:group-even:ml-0 md:group-even:ml-0">
          <a href={title} target="_blank" rel="noreferrer">
            <h3 className="text-2xl font-semibold cursor-pointer">{title}</h3>
          </a>

          <ul className="flex justify-center flex-wrap gap-2   ">
            {list.map((tag, index) => (
              <li
                className="bg-black/[0.7] text-white px-3 py-1 text-[0.7rem] uppercase tracking-wider"
                key={index}>
                {tag}
              </li>
            ))}
          </ul>
          <p className=" w-full leading-relaxed text-ellipsis line-clamp-4 text-black">
            {description}
          </p>
        </div>

        <img
          src={image}
          alt="Project I worked on"
          className="absolute md:hidden sm:hidden top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40 cursor-pointer"
          title="Visita mi proyecto"
        />
      </section>
    </div>
  );
};

export default Project;
