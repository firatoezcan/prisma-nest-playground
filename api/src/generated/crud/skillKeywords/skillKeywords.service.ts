import { Injectable } from "@nestjs/common";
import { Prisma, SkillKeyword } from "@prisma/client";
import { ConnectSkillKeywordDto, CreateSkillKeywordDto, UpdateSkillKeywordDto } from "@/api/generated/nestjs-dto/skillKeyword/dto";
import { PrismaService } from "@/api/services/Prisma.service";

export type FindManyType = {
  skip?: number;
  take?: number;
  cursor?: Prisma.SkillKeywordWhereUniqueInput;
  where?: Prisma.SkillKeywordWhereInput;
  orderBy?: Prisma.SkillKeywordOrderByWithRelationInput;
};

@Injectable()
export class SkillKeywordsService {
  constructor(private prisma: PrismaService) {}

  async findOne(skillKeywordWhereUniqueInput: ConnectSkillKeywordDto): Promise<SkillKeyword | null> {
    return this.prisma.skillKeyword.findUnique({
      where: skillKeywordWhereUniqueInput,
    });
  }

  async findMany(params: FindManyType): Promise<SkillKeyword[]> {
    const { skip, take = 20, cursor, where, orderBy } = params ?? {};
    return this.prisma.skillKeyword.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: CreateSkillKeywordDto): Promise<SkillKeyword> {
    return this.prisma.skillKeyword.create({
      data,
    });
  }

  async update(params: { where: ConnectSkillKeywordDto; data: UpdateSkillKeywordDto }): Promise<SkillKeyword> {
    const { where, data } = params;
    return this.prisma.skillKeyword.update({
      data,
      where,
    });
  }

  async delete(where: ConnectSkillKeywordDto): Promise<SkillKeyword> {
    return this.prisma.skillKeyword.delete({
      where,
    });
  }
}
