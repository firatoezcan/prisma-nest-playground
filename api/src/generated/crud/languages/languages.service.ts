import { Injectable } from "@nestjs/common";
import { Prisma, Language } from "@prisma/client";
import { ConnectLanguageDto, CreateLanguageDto, UpdateLanguageDto } from "@/api/generated/nestjs-dto/language/dto";
import { PrismaService } from "@/api/services/Prisma.service";

export type FindManyType = {
  skip?: number;
  take?: number;
  cursor?: Prisma.LanguageWhereUniqueInput;
  where?: Prisma.LanguageWhereInput;
  orderBy?: Prisma.LanguageOrderByWithRelationInput;
};

@Injectable()
export class LanguagesService {
  constructor(private prisma: PrismaService) {}

  async findOne(languageWhereUniqueInput: ConnectLanguageDto): Promise<Language | null> {
    return this.prisma.language.findUnique({
      where: languageWhereUniqueInput,
    });
  }

  async findMany(params: FindManyType): Promise<Language[]> {
    const { skip, take = 20, cursor, where, orderBy } = params ?? {};
    return this.prisma.language.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: CreateLanguageDto): Promise<Language> {
    return this.prisma.language.create({
      data,
    });
  }

  async update(params: { where: ConnectLanguageDto; data: UpdateLanguageDto }): Promise<Language> {
    const { where, data } = params;
    return this.prisma.language.update({
      data,
      where,
    });
  }

  async delete(where: ConnectLanguageDto): Promise<Language> {
    return this.prisma.language.delete({
      where,
    });
  }
}
