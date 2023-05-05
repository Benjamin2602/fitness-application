import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const index = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        // viewPortEnter is a prop that is used to trigger an event when the element is in view
        // in simple words it highlights it in the navbar when the element or page in view by an user
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* header part */}
        <div className="md:my-5 md:w-3/5">
          <Htext>MORE THAN JUST GYM.</Htext>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default index;
