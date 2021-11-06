import AllBlogs from "../Home/AllBlogs";
import Card from "../UI/Card";
import classes from "./ProfileForm.module.css";

const ProfileForm = (props) => {
 const onEditClickHandler=(event)=>{
     event.preventDefault();
     console.log("clicked")

 }
  return (
    <div>
      <Card className={classes.userDet}>
        <div className={classes.content}>
          <header className={classes.header}>About You!</header>
          <div className={classes.innercontent}>
            <div className={classes.label}> Name</div>
            <p className={classes.value}>Charanya A G</p>
          </div>
          <div className={classes.innercontent}>
            <div className={classes.label}> Name</div>
            <p className={classes.value}>Charanya A G</p>
          </div><div className={classes.innercontent}>
            <div className={classes.label}> Name</div>
            <p className={classes.value}>Charanya A G</p>
          </div><div className={classes.innercontent}>
            <div className={classes.label}> Name</div>
            <p className={classes.value}>Charanya A G</p>
          </div><div className={classes.innercontent}>
            <div className={classes.label}> Name</div>
            <p className={classes.value}>Charanya A G</p>
          </div><div className={classes.innercontent}>
            <div className={classes.label}> Name</div>
            <p className={classes.value}>Charanya A G</p>
          </div>
          <button onClick={onEditClickHandler}>Edit</button>
        </div>
      </Card>
      <div>
        <AllBlogs></AllBlogs>
      </div>
    </div>
  );
};
export default ProfileForm;
