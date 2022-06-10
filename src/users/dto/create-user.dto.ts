import { ApiProperty } from '@nestjs/swagger';
import { CreateProjectDto } from 'src/projects/dto/create-project.dto';
export class CreateUserDto {
  @ApiProperty()
  firstname: string;

  @ApiProperty()
  lastname: string;

  @ApiProperty()
  email: string;
}
