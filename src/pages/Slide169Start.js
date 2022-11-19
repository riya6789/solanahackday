import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Slide169Start.module.css";

const Slide169Start = () => {
  const navigate = useNavigate();

  const onFrameButton1Click = useCallback(() => {
    navigate("/slide-169-1");
  }, [navigate]);

  return (
    <div className={styles.slide169Start}>
      <div className={styles.homeDiv}>
        <div className={styles.logoDiv}>
          <div className={styles.rectangleDiv} />
          <div className={styles.groupDiv}>
            <div className={styles.deblisDiv}>Deblis</div>
            <img className={styles.vectorIcon} alt="" src="../vector3.svg" />
          </div>
        </div>
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
          <img className={styles.vectorIcon1} alt="" src="../vector4.svg" />
          <div className={styles.groupDiv2}>
            <div className={styles.wereHereForACause}>
              We’re here for a cause
            </div>
            <button className={styles.ourStoryButton}>
              <Link className={styles.groupA} to="/frame-6">
                <div className={styles.ourStoryDiv}>Our story</div>
                <img
                  className={styles.materialSymbolschevronRightIcon}
                  alt=""
                  src="../materialsymbolschevronrightrounded.svg"
                />
              </Link>
            </button>
          </div>
        </div>
        <button className={styles.regularShoppingBasket}>
          <img
            className={styles.shoppingBasketRegularIcon}
            alt=""
            src="../shoppingbasketregular1.svg"
          />
        </button>
        <button className={styles.regularBell}>
          <img
            className={styles.bellRegularIcon}
            alt=""
            src="../bellregular1.svg"
          />
        </button>
        <div className={styles.suggestedForYou}>Suggested for you</div>
        <div className={styles.bestSellersDiv}>Best sellers</div>
        <div className={styles.viewMoreDiv}>View More</div>
        <div className={styles.viewMoreDiv1}>View More</div>
        <div className={styles.groupDiv3}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <img className={styles.image4Icon} alt="" src="../image-4@2x.png" />
          <div className={styles.blindStickDiv}>Blind stick</div>
          <div className={styles.div}>1.3 (1365.5)</div>
          <img className={styles.image5Icon} alt="" src="../image-5@2x.png" />
        </div>
        <div className={styles.groupDiv4}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <img className={styles.image4Icon} alt="" src="../image-41@2x.png" />
          <div className={styles.blindStickDiv}>Blind stick</div>
          <div className={styles.div1}>1.3 (1365.5)</div>
          <img className={styles.image5Icon} alt="" src="../image-51@2x.png" />
        </div>
        <div className={styles.groupDiv5}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <img className={styles.image4Icon} alt="" src="../image-42@2x.png" />
          <div className={styles.blindStickDiv}>Blind stick</div>
          <div className={styles.div1}>1.3 (1365.5)</div>
          <img className={styles.image5Icon} alt="" src="../image-52@2x.png" />
        </div>
        <div className={styles.groupDiv6}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <img className={styles.image4Icon} alt="" src="../image-43@2x.png" />
          <div className={styles.blindStickDiv}>Blind stick</div>
          <div className={styles.div}>1.3 (1365.5)</div>
          <img className={styles.image5Icon} alt="" src="../image-53@2x.png" />
        </div>
        <div className={styles.groupDiv7}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <img className={styles.image4Icon} alt="" src="../image-44@2x.png" />
          <div className={styles.blindStickDiv}>Blind stick</div>
          <div className={styles.div4}>1.3 (1365.5)</div>
          <img className={styles.image5Icon} alt="" src="../image-54@2x.png" />
        </div>
        <div className={styles.groupDiv8}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <img className={styles.image4Icon} alt="" src="../image-45@2x.png" />
          <div className={styles.blindStickDiv}>Blind stick</div>
          <div className={styles.div5}>1.3 (1365.5)</div>
          <img className={styles.image5Icon} alt="" src="../image-55@2x.png" />
        </div>
        <div className={styles.groupDiv9}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <img className={styles.image4Icon} alt="" src="../image-46@2x.png" />
          <div className={styles.blindStickDiv}>Blind stick</div>
          <div className={styles.div1}>1.3 (1365.5)</div>
          <img className={styles.image5Icon} alt="" src="../image-56@2x.png" />
        </div>
        <div className={styles.groupDiv10}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <img className={styles.image4Icon} alt="" src="../image-47@2x.png" />
          <div className={styles.blindStickDiv}>Blind stick</div>
          <div className={styles.div}>1.3 (1365.5)</div>
          <img className={styles.image5Icon} alt="" src="../image-57@2x.png" />
        </div>
        <div className={styles.groupDiv11}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <img className={styles.image4Icon} alt="" src="../image-48@2x.png" />
          <div className={styles.blindStickDiv}>Blind stick</div>
          <div className={styles.div4}>1.3 (1365.5)</div>
          <img className={styles.image5Icon} alt="" src="../image-58@2x.png" />
        </div>
        <div className={styles.groupDiv12}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <img className={styles.image4Icon} alt="" src="../image-49@2x.png" />
          <div className={styles.blindStickDiv}>Blind stick</div>
          <div className={styles.div5}>1.3 (1365.5)</div>
          <img className={styles.image5Icon} alt="" src="../image-59@2x.png" />
        </div>
        <div className={styles.groupDiv13}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <img className={styles.image4Icon} alt="" src="../image-410@2x.png" />
          <div className={styles.blindStickDiv}>Blind stick</div>
          <div className={styles.div4}>1.3 (1365.5)</div>
          <img className={styles.image5Icon} alt="" src="../image-510@2x.png" />
        </div>
        <div className={styles.groupDiv14}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <img className={styles.image4Icon} alt="" src="../image-411@2x.png" />
          <div className={styles.blindStickDiv}>Blind stick</div>
          <div className={styles.div5}>1.3 (1365.5)</div>
          <img className={styles.image5Icon} alt="" src="../image-511@2x.png" />
        </div>
        <div className={styles.frameDiv1} />
        <div className={styles.rectangleDiv25} />
        <div className={styles.madeWithByTeamKasukabeD}>
          {" "}
          made with ❤ by team kasukabe defence group ️
        </div>
        <div className={styles.subscribeToOurNewsletter}>
          Subscribe to our newsletter
        </div>
        <div className={styles.logoDiv1}>
          <div className={styles.rectangleDiv} />
          <div className={styles.groupDiv}>
            <div className={styles.deblisDiv}>Deblis</div>
            <img className={styles.vectorIcon} alt="" src="../vector5.svg" />
          </div>
        </div>
        <div className={styles.groupDiv16}>
          <input
            className={styles.groupInput}
            type="text"
            placeholder="Email Id"
          />
          <button className={styles.subscribeButton}>
            <div className={styles.subscribeDiv}>Subscribe</div>
          </button>
        </div>
        <div className={styles.subscribeToOurNewsletterAn}>
          Subscribe to our newsletter and get updates from round the workld
        </div>
        <div className={styles.mainDiv}>
          <div className={styles.rectangleDiv27} />
          <div className={styles.rectangleDiv28} />
          <div className={styles.rectangleDiv29} />
          <div className={styles.shopFrom100ProductsForSp}>
            Shop from 100+ products for specially abled people
          </div>
          <img className={styles.image3Icon} alt="" src="../image-3@2x.png" />
          <button className={styles.shopNow}>
            <div className={styles.frameDiv2}>
              <div className={styles.subscribeDiv}>Shop now</div>
            </div>
          </button>
        </div>
        <div className={styles.rectangleDiv30} />
      </div>
      <div className={styles.rectangleDiv31} />
      <div className={styles.welcomeToDeblis}>Welcome to Deblis</div>
      <div className={styles.chooseTheTypeOfDisablity}>
        Choose the type of disablity
      </div>
      <div className={styles.chooseASubType}>Choose a sub type</div>
      <button className={styles.frameButton1} onClick={onFrameButton1Click}>
        <div className={styles.frameDiv3}>
          <div className={styles.groupDiv17}>
            <div className={styles.doneDiv}>Done</div>
          </div>
        </div>
      </button>
      <div className={styles.div12}>हिन्दी</div>
      <button className={styles.component1Button}>
        <div className={styles.subscribeDiv}>Physical</div>
      </button>
      <button className={styles.component5Button}>
        <div className={styles.subscribeDiv}>Locomotor</div>
      </button>
      <button className={styles.component6Button}>
        <div className={styles.subscribeDiv}>Leprosy Cured</div>
      </button>
      <button className={styles.component7Button}>
        <div className={styles.subscribeDiv}>Cerebral Palsy</div>
      </button>
      <button className={styles.component8Button}>
        <div className={styles.subscribeDiv}>Muscular Dystrophy</div>
      </button>
      <button className={styles.component2Button}>
        <div className={styles.subscribeDiv}>Intellectual</div>
      </button>
      <button className={styles.component3Button}>
        <div className={styles.subscribeDiv}>Mental</div>
      </button>
      <button className={styles.component4Button}>
        <div className={styles.subscribeDiv}>Chronic Neurological</div>
      </button>
      <button className={styles.component7Button1}>
        <div className={styles.subscribeDiv}>Acid Attack Victims</div>
      </button>
    </div>
  );
};

export default Slide169Start;
