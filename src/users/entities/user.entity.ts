import { ApiProperty } from "@nestjs/swagger";

export class User {
    @ApiProperty()
    id: string;
  
    @ApiProperty()
    createdAt: Date;
  
    @ApiProperty()
    updatedAt: Date;
  
    @ApiProperty()
    firstname: string;

    @ApiProperty()
    lastname: string;
  
    @ApiProperty()
    email: string;
   
  
}
