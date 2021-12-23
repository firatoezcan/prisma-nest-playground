import { Injectable } from "@nestjs/common";
import { Prisma, Work } from "@prisma/client";
import { ConnectWorkDto, CreateWorkDto, UpdateWorkDto } from "@/api/generated/nestjs-dto/work/dto";
import { PrismaService } from "@/api/services/Prisma.service";

export type FindManyType = { skip?: number; take?: number; cursor?: Prisma.WorkWhereUniqueInput; where?: Prisma.WorkWhereInput; orderBy?: Prisma.WorkOrderByWithRelationInput };

@Injectable()
export class WorksService {
  constructor(private prisma: PrismaService) {}

  async findOne(workWhereUniqueInput: ConnectWorkDto): Promise<Work | null> {
    return this.prisma.work.findUnique({
      where: workWhereUniqueInput,
    });
  }

  async findMany(params: FindManyType): Promise<Work[]> {
    const { skip, take = 20, cursor, where, orderBy } = params ?? {};
    return this.prisma.work.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: CreateWorkDto): Promise<Work> {
    return this.prisma.work.create({
      data,
    });
  }

  async update(params: { where: ConnectWorkDto; data: UpdateWorkDto }): Promise<Work> {
    const { where, data } = params;
    return this.prisma.work.update({
      data,
      where,
    });
  }

  async delete(where: ConnectWorkDto): Promise<Work> {
    return this.prisma.work.delete({
      where,
    });
  }
}
