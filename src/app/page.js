export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form className="h-[70vh] mt-[15vh] mb-[15vh] w-full max-w-xl bg-white shadow-md rounded-lg lg:pt-6 lg:px-8 pb-8">
          <span className="text-2xl">Contact Us</span>
          <div className="flex mt-5 justify-between gap-2">
            <div className="flex flex-col w-1/2">
              <label
                class="text-gray-500 text-xs font-semibold mb-1"
                for="username"
              >
                First Name *
              </label>
              <input
                class="border border-gray-300 rounded-lg py-2 px-3 text-gray-700"
                id="username"
                type="text"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label
                class="text-gray-500 text-xs font-semibold mb-1"
                for="username"
              >
                Last Name *
              </label>
              <input
                class="border border-gray-300 rounded-lg py-2 px-3 text-gray-700"
                id="username"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col w-full mt-7">
            <label
              class="text-gray-500 text-xs font-semibold mb-1"
              for="username"
            >
              Email Address *
            </label>
            <input
              class="border border-gray-300 rounded-lg py-2 px-3 text-gray-700"
              id="username"
              type="text"
            />
          </div>
          <div className="flex flex-col w-full mt-7">
            <label
              class="text-gray-500 text-xs font-semibold mb-1"
              for="username"
            >
              Query Type *
            </label>
            <div className="flex gap-2">
              <input
                class="border w-1/2 border-gray-300 rounded-lg py-2 px-3 text-gray-700"
                id="username"
                type="text"
              />
              <input
                class="border w-1/2 border-gray-300 rounded-lg py-2 px-3 text-gray-700"
                id="username"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col w-full mt-7">
            <label
              class="text-gray-500 text-xs font-semibold mb-1"
              for="username"
            >
              Message *
            </label>
            <input
              class="border border-gray-300 rounded-lg py-2 px-3 h-[10vh] text-gray-700"
              id="username"
              type="text"
            />
          </div>
        </form>
      </div>
    </>
  );
}
