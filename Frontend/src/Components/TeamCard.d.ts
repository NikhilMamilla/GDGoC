import { FC } from 'react';

interface TeamCardProps {
    name: string;
    role: string;
    img: string;
    linkedin?: string;
    github?: string;
    phone?: string;
}

declare const TeamCard: FC<TeamCardProps>;
export default TeamCard;
