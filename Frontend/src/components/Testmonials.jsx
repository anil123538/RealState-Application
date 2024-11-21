import { reviews } from "../components/fakeDatas";

const Testmonials = () => {
  return (
    <div className="w-9/12 flex justify-start mt-10">
      <div
        className="w-full flex gap-4 transition-transform overflow-y-scroll py-2"
        style={{ transform: `translateX(-000%)` }}
      >
        {reviews.map((rev, index) => {
          const { comment, userPic, username, rating } = rev;
          return (
            <div
              key={index}
              className="md:w-96 w-72 bg-white flex-shrink-0 flex flex-col gap-4 p-4 rounded-md"
            >
              <h1 className="text-3xl text-green">"</h1>
              <p className="font-light">{comment}</p>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={userPic}
                    alt={username}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="capitalize">{username}</span>
                </div>
                <p>
                  {[...Array(Number(rating))].map((_, index) => (
                    <span key={index}>⭐</span>
                  ))}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testmonials;
