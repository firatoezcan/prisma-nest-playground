import { Prisma } from ".prisma/client";
import { Injectable } from "@nestjs/common";
import { ApiExtraModels, ApiProperty, getSchemaPath } from "@nestjs/swagger";

type FieldKind = "scalar" | "object" | "enum" | "unsupported";

class FieldDefault implements Prisma.DMMF.FieldDefault {
  name: string;
  args: any[];
}

class Field implements Prisma.DMMF.Field {
  kind: FieldKind;
  name: string;
  isRequired: boolean;
  isList: boolean;
  isUnique: boolean;
  isId: boolean;
  type: string | SchemaEnum | OutputType | SchemaArg;
  dbNames?: string[] | null;
  isGenerated: boolean;
  hasDefaultValue: boolean;
  default?: FieldDefault | string | boolean | number;
  relationToFields?: any[];
  relationOnDelete?: string;
  relationName?: string;
  documentation?: string;
  [key: string]: any;
}

class uniqueIndex implements Prisma.DMMF.uniqueIndex {
  name: string;
  fields: string[];
}

class PrimaryKey implements Prisma.DMMF.PrimaryKey {
  name: string | null;
  fields: string[];
}

class Model implements Prisma.DMMF.Model {
  @ApiProperty()
  name: string;
  dbName: string | null;
  fields: Field[];
  fieldMap?: Record<string, Field>;
  uniqueFields: string[][];
  uniqueIndexes: uniqueIndex[];
  documentation?: string;
  primaryKey: PrimaryKey | null;
  [key: string]: any;
}

class EnumValue implements Prisma.DMMF.EnumValue {
  name: string;
  dbName: string | null;
}

class DatamodelEnum implements Prisma.DMMF.DatamodelEnum {
  @ApiProperty()
  name: string;
  @ApiProperty({ type: EnumValue, isArray: true })
  values: EnumValue[];
  @ApiProperty()
  dbName?: string | null;
  @ApiProperty()
  documentation?: string;
}

class Datamodel implements Prisma.DMMF.Datamodel {
  @ApiProperty({ type: Model, isArray: true })
  models: Model[];
  @ApiProperty({ type: DatamodelEnum, isArray: true })
  enums: DatamodelEnum[];
}

type ArgType = string | InputType | SchemaEnum;
type FieldLocation = "scalar" | "inputObjectTypes" | "outputObjectTypes" | "enumTypes";
type FieldNamespace = "model" | "prisma";

class InputType implements Prisma.DMMF.InputType {
  name: string;
  constraints: {
    maxNumFields: number | null;
    minNumFields: number | null;
  };
  fields: SchemaArg[];
  fieldMap?: Record<string, SchemaArg>;
}

class OutputType implements Prisma.DMMF.OutputType {
  name: string;
  fields: SchemaField[];
  fieldMap?: Record<string, SchemaField>;
}

class SchemaEnum implements Prisma.DMMF.SchemaEnum {
  name: string;
  values: string[];
}

class SchemaArgInputType implements Prisma.DMMF.SchemaArgInputType {
  isList: boolean;
  @ApiProperty({ oneOf: [{ type: "string" }, { $ref: getSchemaPath(InputType) }, { type: getSchemaPath(OutputType) }] })
  type: ArgType;
  location: FieldLocation;
  namespace?: FieldNamespace;
}
class Deprecation implements Prisma.DMMF.Deprecation {
  sinceVersion: string;
  reason: string;
  plannedRemovalVersion?: string;
}

class SchemaArg implements Prisma.DMMF.SchemaArg {
  name: string;
  comment?: string;
  isNullable: boolean;
  isRequired: boolean;
  inputTypes: SchemaArgInputType[];
  deprecation?: Deprecation;
}

class SchemaField implements Prisma.DMMF.SchemaField {
  name: string;
  isNullable?: boolean;
  outputType: {
    type: string | OutputType | SchemaEnum;
    isList: boolean;
    location: FieldLocation;
    namespace?: FieldNamespace;
  };
  args: SchemaArg[];
  deprecation?: Deprecation;
  documentation?: string;
}

class Schema implements Prisma.DMMF.Schema {
  rootQueryType?: string;
  rootMutationType?: string;
  inputObjectTypes: { model?: InputType[]; prisma: InputType[] };
  outputObjectTypes: { model: OutputType[]; prisma: OutputType[] };
  enumTypes: { model?: SchemaEnum[]; prisma: SchemaEnum[] };
}

class ModelMapping implements Prisma.DMMF.ModelMapping {
  @ApiProperty()
  model: string;
  @ApiProperty()
  plural: string;
  @ApiProperty({ nullable: true })
  findUnique?: string | null;
  @ApiProperty({ nullable: true })
  findFirst?: string | null;
  @ApiProperty({ nullable: true })
  findMany?: string | null;
  @ApiProperty({ nullable: true })
  create?: string | null;
  @ApiProperty({ nullable: true })
  createMany?: string | null;
  @ApiProperty({ nullable: true })
  update?: string | null;
  @ApiProperty({ nullable: true })
  updateMany?: string | null;
  @ApiProperty({ nullable: true })
  upsert?: string | null;
  @ApiProperty({ nullable: true })
  delete?: string | null;
  @ApiProperty({ nullable: true })
  deleteMany?: string | null;
  @ApiProperty({ nullable: true })
  aggregate?: string | null;
  @ApiProperty({ nullable: true })
  groupBy?: string | null;
  @ApiProperty({ nullable: true })
  count?: string | null;
}

class Mappings implements Prisma.DMMF.Mappings {
  @ApiProperty({
    type: ModelMapping,
    isArray: true,
  })
  modelOperations: ModelMapping[];
  @ApiProperty({
    properties: { read: { items: { type: "string" } }, write: { items: { type: "string" } } },
  })
  otherOperations: { read: string[]; write: string[] };
}

@ApiExtraModels(
  FieldDefault,
  Field,
  uniqueIndex,
  PrimaryKey,
  Model,
  Datamodel,
  EnumValue,
  DatamodelEnum,
  SchemaArgInputType,
  Deprecation,
  SchemaArg,
  SchemaField,
  InputType,
  OutputType,
  SchemaEnum,
  Schema,
  ModelMapping,
  Mappings
)
export class DMMF implements Prisma.DMMF.Document {
  @ApiProperty({
    type: Datamodel,
  })
  datamodel: Datamodel;
  @ApiProperty({
    type: Schema,
  })
  schema: Schema;
  @ApiProperty({
    type: Mappings,
  })
  mappings: Mappings;
}

export class World {
  hello: string;
}

@Injectable()
export class AppService {
  health(): string {
    return "Healthy!";
  }
  dmmf(): DMMF {
    return Prisma.dmmf;
  }
  world(): World {
    return { hello: "world" };
  }
}
