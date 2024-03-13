import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import Image from "next/image";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import placeholderImage from "../assets/hero-test-photo.jpg";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Carousel className="w-[80%]">
        <CarouselContent>
          <CarouselItem>
            <Card className="col-span-12 sm:col-span-4 h-[400px]">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  What to watch
                </p>
                <h4 className="text-white font-medium text-large">
                  Stream the Acme event
                </h4>
              </CardHeader>
              <Image
                src={placeholderImage}
                alt="Card background"
                className="z-0 w-full h-full object-cover"
              />
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card className="col-span-12 sm:col-span-4 h-[400px]">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  What to watch
                </p>
                <h4 className="text-white font-medium text-large">
                  Stream the Acme event
                </h4>
              </CardHeader>
              <Image
                src={placeholderImage}
                alt="Card background"
                className="z-0 w-full h-full object-cover"
              />
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card className="col-span-12 sm:col-span-4 h-[400px]">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  What to watch
                </p>
                <h4 className="text-white font-medium text-large">
                  Stream the Acme event
                </h4>
              </CardHeader>
              <Image
                src={placeholderImage}
                alt="Card background"
                className="z-0 w-full h-full object-cover"
              />
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card className="col-span-12 sm:col-span-4 h-[400px]">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  What to watch
                </p>
                <h4 className="text-white font-medium text-large">
                  Stream the Acme event
                </h4>
              </CardHeader>
              <Image
                src={placeholderImage}
                alt="Card background"
                className="z-0 w-full h-full object-cover"
              />
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
