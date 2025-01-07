// src/pages/Home.jsx
import React from "react";
import { Parallax } from "react-parallax";
import { useInView } from "react-intersection-observer";
import { WavyBackground } from "../components/ui/wavy-background";
import { LayoutGrid } from "../components/ui/layout-grid";


const SkeletonOne = () => {
  return (
    <div >
      <p className="font-bold md:text-2xl text-lg text-white">Portfolio Site</p>
      <p className="font-normal text-sm my-2 max-w-xs text-neutral-200">
        Showcase skills with custom animations and a visually appealing design.
      </p>
      <ul className="text-neutral-200 mt-2 list-disc list-inside text-sm">
        <li>Customizable project sections</li>
        <li>Interactive hover effects</li>
        <li>SEO-optimized</li>
      </ul>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-2xl text-lg text-white">E-commerce Store</p>
      <p className="font-normal text-sm my-2 max-w-xs text-neutral-200">
        Functional online store with smooth checkout and secure payments.
      </p>
      <ul className="text-neutral-200 mt-2 list-disc list-inside text-sm">
        <li>Product filtering</li>
        <li>Cart and wishlist</li>
        <li>Mobile optimized</li>
      </ul>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-2xl text-lg text-white">Blog</p>
      <p className="font-normal text-sm my-2 max-w-xs text-neutral-200">
        Engaging blog with easy navigation and comment system.
      </p>
      <ul className="text-neutral-200 mt-2 list-disc list-inside text-sm">
        <li>Responsive design</li>
        <li>SEO and social sharing</li>
        <li>Comment moderation</li>
      </ul>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-2xl text-lg text-white">Landing Page</p>
      <p className="font-normal text-sm my-2 max-w-xs text-neutral-200">
        High-converting page with clear CTAs for engagement.
      </p>
      <ul className="text-neutral-200 mt-2 list-disc list-inside text-sm">
        <li>Fast loading</li>
        <li>A/B testing</li>
        <li>Analytics integration</li>
      </ul>
    </div>
  );
};


 
const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-900 overflow-hidden">
      <Parallax
       
      >
        <section className="flex flex-col items-center justify-center h-screen text-white text-center bg-black bg-opacity-10">
        <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl  text-white font-bold inter-var text-center">
        Welcome to PixelCraft
      </p>
      <p className="text-2xl md:text-4xl lg:text-4xl mt-7 text-white font-bold inter-var text-center">
        best website  for frontend developement 
      </p>
    </WavyBackground>
        </section>
      </Parallax>

      




      <Parallax
        bgImage="https://i.postimg.cc/CLKgtvvX/bg.jpg"
        strength={400}
      >
      <section >
        
        <SectionInView className=" max-h-screen overflow-visible  flex  items-center justify-center py-5 px-6  md:px-20 bg-black bg-opacity-10 text-center">
                    <h2 className="text-5xl font-semibold mb-12">Showcasing Excellence</h2>

      <div className="h-screen py-0 w-full">
      <LayoutGrid cards={cards} />
      
    </div>

    
      </SectionInView>
      </section>
      </Parallax>

      <Parallax
        bgImage="https://i.postimg.cc/0yS6h2jz/bg1.jpg"
        strength={400}
      >
        <section className="py-24 px-6 md:px-20 bg-black bg-opacity-60 text-white text-center">
          <h2 className="text-5xl font-semibold mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                text: "WebBuild helped us launch our website faster than expected. We love the drag-and-drop builder.",
                author: "Sarah J., CEO",
              },
              {
                text: "We increased our web traffic by 50% within 3 months of using WebBuild's SEO tools.",
                author: "Mark T., Digital Marketer",
              },
              {
                text: "The customizable templates made it easy to get started, and the results speak for themselves.",
                author: "Lucas D., Freelancer",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white bg-opacity-75 text-gray-900 p-8 rounded-xl shadow-lg">
                <p className="italic mb-4">{testimonial.text}</p>
                <h4 className="font-semibold text-blue-600">{testimonial.author}</h4>
              </div>
            ))}
          </div>
        </section>
      </Parallax>

      <Parallax
        bgImage="https://i.postimg.cc/CLKgtvvX/bg.jpg"
        strength={600}
        blur={{ min: -5, max: 10 }}
      >
        <section className="py-24 px-6 md:px-20 bg-black bg-opacity-20 text-center text-black">
          <h2 className="text-5xl font-semibold mb-12">Showcasing Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Portfolio Site", description: "A sleek portfolio with custom animations." },
              { name: "E-commerce Store", description: "Fully functional online store ready to go live." },
              { name: "Blog", description: "Beautifully designed blog with rich media content." },
            ].map((project, idx) => (
              <div key={idx} className="bg-gray-50 bg-opacity-80 p-8 rounded-xl shadow-xl">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">{project.name}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Parallax>

      <Parallax
        bgImage="https://i.postimg.cc/0yS6h2jz/bg1.jpg"
        strength={400}
      >
      <section className="py-24 px-6 md:px-20 bg-black bg-opacity-20 text-center text-white">
  <div className="absolute inset-0 bg-black opacity-40"></div> {/* Background overlay for depth */}

  <div className="relative z-10">
    <h2 className="text-5xl font-semibold mb-6 leading-tight">
      Ready to Take Your Business to New Heights?
    </h2>
    <p className="text-lg mb-8 max-w-3xl mx-auto opacity-80">
      Join thousands of businesses who are building their future with our cutting-edge platform. Start your free trial today and experience the power of professional web development tools at your fingertips.
    </p>
    <button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white font-bold py-4 px-12 rounded-full shadow-xl transform transition duration-300 ease-in-out hover:scale-110 hover:shadow-2xl focus:outline-none">
      Start Free Trial
    </button>
  </div>
</section>
</Parallax>


    </div>
  );
};

const SectionInView = ({ children, className }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`${className} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-700`}
    >
      {children}
    </div>

    
  );
};

export default Home;
