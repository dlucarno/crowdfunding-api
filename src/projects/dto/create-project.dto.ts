import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
export class CreateProjectDto {
    @ApiProperty()
    projectName: string;
  
    @ApiProperty()
    description: string;
  
    @ApiProperty()
    financement: string;

    // @ApiProperty()
    // author: CreateUserDto;
}
