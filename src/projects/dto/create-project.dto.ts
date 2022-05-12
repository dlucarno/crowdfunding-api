import { ApiProperty } from '@nestjs/swagger';
export class CreateProjectDto {
    @ApiProperty()
    projectName: string;
  
    @ApiProperty()
    description: string;
  
    @ApiProperty()
    financement: string;
}
