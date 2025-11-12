import "./App.css";

const App = () => {
  return (
    <>
      <span className="">Hi Grid & Flex!</span>
      <div>
        <a href="#section-target" className="visited:text-red-400">
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
      <div>Hi There!</div>
      <br />
      <hr />
      <br />
      <button className="bg-sky-500 focus:outline-2 focus:outline-offset-2 focus:outline-sky-700 active:outline-violet-700 hover:bg-sky-700 dark:md:hover:bg-fuchsia-600 text-white px-2.5 py-1.5 text-sm font-semibold rounded-full">
        Save changes
      </button>

      <br />
      <hr />
      <div className="focus-within:shadow-lg">
        <input type="text" className="" />
      </div>

      <br />
      <hr />
      <button
        type="submit"
        className="focus-visible:outline-2 focus-visible:outline-amber-500"
      >
        Submit
      </button>

      <br />
      <hr />
      <div id="#section-target" className="target:shadow-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui saepe nobis
        consequuntur. Quis iure consectetur necessitatibus fugiat rem
        asperiores, voluptatibus tempora, distinctio aliquam, nihil laboriosam.
      </div>

      <br />
      <hr />
      <ul className="">
        <li className="first:text-red-500">1</li>
        <li>2</li>
        <li className="only:text-blue-500">3</li>
        <li className="last:text-green-500">4</li>
      </ul>

      <br />
      <hr />
      <ul className="">
        <li className="odd:bg-pink-500">1</li>
        <li className="odd:bg-pink-500">2</li>
        <li className="odd:bg-pink-500">3</li>
        <li className="even:bg-amber-500">4</li>
        <li className="empty:hidden"></li>
      </ul>

      <br />
      <hr />
      <input
        type="text"
        className="outline-2 outline-amber-300 disabled:opacity-75 enabled:hover:outline-pink-500"
        disabled
      />
      <input type="checkbox" name="" id="" className="checked:accent-blue-500" />
      <input type="checkbox" name="" id="" className="checked:accent-blue-500"  />
      <br />
      <input min="1" max="5" className="in-range:border-green-500 in-range:border-2" type="number" />

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
