import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* Image and Main Header */}
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        {/* main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* headings */}
          <div className="md:-mt-20">
            {/* parent div tag */}
            <div className="relative">
              {/* evolve text {child div tag} */}
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="text" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-8 flex items-center gap-8 ">
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>learn more</p>
            </AnchorLink>
          </div>
        </div>
        {/* image */}
        <div
          className="flex basis-3/5 justify-center md:z-10
                md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </div>

      {/* sponsors */}
      {isAboveMediumScreens && (
        <div>
          <div>
            <div>
              <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default Home;
