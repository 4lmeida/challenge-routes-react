import { Outlet } from "react-router-dom";
import Card from "../../../components/Card";

export default function Products() {
  return (
    <>
      <main>
        <section className="container ">
          <Card />
        </section>
      </main>
      <Outlet />
    </>
  );
}
