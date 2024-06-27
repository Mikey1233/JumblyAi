import Image from "next/image";

// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { cn } from "@/lib/utils";

interface UserAvatarProps {
  name?: string | null;
  image?: string | null;
  className?: string;
}

export function UserAvatar({ name, image, className }: UserAvatarProps) {
  return (
    <div className={className}>
      {image && (
        <Image
          src={image}
          alt={name || 'user name'}
          width={40}
          height={40}
          className="rounded-full"
        />
      )}
      {/* <div
        className="dark:bg-white dark:text-black text-lg"
      >
        {name
          ?.split(" ")
          .map((n) => n[0])
          .join("")}
      </div> */}
    </div>
  );
}
