import { CardCategory } from "./CardCategory";
import { CreateCategory } from "./CreateCategory";

import "./categoriesDashboard.css";

const ListOfCategories = () => {
  return (
    <>
      <div className="categories__title">
        <h2>List of categories</h2>
      </div>
      <section className="categories">
        <section className="categories">
          <ul className="categories__list">
            <li>
              <CardCategory />
            </li>
            <li>
              <CardCategory />
            </li>
            <li>
              <CardCategory />
            </li>
            <li>
              <CreateCategory />
            </li>
          </ul>
        </section>
      </section>
    </>
  );
};

export { ListOfCategories };
