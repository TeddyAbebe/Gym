import { SelectedPage, ClassType } from '@/shared/types';
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Class from './Class';

const classes: Array<ClassType> = [
  {
    name: 'Weight Training Classes',
    description:
      'Build strength and sculpt your body with our dynamic Weight Training Classes. Our expert trainers will guide you through effective workouts, ensuring proper form and technique for maximum results. Whether you are a beginner or an experienced lifter, these classes are tailored to challenge and empower you.',
    image: image1,
  },
  {
    name: 'Yoga Classes',
    image: image2,
  },
  {
    name: 'Ab Core Classes',
    description:
      'Define and strengthen your core with our Ab Core Classes. Engage in targeted exercises that focus on building a strong and toned midsection. Our classes combine effective ab workouts with a supportive community atmosphere to keep you motivated on your fitness journey.',
    image: image3,
  },
  {
    name: 'Adventure Classes',
    description:
      'Embark on an exciting fitness journey with our Adventure Classes. From outdoor activities to team-based challenges, these classes offer a unique and exhilarating way to stay fit. Join us for an adventure-filled experience that combines fitness and fun.',
    image: image4,
  },
  {
    name: 'Fitness Classes',
    image: image5,
  },
  {
    name: 'Training Classes',
    description:
      'Take your fitness journey to the next level with our specialized Training Classes. Our experienced trainers will guide you through personalized workouts, focusing on your individual goals and pushing you towards success. Elevate your training and achieve lasting results.',
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
            <HText>DISCOVER OUR DIVERSE CLASSES</HText>
            <p className="py-5">
              Elevate your fitness journey with our diverse range of classes
              designed to meet every fitness enthusiast's needs. Explore our
              dynamic programs led by expert instructors, each offering a unique
              blend of challenge and enjoyment.
            </p>
          </div>
        </motion.div>

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
