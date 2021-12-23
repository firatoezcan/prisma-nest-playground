import { Injectable } from "@nestjs/common";
import { Prisma, Project } from "@prisma/client";
import { ConnectProjectDto, CreateProjectDto, UpdateProjectDto } from "@/api/generated/nestjs-dto/project/dto";
import { PrismaService } from "@/api/services/Prisma.service";

export type FindManyType = {
  skip?: number;
  take?: number;
  cursor?: Prisma.ProjectWhereUniqueInput;
  where?: Prisma.ProjectWhereInput;
  orderBy?: Prisma.ProjectOrderByWithRelationInput;
};

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async findOne(projectWhereUniqueInput: ConnectProjectDto): Promise<Project | null> {
    return this.prisma.project.findUnique({
      where: projectWhereUniqueInput,
    });
  }

  async findMany(params: FindManyType): Promise<Project[]> {
    const { skip, take = 20, cursor, where, orderBy } = params ?? {};
    return this.prisma.project.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: CreateProjectDto): Promise<Project> {
    return this.prisma.project.create({
      data,
    });
  }

  async update(params: { where: ConnectProjectDto; data: UpdateProjectDto }): Promise<Project> {
    const { where, data } = params;
    return this.prisma.project.update({
      data,
      where,
    });
  }

  async delete(where: ConnectProjectDto): Promise<Project> {
    return this.prisma.project.delete({
      where,
    });
  }
}
