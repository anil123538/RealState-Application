import { useState } from "react";

const QuickChat = () => {
  const [visibleChatbox, setVisibleChatbox] = useState(false);
  return (
    <>
      <div
        className={`${
          visibleChatbox ? "block" : "hidden"
        } bg-white w-80 fixed bottom-10 right-10 text-black shadow-2xl rounded-xl overflow-hidden z-50`}
      >
        <div className="bg-[#004958] relative flex items-center justify-center py-2.5">
          <h1 className="font-semibold text-white text-sm">NESTATE Support</h1>
          <div className="absolute right-3 text-white flex gap-2">
            <span>-</span>
            <button onClick={() => setVisibleChatbox(false)}>
              <span>-</span>
            </button>
          </div>
        </div>
        <div>
          <header className="flex gap-2 items-center p-2.5 shadow-md">
            <img src="/logo.png" alt="logo" className="w-8 h-8" />
            <div>
              <h3 className="text-sm">Live support</h3>
              <h5 className="text-sm font-light">Customer support</h5>
            </div>
          </header>
          <section className="h-96 px-4 py-2.5 relative">
            <div className="text-sm">
              <div className="flex gap-2 items-end">
                <img src="/logo.png" alt="logo" className="w-7 h-7" />
                <div>
                  <h3 className="text-sm py-1">Natasha</h3>
                  <p className="text-sm font-light bg-slate-100 p-2 rounded-lg">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Odit officiis dolorem quod eaque inventore dicta!
                  </p>
                </div>
              </div>
            </div>
            <form action="">
              <textarea
                name="msg"
                id="msg"
                className="border rounded-md border-gray p-2 text-sm resize-none w-11/12 min-h-20 max-h-20 absolute bottom-10 left-1/2 transform -translate-x-1/2"
              ></textarea>
            </form>
          </section>
        </div>
      </div>
      <button
        onClick={() => setVisibleChatbox(true)}
        className={`${
          visibleChatbox ? "hidden" : "block"
        } fixed bottom-10 right-10 bg-[#004958] font-bold text-white px-4 py-2 rounded-2xl border-2 border-[#004958] z-[9999]`}
      >
        <i className="fa-regular fa-comment"></i> Chat
      </button>
    </>
  );
};

export default QuickChat;
