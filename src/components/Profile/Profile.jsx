import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.box}>
      <div className={css.boxInfo}>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.bottomBox}>
        <li className={css.bottomItem}>
          <span className={css.bottomText}>Followers</span>
          <span className={css.bottomQuantity}>{followers}</span>
        </li>
        <li className={css.bottomItem}>
          <span className={css.bottomText}>Views</span>
          <span className={css.bottomQuantity}>{views}</span>
        </li>
        <li className={css.bottomItem}>
          <span className={css.bottomText}>Likes</span>
          <span className={css.bottomQuantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
