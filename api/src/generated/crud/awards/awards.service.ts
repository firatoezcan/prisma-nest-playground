import { Injectable } from "@nestjs/common";
import { Prisma, Award } from "@prisma/client";
import { ConnectAwardDto, CreateAwardDto, UpdateAwardDto } from "@/api/generated/nestjs-dto/award/dto";
import { PrismaService } from "@/api/services/Prisma.service";

export type FindManyType = { skip?: number; take?: number; cursor?: Prisma.AwardWhereUniqueInput; where?: Prisma.AwardWhereInput; orderBy?: Prisma.AwardOrderByWithRelationInput };

@Injectable()
export class AwardsService {
  constructor(private prisma: PrismaService) {}

  async findOne(awardWhereUniqueInput: ConnectAwardDto): Promise<Award | null> {
    return this.prisma.award.findUnique({
      where: awardWhereUniqueInput,
    });
  }

  async findMany(params: FindManyType): Promise<Award[]> {
    const { skip, take = 20, cursor, where, orderBy } = params ?? {};
    return this.prisma.award.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: CreateAwardDto): Promise<Award> {
    return this.prisma.award.create({
      data,
    });
  }

  async update(params: { where: ConnectAwardDto; data: UpdateAwardDto }): Promise<Award> {
    const { where, data } = params;
    return this.prisma.award.update({
      data,
      where,
    });
  }

  async delete(where: ConnectAwardDto): Promise<Award> {
    return this.prisma.award.delete({
      where,
    });
  }
}
