import { Link } from "react-router-dom";
import styles from "./Slide169Cause.module.css";

const Slide169Cause = () => {
  return (
    <div className={styles.slide169Cause}>
      <div className={styles.homeDiv}>
        <Link className={styles.logoA} to="/slide-169-1">
          <div className={styles.rectangleDiv} />
          <div className={styles.groupDiv}>
            <div className={styles.deblisDiv}>Deblis</div>
            <img className={styles.vectorIcon} alt="" src="../vector.svg" />
          </div>
        </Link>
        <button className={styles.frameButton}>
          <div className={styles.frameDiv}>
            <div className={styles.groupDiv1}>
              <img
                className={styles.image2Icon}
                alt=""
                src="../image-2@2x.png"
              />
              <div className={styles.connectWalletDiv}>Connect Wallet</div>
            </div>
          </div>
        </button>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search"
        />
        <div className={styles.causeDiv}>
          <img className={styles.vectorIcon1} alt="" src="../vector1.svg" />
          <div className={styles.groupDiv2}>
            <div className={styles.wereHereForACause}>
              We’re here for a cause
            </div>
          </div>
        </div>
        <button className={styles.regularShoppingBasket}>
          <img
            className={styles.shoppingBasketRegularIcon}
            alt=""
            src="../shoppingbasketregular.svg"
          />
        </button>
        <button className={styles.regularBell}>
          <img
            className={styles.bellRegularIcon}
            alt=""
            src="../bellregular.svg"
          />
        </button>
        <div className={styles.rectangleDiv1} />
        <div className={styles.madeWithByTeamKasukabeD}>
          {" "}
          made with ❤ by team kasukabe defence group ️
        </div>
        <div className={styles.logoDiv}>
          <div className={styles.rectangleDiv} />
          <div className={styles.groupDiv}>
            <div className={styles.deblisDiv}>Deblis</div>
            <img className={styles.vectorIcon} alt="" src="../vector2.svg" />
          </div>
        </div>
        <div className={styles.whatIsDeblis}>What is Deblis?</div>
        <div className={styles.teamKasukabeDefenceGroup}>
          Team : Kasukabe Defence group
        </div>
        <div className={styles.over90OfPeopleWithDisabi}>
          <p className={styles.over90Of}>
            Over 90% Of People With Disabilities Lack Access To Assistive
            Devices.
          </p>
          <p className={styles.over90Of}>
            India's disabled population increased by more than 22 percent
            between the 2001 and 2011 censuses. The report notes that the global
            population requiring assistive products will touch 3.5 billion by
            2050.
          </p>
          <p className={styles.over90Of}>
            Disability refers to the interaction between individuals with a
            health condition (e.g., cerebral palsy, Down syndrome, and
            depression) and personal and environmental factors (e.g., negative
            attitudes, inaccessible transportation, public buildings, and
            limited social support). The number of people experiencing
            disability is increasing due to a rise in chronic health conditions
            and population aging.
          </p>
          <p className={styles.over90Of}>
            In many low-income and middle-income countries, only 5–15% of people
            who require assistive devices and technologies have access to them
            (34). In these countries, production is low and often of limited
            quality, there are very few trained personnel and costs may be
            prohibitive.
          </p>
          <p className={styles.impairmentWhichCan}>
            impairment which can be Intellectual, limitations, cognitive,
            improvement, sensory, exercise, or a mixture of all these.
            Incapacity impacts a person’s activities and may happen at birth.
            Sometimes, it could happen in adulthood
          </p>
        </div>
      </div>
      <div className={styles.groupDiv4}>
        <div className={styles.groupDiv5}>
          <div className={styles.frameDiv1} />
          <img className={styles.frameIcon} alt="" src="../frame-11@2x.png" />
          <div className={styles.satyamShuklaDiv}>Satyam Shukla</div>
          <div className={styles.productUXDesign}>{`Product & UX Design`}</div>
        </div>
        <div className={styles.groupDiv6}>
          <div className={styles.frameDiv1} />
          <div className={styles.frameDiv3}>
            <img
              className={styles.image2Icon1}
              alt=""
              src="../image-21@2x.png"
            />
          </div>
          <div className={styles.satyamShuklaDiv}>Unnati Chhabra</div>
          <div className={styles.productUXDesign}>{`Frontend & research`}</div>
        </div>
        <div className={styles.groupDiv7}>
          <div className={styles.frameDiv1} />
          <div className={styles.frameDiv3}>
            <img
              className={styles.photogridphotocollagemakerphIcon}
              alt=""
              src="../photogridphotocollagemakerphotoeditor-1@2x.png"
            />
          </div>
          <div className={styles.satyamShuklaDiv}>Prakhar Sharma</div>
          <div className={styles.productUXDesign}>Backend</div>
        </div>
        <div className={styles.groupDiv8}>
          <div className={styles.frameDiv1} />
          <div className={styles.frameDiv3}>
            <img className={styles.image1Icon} alt="" src="../image-1@2x.png" />
          </div>
          <div className={styles.satyamShuklaDiv}>Riya Agarwal</div>
          <div className={styles.productUXDesign}>Frontend</div>
        </div>
      </div>
    </div>
  );
};

export default Slide169Cause;
