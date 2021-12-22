import { Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { ConnectUserDto, CreateUserDto, UpdateUserDto } from "../generated/nestjs-dto/user/dto";
import { PrismaService } from "../services/Prisma.service";

export type FindManyType = { skip?: number; take?: number; cursor?: Prisma.UserWhereUniqueInput; where?: Prisma.UserWhereInput; orderBy?: Prisma.UserOrderByWithRelationInput };

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOne(userWhereUniqueInput: ConnectUserDto): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async findMany(params: FindManyType): Promise<User[]> {
    const { skip, take = 20, cursor, where, orderBy } = params ?? {};
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async update(params: { where: ConnectUserDto; data: UpdateUserDto }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async delete(where: ConnectUserDto): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
