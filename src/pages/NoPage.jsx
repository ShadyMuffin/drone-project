import { Link } from "react-router-dom";

function NoPage() {
  return (
    <div className=" text-center">
      <div className="text-white text-4xl">404 Not Found</div>

      <Link className="text-white text-3xl hover:text-emerald-600" to="/">
        Return to Home page.
      </Link>
    </div>
  );
}

export default NoPage;
