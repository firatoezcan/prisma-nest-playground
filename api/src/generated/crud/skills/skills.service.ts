import { Injectable } from "@nestjs/common";
import { Prisma, Skill } from "@prisma/client";
import { ConnectSkillDto, CreateSkillDto, UpdateSkillDto } from "@/api/generated/nestjs-dto/skill/dto";
import { PrismaService } from "@/api/services/Prisma.service";

export type FindManyType = { skip?: number; take?: number; cursor?: Prisma.SkillWhereUniqueInput; where?: Prisma.SkillWhereInput; orderBy?: Prisma.SkillOrderByWithRelationInput };

@Injectable()
export class SkillsService {
  constructor(private prisma: PrismaService) {}

  async findOne(skillWhereUniqueInput: ConnectSkillDto): Promise<Skill | null> {
    return this.prisma.skill.findUnique({
      where: skillWhereUniqueInput,
    });
  }

  async findMany(params: FindManyType): Promise<Skill[]> {
    const { skip, take = 20, cursor, where, orderBy } = params ?? {};
    return this.prisma.skill.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: CreateSkillDto): Promise<Skill> {
    return this.prisma.skill.create({
      data,
    });
  }

  async update(params: { where: ConnectSkillDto; data: UpdateSkillDto }): Promise<Skill> {
    const { where, data } = params;
    return this.prisma.skill.update({
      data,
      where,
    });
  }

  async delete(where: ConnectSkillDto): Promise<Skill> {
    return this.prisma.skill.delete({
      where,
    });
  }
}
