import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>Error 404: Page Not Found</h1>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
}
