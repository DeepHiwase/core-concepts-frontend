import "./App.css";

const App = () => {
  return (
    <>
      <span className="">Hi Grid & Flex!</span>
      <div>
        <a href="https://x.com" className="">
          Deep
        </a>
      </div>
      <p className="">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, enim
        omnis? Similique, at culpa atque quisquam aperiam odio exercitationem
        non dolore quos. Rem ullam nemo, ratione dolor nesciunt quia molestias
        eum. Necessitatibus molestiae velit perferendis nam vitae explicabo quas
        placeat quisquam illo error eveniet dolorem nobis aliquid iusto,
        quibusdam cum perspiciatis ea suscipit facilis? Sint labore culpa ipsam
        harum molestiae dolor suscipit libero quasi, ut esse doloribus
        cupiditate officia nesciunt. Pariatur tenetur id perferendis excepturi
        expedita quaerat sint dolore! Repudiandae excepturi eveniet aut,
        obcaecati eos praesentium doloremque veniam reiciendis inventore
        consectetur commodi explicabo ipsum aliquid a fugit sint asperiores
        harum?
      </p>
      <hr />
      <div className="text-cyan-50 md:">HI Single!</div>
      <div className="text-cyan-100">HI Single!</div>
      <div className="text-cyan-200">HI Single!</div>
      <div className="text-cyan-300">HI Single!</div>
      <div className="text-cyan-400">HI Single!</div>
      <div className="text-cyan-500">HI Single!</div>
      <div className="text-cyan-600">HI Single!</div>
      <div className="text-cyan-700">HI Single!</div>
      <div className="text-cyan-800">HI Single!</div>
      <div className="text-cyan-900">HI Single!</div>
      <div className="text-cyan-950">HI Single!</div>

      <hr />
      <br />

      <div className="flex items-center gap-4 p-6 rounded-lg outline outline-black/5 shadow-md bg-white dark:bg-gray-800">
        <span className="inline-flex shrink-0 rounded-full border border-pink-300 bg-pink-100 p-2 dark:border-pink-300/10 dark:bg-pink-400/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-bell-icon lucide-bell size-6 stroke-pink-700 dark:stroke-pink-500"
          >
            <path d="M10.268 21a2 2 0 0 0 3.464 0" />
            <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
          </svg>
        </span>
        <div>
          <p className="text-gray-700 dark:text-gray-400">
            <span className="font-medium text-gray-950 dark:text-white">
              Tom Watson
            </span>{" "}
            mentioned you in{" "}
            <span className="font-medium text-gray-950 dark:text-white">
              Logo redesign
            </span>
          </p>
          <time className="block mt-1 text-gray-500" datetime="9:37">
            9:37am
          </time>
        </div>
      </div>

      <br />
      <hr />
      <div className="bg-gray-800 p-6 flex gap-4">
        <button className="bg-blue-500 text-white px-3 py-1.5 rounded-md font-semibold">
          Button A
        </button>
        <button className="bg-cyan-500 text-white px-3 py-1.5 rounded-md font-semibold">
          Button B
        </button>
        <button className="bg-pink-500 text-white px-3 py-1.5 rounded-md font-semibold">
          Button C
        </button>
      </div>

      <br />
      <hr />
      <br />

      <div className="bg-gray-800 p-6 flex gap-4">
        <button className="bg-blue-500 text-white px-3 py-1.5 rounded-md font-semibold">
          Button A
        </button>
        <button className="bg-blue-500/75 text-white px-3 py-1.5 rounded-md font-semibold">
          Button B
        </button>
        <button className="bg-blue-500/50 text-white px-3 py-1.5 rounded-md font-semibold">
          Button C
        </button>
        <button className="bg-blue-500/10 text-white px-3 py-1.5 rounded-md font-semibold">
          Button D
        </button>
        <button className="bg-[#50d71e] hover:bg-fuchsia-500 md:bg-green-500 lg:bg-regal-blue text-white px-3 py-1.5 rounded-md font-semibold">
          Button E
        </button>
      </div>

      <div>
        <p class="text-blue-600 dark:text-sky-400 dark:bg-gray-800">
          The quick brown fox...
        </p>
        <p class="text-blue-600/75 dark:text-sky-400/75">
          The quick brown fox...
        </p>
        <p class="text-blue-600/50 dark:text-sky-400/50">
          The quick brown fox...
        </p>
        <p class="text-blue-600/25 dark:text-sky-400/25">
          The quick brown fox...
        </p>
      </div>

      <br />
      <hr />
      <br />

      <div className="bg-gray-800 p-6 flex gap-4">
        <div className="size-12 border-4 border-indigo-500"></div>
        <div className="size-12 border-4 border-purple-500"></div>
        <div className="size-12 border-4 border-sky-500"></div>
      </div>

      <br />
      <hr />
      <br />

      <div className="bg-gray-800 p-6 grid grid-cols-2 gap-4">
        <div className="size-12 border-4 border-indigo-200 border-t-indigo-500"></div>
        <div className="size-12 border-4 border-indigo-200 border-r-indigo-500"></div>
        <div className="size-12 border-4 border-indigo-200 border-b-indigo-500"></div>
        <div className="size-12 border-4 border-indigo-200 border-l-indigo-500"></div>
        <div className="size-12 border-4 border-indigo-200 border-x-indigo-500"></div>
        <div className="size-12 border-4 border-indigo-200 border-y-indigo-500"></div>
        <div dir="ltr">
          <div className="size-12 border-4 border-indigo-200 border-s-indigo-500"></div>
        </div>
        <div dir="rtl">
          <div className="size-12 border-4 border-indigo-200 border-s-indigo-500"></div>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="bg-gray-800 p-6 grid grid-cols-2 gap-4 divide-x-4 divide-indigo-500">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>

      <br />
      <hr />
      <br />

      <div className="bg-gray-800 p-6 flex items-center justify-center">
        <input
          type="email"
          placeholder="jane@example.com"
          className="text-xs text-gray-700 px-2 py-1 rounded-md border-2 border-gray-700 focus:border-pink-600 focus:outline-none focus:ring-1 focus:ring-pink-600/50 transition-all duration-200"
        />
      </div>

      <br />
      <hr />
      <div className="bg-gray-800 p-6 flex gap-4">
        <button className="outline-2 outline-offset-2 outline-blue-500 text-white px-3 py-1.5 rounded-md font-semibold">
          Button A
        </button>
        <button className="outline-2 outline-offset-2 outline-cyan-500 text-white px-3 py-1.5 rounded-md font-semibold">
          Button B
        </button>
        <button className="outline-2 outline-offset-2 outline-pink-500 hover:outline-pink-500/40 text-white px-3 py-1.5 rounded-md font-semibold">
          Button C
        </button>
      </div>

      <br />
      <hr />
      <br />

      <div className="bg-white p-6 flex items-center flex-wrap gap-4 border">
        <div className="size-34 rounded-md shadow-2xs"></div>
        <div className="size-34 rounded-md shadow-xs"></div>
        <div className="size-34 rounded-md shadow-sm"></div>
        <div className="size-34 rounded-md shadow-md"></div>
        <div className="size-34 rounded-md shadow-lg"></div>
        <div className="size-34 rounded-md shadow-xl"></div>
        <div className="size-34 rounded-md shadow-2xl"></div>
        <div className="size-34 rounded-md shadow-2xl/25"></div>
        <div className="size-34 rounded-md shadow-2xl/50"></div>
        <div className="size-34 rounded-md shadow-2xl/75 md:shadow-none"></div>
      </div>

      <br />
      <hr />
      <div className="bg-gray-800 p-6 flex gap-4">
        <button className="bg-blue-500 shadow-lg shadow-blue-500/50 text-white px-3 py-1.5 rounded-md font-semibold">
          Button A
        </button>
        <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white px-3 py-1.5 rounded-md font-semibold">
          Button B
        </button>
        <button className="bg-pink-500 shadow-lg shadow-pink-500/50 text-white px-3 py-1.5 rounded-md font-semibold">
          Button C
        </button>
      </div>

      <br />
      <hr />
      <br />

      <div className="bg-white p-6 flex items-center flex-wrap gap-4 border">
        <div className="size-34 rounded-md inset-shadow-2xs/50"></div>
        <div className="size-34 rounded-md inset-shadow-xs/50"></div>
        <div className="size-34 rounded-md inset-shadow-sm/50"></div>
        <div className="size-34 rounded-md inset-shadow-sm/75"></div>
        <div className="size-34 rounded-md inset-shadow-sm/100"></div>
        <div className="size-34 rounded-md shadow-[0_35px_35px_rgba(0,0,0,0.25)]"></div>
        <div className="size-34 rounded-md shadow-3xl"></div>
        <div className="size-34 rounded-md inset-shadow-sm inset-shadow-indigo-500"></div>
        <div className="size-34 rounded-md inset-shadow-sm inset-shadow-indigo-500/50 md:inset-shadow-none"></div>
      </div>

      <br />
      <hr />
      <div className="bg-gray-800 p-6 flex gap-4">
        <button className="ring ring-blue-500 text-white px-3 py-1.5 rounded-md font-semibold">
          Button A
        </button>
        <button className="ring-2 ring-blue-500/50 md:ring-0 text-white px-3 py-1.5 rounded-md font-semibold">
          Button B
        </button>
        <button className="ring-4 text-white px-3 py-1.5 rounded-md font-semibold">
          Button C
        </button>
      </div>

      <br />
      <hr />
      <div className="bg-gray-800 p-6 flex gap-4">
        <button className="inset-ring inset-ring-blue-500 text-white px-3 py-1.5 rounded-md font-semibold">
          Button A
        </button>
        <button className="inset-ring-2 inset-ring-blue-500/50 md:inset-ring-0 text-white px-3 py-1.5 rounded-md font-semibold">
          Button B
        </button>
        <button className="inset-ring-4 text-white px-3 py-1.5 rounded-md font-semibold">
          Button C
        </button>
      </div>

      <br />
      <hr />
      <input type="checkbox" className="accent-pink-500" />
      <input
        type="checkbox"
        className="accent-pink-500/50 hover:accent-pink-500"
        checked
      />
      <input
        type="checkbox"
        className="accent-pink-500/50 hover:accent-pink-500"
      />
      <input type="text" className="caret-pink-500" placeholder="search" />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-6 fill-pink-500"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6 stroke-pink-500"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
        />
      </svg>

      {/* <div className="container">
        <div>1sabdbjiennnxjjiw</div>
        <div>1</div>
        <div>1</div>
        <div>1sfnsdnfna</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div> */}
    </>
  );
};

export default App;
