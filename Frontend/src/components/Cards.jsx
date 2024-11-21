const Cards = ({ data, visible, click }) => {
  return (
    <div
      onClick={click}
      className={`${
        visible ? "flex" : "hidden"
      } h-screen w-full  items-center justify-center bg-black bg-opacity-50 fixed top-0 left-0`}
    >
      <div className="bg-white p-4 w-96 rounded-md">
        <div className="relative w-full mb-4">
          <h2 className="text-center font-bold">Benefits on Cards</h2>
          <button className="absolute right-0 font-thin top-0" onClick={click}>
            x
          </button>
        </div>
        <hr />
        <div className="flex gap-2 flex-col mt-2">
          {data.map((o, index) => {
            const { img, title, link } = o;
            return (
              <div
                key={index}
                className="flex items-center p-3 gap-2 flex-shrink-0 w-full cursor-pointer rounded-lg bg-slate-100"
              >
                <div className="w-10 h-10">
                  <img src={img} alt="dhamaka" />
                </div>
                <div className="w-10/12">
                  <h3 className="text-xs">{title}</h3>
                  <a href={link} className="text-xs text-slate-400 underline">
                    T&C
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
