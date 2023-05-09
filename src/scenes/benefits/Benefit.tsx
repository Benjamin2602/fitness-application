import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// framer motion
const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    };


type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;
  };
// icon , title , description, setSelectedPage are passed as props from index.tsx in benefits folder
const Benefit = ({icon , title , description, setSelectedPage} : Props) => {
  return (
    <motion.div
    //child variant is used to animate the benefits
    variants={childVariant}
     className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
        <div className="mb-4 flex justify-center">
            <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
                {icon}
            </div>

        </div>
        <h4 className="font-bold">{title}</h4>
        <p className="my-3">{description}</p>

        {/* learn more button */}
        <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>learn more</p>
            </AnchorLink>


    </motion.div>
  )
}

export default Benefit