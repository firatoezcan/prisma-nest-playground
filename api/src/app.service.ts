import { Prisma } from ".prisma/client";
import { Injectable } from "@nestjs/common";

class Datamodel implements Prisma.DMMF.Datamodel {
  models: Prisma.DMMF.Model[];
  enums: Prisma.DMMF.DatamodelEnum[];
}

class Schema implements Prisma.DMMF.Schema {
  rootQueryType?: string;
  rootMutationType?: string;
  inputObjectTypes: { model?: Prisma.DMMF.InputType[]; prisma: Prisma.DMMF.InputType[] };
  outputObjectTypes: { model: Prisma.DMMF.OutputType[]; prisma: Prisma.DMMF.OutputType[] };
  enumTypes: { model?: Prisma.DMMF.SchemaEnum[]; prisma: Prisma.DMMF.SchemaEnum[] };
}

class Mappings implements Prisma.DMMF.Mappings {
  modelOperations: Prisma.DMMF.ModelMapping[];
  otherOperations: { read: string[]; write: string[] };
}

export class DMMF implements Prisma.DMMF.Document {
  datamodel: Datamodel;
  schema: Schema;
  mappings: Mappings;
}

@Injectable()
export class AppService {
  health(): string {
    return "Healthy!";
  }
  dmmf(): DMMF {
    return Prisma.dmmf;
  }
}
