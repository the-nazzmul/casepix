"use client";

import Phone from "@/components/Phone";
import { cn } from "@/lib/utils";
import { COLORS, MODELS } from "@/validator/option-validator";
import { Configuration } from "@prisma/client";
import { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";

const DesignPreview = ({ configuration }: { configuration: Configuration }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => setShowConfetti(true));

  const { color, model } = configuration;
  const tw = COLORS.find(
    (supportedColor) => supportedColor.value === color
  )?.value;

  const { label: modelLabel } = MODELS.options.find(
    ({ value }) => value === model
  )!;

  return (
    <>
      <div
        area-hidden="true"
        className="pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center"
      >
        <Confetti
          active={showConfetti}
          config={{ elementCount: 200, spread: 90 }}
        />
      </div>
      <div className="mt-20 grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12">
        <div className="sm:col-span-4 md:col-span-3 md:row-span-2 md:row-end-2">
          <Phone
            className={cn(
              `${{
                "bg-zinc-900": tw === "black",
                "bg-blue-950": tw === "blue",
                "bg-rose-950": tw === "rose",
              }}`
            )}
            imgSrc={configuration.croppedImageUrl as string}
          />
        </div>
      </div>
    </>
  );
};

export default DesignPreview;
