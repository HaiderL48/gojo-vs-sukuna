import React, { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");

  const itemRef = useRef();
  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    // it finds the cuurent element that we are on, then it gets it position
    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientX - top) / height;

    const titltX = (relativeY - 0.5) * 5;
    const titltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${titltX}deg) rotateY(${titltY}deg) scale3d(0.98,0.98,0.98)`;
    setTransformStyle(newTransform);
  };
  const handleMouseLeave = (e) => {};
  return (
    <div
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <img
        src={src}
        className="absolute top-0 left-0 size-full object-cover object-center"
        alt={title}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font tracking-[0.05em]">
            {title}
          </h1>
          {description && (
            <p className="mt-3 max-w-96 text-xs md:text-xl">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className=" px-5 py-32 ">
          <p className="font-circular-web  text-lg text-blue-50">
            Into the Metagame Layer
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            The rarest ocular jujutsu, granting Gojo absolute perception and
            near-infinite cursed energy efficiency.
          </p>
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="img/six-eyes.jpg"
            title={<>Six Eyes</>}
            description="The rarest ocular jujutsu, granting Gojo absolute perception and near-infinite cursed energy efficiency."
            isComingSoon={true}
          />
        </BentoTilt>
        <div className="flex gap-7 w-full ">
          <BentoTilt className="w-1/2 bento-tilt_1 h-96 md:h-[45rem]">
            <BentoCard
              src="img/sukuna.png"
              title={<>{` THE KING'S CLEAVE`}</>}
              description="Sukuna’s invisible slashing attacks that adjust to the target's toughness to ensure a clean cut."
            />
          </BentoTilt>

          <div className="flex flex-col w-1/2 gap-7">
            <BentoTilt className="bento-tilt_1 h-96 md:h-[22rem]">
              <BentoCard
                src="img/hollow-purple.jpg"
                title={<>Hollow Purple</>}
                description={`Gojo’s ultimate fusion of "Red" and "Blue" that erases everything in its path with imaginary mass.`}
              />
            </BentoTilt>
            <BentoTilt className="bento-tilt_1 h-96 md:h-[22rem]">
              <BentoCard
                src="img/fuga.jpg"
                title={<>Divine Flame (Fuga)</>}
                description="Sukuna’s lethal fire arrow that incinerates entire battlefields into ash with a single, devastating explosion."
              />
            </BentoTilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
