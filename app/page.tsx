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
                <p className="text-lg text-white/60 uppercase font-bold">
                  Informatii noi sau importante merg aici
                </p>
                <h4 className="text-white font-medium text-4xl">
                  Descriere mai detaliata aici
                </h4>
              </CardHeader>
              <Image
                src={placeholderImage}
                alt="Card background"
                className="z-0 w-full h-full object-cover brightness-75"
              />
              <CardFooter className="justify-between   overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <Button
                  className="text-lg text-white bg-black"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="md"
                >
                  Mai multe detalii
                </Button>
              </CardFooter>
            </Card>
          </CarouselItem>

          <CarouselItem>
            <Card className="col-span-12 sm:col-span-4 h-[400px]">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-lg text-white/60 uppercase font-bold">
                  Informatii noi sau importante merg aici
                </p>
                <h4 className="text-white font-medium text-4xl">
                  Descriere mai detaliata aici
                </h4>
              </CardHeader>
              <Image
                src={placeholderImage}
                alt="Card background"
                className="z-0 w-full h-full object-cover brightness-75"
              />
              <CardFooter className="justify-between   overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <Button
                  className="text-lg text-white bg-black"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="md"
                >
                  Mai multe detalii
                </Button>
              </CardFooter>
            </Card>
          </CarouselItem>

          <CarouselItem>
            <Card className="col-span-12 sm:col-span-4 h-[400px]">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-lg text-white/60 uppercase font-bold">
                  Informatii noi sau importante merg aici
                </p>
                <h4 className="text-white font-medium text-4xl">
                  Descriere mai detaliata aici
                </h4>
              </CardHeader>
              <Image
                src={placeholderImage}
                alt="Card background"
                className="z-0 w-full h-full object-cover brightness-75"
              />
              <CardFooter className="justify-between   overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <Button
                  className="text-lg text-white bg-black"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="md"
                >
                  Mai multe detalii
                </Button>
              </CardFooter>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
