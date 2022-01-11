import { ListOfCategories } from "./categoriesUser/ListOfCategories";
import { ProfileUser } from "./ProfileUser/ProfileUser";
import "./dashboardStyle.css";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <ProfileUser />
      <ListOfCategories />
    </section>
  );
};

export { Dashboard };
