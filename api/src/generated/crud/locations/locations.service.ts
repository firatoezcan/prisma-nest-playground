import { Injectable } from "@nestjs/common";
import { Prisma, Location } from "@prisma/client";
import { ConnectLocationDto, CreateLocationDto, UpdateLocationDto } from "@/api/generated/nestjs-dto/location/dto";
import { PrismaService } from "@/api/services/Prisma.service";

export type FindManyType = {
  skip?: number;
  take?: number;
  cursor?: Prisma.LocationWhereUniqueInput;
  where?: Prisma.LocationWhereInput;
  orderBy?: Prisma.LocationOrderByWithRelationInput;
};

@Injectable()
export class LocationsService {
  constructor(private prisma: PrismaService) {}

  async findOne(locationWhereUniqueInput: ConnectLocationDto): Promise<Location | null> {
    return this.prisma.location.findUnique({
      where: locationWhereUniqueInput,
    });
  }

  async findMany(params: FindManyType): Promise<Location[]> {
    const { skip, take = 20, cursor, where, orderBy } = params ?? {};
    return this.prisma.location.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: CreateLocationDto): Promise<Location> {
    return this.prisma.location.create({
      data,
    });
  }

  async update(params: { where: ConnectLocationDto; data: UpdateLocationDto }): Promise<Location> {
    const { where, data } = params;
    return this.prisma.location.update({
      data,
      where,
    });
  }

  async delete(where: ConnectLocationDto): Promise<Location> {
    return this.prisma.location.delete({
      where,
    });
  }
}
