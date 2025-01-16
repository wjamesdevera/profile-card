import profilePhoto from "../assets/winfrey.jpg";
const Avatar = () => {
  return (
    <div className="avatar">
      <img src={profilePhoto} alt="" className="img" />
    </div>
  );
};

export default Avatar;
