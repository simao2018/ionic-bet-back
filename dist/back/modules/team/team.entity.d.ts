import { BaseEntity } from "../../entities/base.entity";
import { TeamDto } from "./team.dto";
export declare class Team extends BaseEntity {
    label: string;
    logo?: string;
    sigle?: string;
    toDto(): TeamDto;
    fromDto(dto: TeamDto): void;
}
