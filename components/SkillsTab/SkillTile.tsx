import Image from "next/image";

export interface ISkillTileProps {
    name: string,
    iconUrl: string,
}

export default function SkillTile ({name, iconUrl}: ISkillTileProps) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center text-center">
        <Image src={iconUrl} alt={name} width={72} height={72} />
        <span className="text-lg md:text-2xl text-normal">{name}</span>
    </div>
  );
}
