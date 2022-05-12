import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createProjectDto: CreateProjectDto): import(".prisma/client").Prisma.Prisma__ProjectClient<import(".prisma/client").Project>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Project[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProjectClient<import(".prisma/client").Project>;
    update(id: number, updateProjectDto: UpdateProjectDto): import(".prisma/client").Prisma.Prisma__ProjectClient<import(".prisma/client").Project>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ProjectClient<import(".prisma/client").Project>;
}
