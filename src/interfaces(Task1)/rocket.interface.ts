export interface IRocket {
    rocket_name: string;
    first_stage: IFirstStage;
    second_stage: ISecondStage;
}

export interface IFirstStage {
    cores: ICores[];
}

export interface ICores {
    flight: number;
    core: ICore;
}

export interface ICore {
    reuse_count: number;
    status: string;
}

export interface ISecondStage {
    payloads: IPayloads[];
}

export interface IPayloads {
    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number;
}