import Card from "./Card";
import classes from "./Blogs.module.css";
import Modal from "./Modal";
import { useState } from "react/cjs/react.development";
const Blogs = (props) => {
  const [showReadMoreModal, setShowReadMoreModal] = useState(false);
  return (
    <div>
      {showReadMoreModal && (
        <Modal
          onClose={()=>{setShowReadMoreModal(false)}}
          className={classes.readMoreModal}
          styleOverride={{"top":"20%", "left":"30%"}}
        >
          <h3>{props.title}</h3>
          <h5>Category : {props.category}</h5>
          <div className={classes.longDesContainer}>{props.longDes}</div>
        </Modal>
      )}
      <Card className={props.cardClassName || classes.card}>
        <div className={props.contentClassName || classes.content}>
          <div className={classes.header}>
            <img
              className={classes.icon}
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
              alt="Display"
            />{" "}
            <div className={classes.tu}>
              <header className={classes.title}>{props.title}</header>
              <div className={classes.uname}>{props.userName}</div>
            </div>
            <button className={classes.colab}>Colab</button>
          </div>
          <img className={classes.image} src={props.img} alt="Blog" />
          <div className={classes.shortDesc}>
            {props.shortDes}
            <div className={classes.readMore} onClick={()=>{setShowReadMoreModal(true)}}>
              Read more
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default Blogs;
