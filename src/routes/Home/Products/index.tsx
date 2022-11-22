import { Outlet } from "react-router-dom";
import Card from "../../../components/Card";

export default function Products() {
  return (
    <>
      <main className="pdl20">
        <section className="container ">
          <Card />
        </section>
      </main>
      <Outlet />
    </>
  );
}
