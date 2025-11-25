import Comments from "./Comments";

function Header() {

  return (
    <>

      <div className="text-center p-6 text-pink-500 text-2xl bg-slate-900 font-bold">Feedback UI</div>

      <div className=" bg-white text-black mx-auto w-2/5 rounded-xl mt-24 p-6 shadow">
          <h3 className="text-center font-semibold">How would you rate your service with us?</h3>
      </div>
    </>
  );
}

export default Header;
