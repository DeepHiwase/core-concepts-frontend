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
      <ul className="list-disc md:list-none pl-5">
        <li>Cake</li>
        <li>Pastery</li>
        <li>Chocolate</li>
        <li>Lemon</li>
      </ul>
      <hr />
      <ol className="list-decimal md:list-none pl-5">
        <li>Cake</li>
        <li>
          <ol className="list-decimal sm:list-[circle] md:list-[upper-roman] lg:list-[lower-roman] pl-4">
            <li>Hi nested list</li>
            <li>Hi nested list 2</li>
            <li>Hi nested list 3</li>
          </ol>
        </li>
        <li>Chocolate</li>
        <li>Lemon</li>
      </ol>
      <hr />
      <ul className="list-disc list-outside md:list-inside pl-5">
        <li>Cakealsndalsnnalllllllllllllllllllllllasndaskmdamsdamlnasdl</li>
        <li>Pastery</li>
        <li>Chocolate</li>
        <li>Lemon</li>
      </ul>
      <hr />
      <ul className="list-disc list-image-none sm:list-image-[url(./checkmark.png)] md:list-image-[url(./tailwind-checkmark.svg)] pl-5">
        <li>Cakealsndalsnnalllllllllllllllllllllllasndaskmdamsdamlnasdl</li>
        <li>Pastery</li>
        <li>Chocolate</li>
        <li>Lemon</li>
      </ul>
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
