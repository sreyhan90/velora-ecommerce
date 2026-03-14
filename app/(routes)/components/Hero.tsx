import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CorouselList } from "@/app/constants";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {CorouselList.map((slider) => (
            <CarouselItem key={slider.id}>
              <Image
                alt="slider"
                src={slider.image}
                width={1920}
                height={1080}
                className="h-96 object-cover md:h-450px md:h-520px"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="letf-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
};

export default Hero;
