import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectsController {
    private projectsService;
    constructor(projectsService: ProjectsService);
    create(createProjectDto: CreateProjectDto): import(".prisma/client").Prisma.Prisma__ProjectClient<import(".prisma/client").Project>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Project[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ProjectClient<import(".prisma/client").Project>;
    update(id: string, updateUserDto: UpdateProjectDto): import(".prisma/client").Prisma.Prisma__ProjectClient<import(".prisma/client").Project>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ProjectClient<import(".prisma/client").Project>;
}
