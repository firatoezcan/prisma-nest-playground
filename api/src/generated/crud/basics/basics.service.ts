import { Injectable } from "@nestjs/common";
import { Prisma, Basic } from "@prisma/client";
import { ConnectBasicDto, CreateBasicDto, UpdateBasicDto } from "@/api/generated/nestjs-dto/basic/dto";
import { PrismaService } from "@/api/services/Prisma.service";

export type FindManyType = { skip?: number; take?: number; cursor?: Prisma.BasicWhereUniqueInput; where?: Prisma.BasicWhereInput; orderBy?: Prisma.BasicOrderByWithRelationInput };

@Injectable()
export class BasicsService {
  constructor(private prisma: PrismaService) {}

  async findOne(basicWhereUniqueInput: ConnectBasicDto): Promise<Basic | null> {
    return this.prisma.basic.findUnique({
      where: basicWhereUniqueInput,
    });
  }

  async findMany(params: FindManyType): Promise<Basic[]> {
    const { skip, take = 20, cursor, where, orderBy } = params ?? {};
    return this.prisma.basic.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: CreateBasicDto): Promise<Basic> {
    return this.prisma.basic.create({
      data,
    });
  }

  async update(params: { where: ConnectBasicDto; data: UpdateBasicDto }): Promise<Basic> {
    const { where, data } = params;
    return this.prisma.basic.update({
      data,
      where,
    });
  }

  async delete(where: ConnectBasicDto): Promise<Basic> {
    return this.prisma.basic.delete({
      where,
    });
  }
}
