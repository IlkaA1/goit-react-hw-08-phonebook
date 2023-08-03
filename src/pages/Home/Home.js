import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.flex}>
      <div className={css.title}>Welcome page </div>
      <div className={css.wrapper}>
        <img
          src="https://infra-cloudfront-talkdeskcom.svc.talkdeskapp.com/talkdesk_com/platform-security-compliance-protect-contact-center-data-operations-1740x1160.png"
          alt="phone book"
        ></img>
      </div>
    </div>
  );
};

export default Home;
