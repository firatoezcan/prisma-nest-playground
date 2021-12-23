import { Injectable } from "@nestjs/common";
import { Prisma, Profile } from "@prisma/client";
import { ConnectProfileDto, CreateProfileDto, UpdateProfileDto } from "@/api/generated/nestjs-dto/profile/dto";
import { PrismaService } from "@/api/services/Prisma.service";

export type FindManyType = {
  skip?: number;
  take?: number;
  cursor?: Prisma.ProfileWhereUniqueInput;
  where?: Prisma.ProfileWhereInput;
  orderBy?: Prisma.ProfileOrderByWithRelationInput;
};

@Injectable()
export class ProfilesService {
  constructor(private prisma: PrismaService) {}

  async findOne(profileWhereUniqueInput: ConnectProfileDto): Promise<Profile | null> {
    return this.prisma.profile.findUnique({
      where: profileWhereUniqueInput,
    });
  }

  async findMany(params: FindManyType): Promise<Profile[]> {
    const { skip, take = 20, cursor, where, orderBy } = params ?? {};
    return this.prisma.profile.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: CreateProfileDto): Promise<Profile> {
    return this.prisma.profile.create({
      data,
    });
  }

  async update(params: { where: ConnectProfileDto; data: UpdateProfileDto }): Promise<Profile> {
    const { where, data } = params;
    return this.prisma.profile.update({
      data,
      where,
    });
  }

  async delete(where: ConnectProfileDto): Promise<Profile> {
    return this.prisma.profile.delete({
      where,
    });
  }
}
