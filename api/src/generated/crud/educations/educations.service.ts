import { Injectable } from "@nestjs/common";
import { Prisma, Education } from "@prisma/client";
import { ConnectEducationDto, CreateEducationDto, UpdateEducationDto } from "@/api/generated/nestjs-dto/education/dto";
import { PrismaService } from "@/api/services/Prisma.service";

export type FindManyType = {
  skip?: number;
  take?: number;
  cursor?: Prisma.EducationWhereUniqueInput;
  where?: Prisma.EducationWhereInput;
  orderBy?: Prisma.EducationOrderByWithRelationInput;
};

@Injectable()
export class EducationsService {
  constructor(private prisma: PrismaService) {}

  async findOne(educationWhereUniqueInput: ConnectEducationDto): Promise<Education | null> {
    return this.prisma.education.findUnique({
      where: educationWhereUniqueInput,
    });
  }

  async findMany(params: FindManyType): Promise<Education[]> {
    const { skip, take = 20, cursor, where, orderBy } = params ?? {};
    return this.prisma.education.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: CreateEducationDto): Promise<Education> {
    return this.prisma.education.create({
      data,
    });
  }

  async update(params: { where: ConnectEducationDto; data: UpdateEducationDto }): Promise<Education> {
    const { where, data } = params;
    return this.prisma.education.update({
      data,
      where,
    });
  }

  async delete(where: ConnectEducationDto): Promise<Education> {
    return this.prisma.education.delete({
      where,
    });
  }
}
