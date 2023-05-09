import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Our weight training classes are designed to provide individuals with a safe and effective workout experience that is tailored to their specific fitness needs and goals.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Our yoga classes are designed to provide individuals with a peaceful, rejuvenating, and holistic workout experience that focuses on improving physical, mental, and spiritual wellbeing.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Our ab core classes are designed to provide individuals with a challenging and effective workout that focuses on strengthening and toning the abdominal and core muscles.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Our adventure classes are designed to provide individuals with a fun, engaging, and effective workout experience that is tailored to their specific fitness needs and goals.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Our classes are suitable for individuals of all ages and fitness levels, and are led by experienced and certified fitness instructors who are passionate about helping individuals achieve their desired results.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Our training classes are designed to provide individuals with a comprehensive and personalized workout experience that is tailored to their unique fitness needs and goals",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <Htext>OUR CLASSES</Htext>
            <p className="py-5">
              Our classes are designed to provide individuals with a fun,
              engaging, and effective workout experience. Whether you are a
              beginner or an experienced fitness enthusiast, our classes are
              tailored to meet your specific fitness needs and goals.
            </p>
          </div>
        </motion.div>

        {/* slide scrolling images */}
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
