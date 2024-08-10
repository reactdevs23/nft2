import { Link } from "react-router-dom";
import classes from "./Collection.module.css";
import { Text } from "components/common";

const Collection = ({ item }) => (
  <Link to={item.to}>
    <div className={classes.collection}>
      <div className={classes.images}>
        {item.images.slice(0, 3).map((image, index) => (
          <img
            src={image}
            alt="Collection item"
            className={classes.image}
            key={index}
          />
        ))}
        <div
          className={classes.counter}
          style={{
            backgroundColor: item.color,
          }}
        >
          <Text xl2 neutral7>
            +{item.images.length - 3}
          </Text>
        </div>
      </div>
      <div className={classes.details}>
        <div className={classes.box}>
          <Text xl2 neutral7 className={classes.title}>
            {item.title}
          </Text>
          <div className={classes.author}>
            <img src={item.avatar} alt="Avatar" className={classes.avater} />
            <Text lg neutral7>
              @{item.login}
            </Text>
          </div>
        </div>
        <div className={classes.box}>
          <Text lg neutral5>
            Floor price
          </Text>
          <Text lg neutral7>
            {item.price}
          </Text>
        </div>
      </div>
    </div>
  </Link>
);

export default Collection;
