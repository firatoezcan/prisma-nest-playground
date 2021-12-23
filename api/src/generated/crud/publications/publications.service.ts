import { Injectable } from "@nestjs/common";
import { Prisma, Publication } from "@prisma/client";
import { ConnectPublicationDto, CreatePublicationDto, UpdatePublicationDto } from "@/api/generated/nestjs-dto/publication/dto";
import { PrismaService } from "@/api/services/Prisma.service";

export type FindManyType = {
  skip?: number;
  take?: number;
  cursor?: Prisma.PublicationWhereUniqueInput;
  where?: Prisma.PublicationWhereInput;
  orderBy?: Prisma.PublicationOrderByWithRelationInput;
};

@Injectable()
export class PublicationsService {
  constructor(private prisma: PrismaService) {}

  async findOne(publicationWhereUniqueInput: ConnectPublicationDto): Promise<Publication | null> {
    return this.prisma.publication.findUnique({
      where: publicationWhereUniqueInput,
    });
  }

  async findMany(params: FindManyType): Promise<Publication[]> {
    const { skip, take = 20, cursor, where, orderBy } = params ?? {};
    return this.prisma.publication.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: CreatePublicationDto): Promise<Publication> {
    return this.prisma.publication.create({
      data,
    });
  }

  async update(params: { where: ConnectPublicationDto; data: UpdatePublicationDto }): Promise<Publication> {
    const { where, data } = params;
    return this.prisma.publication.update({
      data,
      where,
    });
  }

  async delete(where: ConnectPublicationDto): Promise<Publication> {
    return this.prisma.publication.delete({
      where,
    });
  }
}
