import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

interface IPhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ className, imgSrc, dark = false, ...props }: IPhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        alt="phone image"
        className="pointer-events-none z-50 select-none w-full h-full"
        width={0}
        height={0}
        sizes="100vw"
      />

      <div className="absolute -z-10 inset-0">
        <Image
          className="object-cover min-w-full min-h-full "
          src={imgSrc}
          alt="overlaying phone image"
          fill
        />
      </div>
    </div>
  );
};

export default Phone;
