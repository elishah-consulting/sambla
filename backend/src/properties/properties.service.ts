import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PropertiesService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createPropertyDto: CreatePropertyDto) {
    return 'This action adds a new property';
  }

  findAll({ status = null }: { status?: string }) {
    let where = {};
    if (status) {
      where = {
        ...where,
        status,
      };
    }
    return this.prismaService.property.findMany({
      where,
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} property`;
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}
