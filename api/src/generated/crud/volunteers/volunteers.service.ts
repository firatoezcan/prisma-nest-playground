import { Injectable } from "@nestjs/common";
import { Prisma, Volunteer } from "@prisma/client";
import { ConnectVolunteerDto, CreateVolunteerDto, UpdateVolunteerDto } from "@/api/generated/nestjs-dto/volunteer/dto";
import { PrismaService } from "@/api/services/Prisma.service";

export type FindManyType = {
  skip?: number;
  take?: number;
  cursor?: Prisma.VolunteerWhereUniqueInput;
  where?: Prisma.VolunteerWhereInput;
  orderBy?: Prisma.VolunteerOrderByWithRelationInput;
};

@Injectable()
export class VolunteersService {
  constructor(private prisma: PrismaService) {}

  async findOne(volunteerWhereUniqueInput: ConnectVolunteerDto): Promise<Volunteer | null> {
    return this.prisma.volunteer.findUnique({
      where: volunteerWhereUniqueInput,
    });
  }

  async findMany(params: FindManyType): Promise<Volunteer[]> {
    const { skip, take = 20, cursor, where, orderBy } = params ?? {};
    return this.prisma.volunteer.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: CreateVolunteerDto): Promise<Volunteer> {
    return this.prisma.volunteer.create({
      data,
    });
  }

  async update(params: { where: ConnectVolunteerDto; data: UpdateVolunteerDto }): Promise<Volunteer> {
    const { where, data } = params;
    return this.prisma.volunteer.update({
      data,
      where,
    });
  }

  async delete(where: ConnectVolunteerDto): Promise<Volunteer> {
    return this.prisma.volunteer.delete({
      where,
    });
  }
}
