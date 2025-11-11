import "./App.css";

const App = () => {
  return (
    <>
      <span className="underline decoration-wavy decoration-1 sm:overline sm:decoration-dotted md:no-underline lg:line-through lg:decoration-dashed lg:decoration-5 underline-offset-3 hover:underline-offset-4">
        Hi Grid & Flex!
      </span>
      <div>
        <a
          href="https://x.com"
          className="text-blue-600 font-bold no-underline hover:underline hover:-underline-offset-10 md:hover:decoration-[#99bb82]/95 decoration-red-600/45 lg:overline lg:decoration-3 lg:decoration-regal-blue lg:decoration-double"
        >
          Deep
        </a>
      </div>
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
