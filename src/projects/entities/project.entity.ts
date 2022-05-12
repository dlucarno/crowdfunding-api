import { ApiProperty } from "@nestjs/swagger";
export class Project {
    @ApiProperty()
    id: string;
  
    @ApiProperty()
    createdAt: Date;
  
    @ApiProperty()
    updatedAt: Date;
  
    @ApiProperty()
    projectName: string;

    @ApiProperty()
    description: string;
  
    @ApiProperty()
    financement: string;

}
