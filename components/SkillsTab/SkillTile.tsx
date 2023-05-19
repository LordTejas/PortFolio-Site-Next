import Image from "next/image";

export interface ISkillTileProps {
    name: string,
    iconUrl: string,
}

export default function SkillTile ({name, iconUrl}: ISkillTileProps) {
  return (
    <div className="w-full h-full flex flex-col gap-2 justify-between items-center text-center">
        <Image src={iconUrl} alt={name} width={72} height={72} />
        <span className="text-bold sm:text-lg md:text-2xl text-normal">{name}</span>
    </div>
  );
}
