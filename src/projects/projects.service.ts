import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}
  create(project: CreateProjectDto) {
    
    return this.prisma.project.create({ data: project,
     
      
    });
  }

  findAll() {
    return this.prisma.project.findMany();
  }

  findOne(id: number) {
    return this.prisma.project.findUnique({ where: { id: id } });
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return this.prisma.project.update({
      where: { id: id },
      data: updateProjectDto,
    });
  }

  remove(id: number) {
    return this.prisma.project.delete({ where: { id: id } });
  }
}
