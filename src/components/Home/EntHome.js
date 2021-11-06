import AllBlogs from "./AllBlogs";
import AllNews from "./AllNews";
import classes from "./EntHome.module.css"

const EntHome = (props) => {
  return (
    <div>
      <AllBlogs className={classes.content}/>
      <AllNews/>
    </div>
  );
};
export default EntHome;
