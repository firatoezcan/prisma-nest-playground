import { Injectable } from "@nestjs/common";
import { Prisma, Reference } from "@prisma/client";
import { ConnectReferenceDto, CreateReferenceDto, UpdateReferenceDto } from "@/api/generated/nestjs-dto/reference/dto";
import { PrismaService } from "@/api/services/Prisma.service";

export type FindManyType = {
  skip?: number;
  take?: number;
  cursor?: Prisma.ReferenceWhereUniqueInput;
  where?: Prisma.ReferenceWhereInput;
  orderBy?: Prisma.ReferenceOrderByWithRelationInput;
};

@Injectable()
export class ReferencesService {
  constructor(private prisma: PrismaService) {}

  async findOne(referenceWhereUniqueInput: ConnectReferenceDto): Promise<Reference | null> {
    return this.prisma.reference.findUnique({
      where: referenceWhereUniqueInput,
    });
  }

  async findMany(params: FindManyType): Promise<Reference[]> {
    const { skip, take = 20, cursor, where, orderBy } = params ?? {};
    return this.prisma.reference.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: CreateReferenceDto): Promise<Reference> {
    return this.prisma.reference.create({
      data,
    });
  }

  async update(params: { where: ConnectReferenceDto; data: UpdateReferenceDto }): Promise<Reference> {
    const { where, data } = params;
    return this.prisma.reference.update({
      data,
      where,
    });
  }

  async delete(where: ConnectReferenceDto): Promise<Reference> {
    return this.prisma.reference.delete({
      where,
    });
  }
}
