import React from "react";
import Image from "next/image";
import img from "../../../public/fold.jpg";
import Heading from "../ui/Typography/Heading";
import Paragraph from "../ui/Typography/Paragraph";
import { Button } from "../ui/Button";
import PageLayout from "../layout/GridLayout";

const AboveFoldSection = () => {
  return (
    <PageLayout className="py-[50px] md:py-[80px] lg:py-[160px]">
      <div className="col-start-1 col-end-[-1] lg:col-start-1 lg:col-span-7">
        <Heading as="h1" variant="bold" className="mb-4">
          Lessons and insights
          <span className="text-primary"> from 8 years</span>
        </Heading>
        <Paragraph
          size="md"
          variant="regular"
          className="text-neutral-gray mb-8"
        >
          Where to grow your business as a photographer: site or social media?
        </Paragraph>
        <Button kind="primary" text="Register" size="md" onClick={() => {}} />
      </div>
      <div className="col-start-1 col-end-[-1] lg:col-start-[-1] lg:col-end-[8] mt-5 lg:mt-0">
        <Image
          src={img}
          alt="Above the fold image"
          objectFit="cover"
          className="w-[180px] sm:w-[280px] lg:w-[391px]"
        />
      </div>
    </PageLayout>
  );
};

export default AboveFoldSection;
