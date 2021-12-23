import { Injectable } from "@nestjs/common";
import { Prisma, Interest } from "@prisma/client";
import { ConnectInterestDto, CreateInterestDto, UpdateInterestDto } from "@/api/generated/nestjs-dto/interest/dto";
import { PrismaService } from "@/api/services/Prisma.service";

export type FindManyType = {
  skip?: number;
  take?: number;
  cursor?: Prisma.InterestWhereUniqueInput;
  where?: Prisma.InterestWhereInput;
  orderBy?: Prisma.InterestOrderByWithRelationInput;
};

@Injectable()
export class InterestsService {
  constructor(private prisma: PrismaService) {}

  async findOne(interestWhereUniqueInput: ConnectInterestDto): Promise<Interest | null> {
    return this.prisma.interest.findUnique({
      where: interestWhereUniqueInput,
    });
  }

  async findMany(params: FindManyType): Promise<Interest[]> {
    const { skip, take = 20, cursor, where, orderBy } = params ?? {};
    return this.prisma.interest.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: CreateInterestDto): Promise<Interest> {
    return this.prisma.interest.create({
      data,
    });
  }

  async update(params: { where: ConnectInterestDto; data: UpdateInterestDto }): Promise<Interest> {
    const { where, data } = params;
    return this.prisma.interest.update({
      data,
      where,
    });
  }

  async delete(where: ConnectInterestDto): Promise<Interest> {
    return this.prisma.interest.delete({
      where,
    });
  }
}
