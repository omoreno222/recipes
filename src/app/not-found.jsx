import Link from "next/link";

const notFound = () => {
  return (
    <div>
      <h1>This page cannot be found</h1>
      <Link href={"/"}>go Home</Link>
    </div>
  );
};

export default notFound;
