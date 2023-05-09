import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import Benefit from "./Benefit";

//benefits=>  array of objects that contains the data for the benefits
//BenefitType=> type of the benefit object
const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-10 w-10" />,
    title: "state of the art facility",
    description:
      "If you're looking for a gym that offers the latest fitness technologies and equipment, a state-of-the-art fitness facility is the perfect place for you.",
  },
  {
    icon: <UserGroupIcon className="h-10 w-10" />,
    title: "Community of like minded people",
    description:
      "Members of these communities support and motivate each other to reach their fitness goals, share tips and advice, and celebrate each other's successes.",
  },
  {
    icon: <AcademicCapIcon className="h-10 w-10" />,
    title: "Expert and certified trainers",
    description:
      "By working with an expert and certified trainer, individuals can benefit from personalized guidance and support that helps them achieve their fitness goals faster and more efficiently. ",
  },
];
// container is used to animate the benefits
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        // viewPortEnter is a prop that is used to trigger an event when the element is in view
        // in simple words it highlights it in the navbar when the element or page in view by an user
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* header part */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{  duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext>MORE THAN JUST GYM.</Htext>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          //parent variant that is used to animate the benefits
          variants={container}
        >
          {/* map through the benefits array and render the Benefit component */}
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benefits;
