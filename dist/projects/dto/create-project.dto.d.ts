import { CreateUserDto } from 'src/users/dto/create-user.dto';
export declare class CreateProjectDto {
    projectName: string;
    description: string;
    financement: string;
    author: CreateUserDto;
}
