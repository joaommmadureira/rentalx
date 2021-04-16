import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    findByName(nome: string): Specification;
    create({ name, description }: ICreateSpecificationDTO);
}

export { ISpecificationRepository, ICreateSpecificationDTO };
