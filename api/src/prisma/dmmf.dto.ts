import { Prisma } from ".prisma/client";
import { Injectable } from "@nestjs/common";
import { ApiExtraModels, ApiProperty, getSchemaPath } from "@nestjs/swagger";

type ArgType = string | InputType | SchemaEnum;
type FieldLocation = "scalar" | "inputObjectTypes" | "outputObjectTypes" | "enumTypes";
type FieldNamespace = "model" | "prisma";
type FieldKind = "scalar" | "object" | "enum" | "unsupported";

class uniqueIndex implements Prisma.DMMF.uniqueIndex {
  @ApiProperty()
  name: string;

  @ApiProperty({ type: "string", isArray: true })
  fields: string[];
}

class PrimaryKey implements Prisma.DMMF.PrimaryKey {
  @ApiProperty({ nullable: true })
  name: string | null;

  @ApiProperty({ type: "string", isArray: true })
  fields: string[];
}

class EnumValue implements Prisma.DMMF.EnumValue {
  @ApiProperty()
  name: string;

  @ApiProperty({ nullable: true })
  dbName: string | null;
}

class FieldDefault implements Prisma.DMMF.FieldDefault {
  @ApiProperty()
  name: string;

  // Its probably an array of strings
  @ApiProperty({ type: "string", isArray: true })
  args: any[];
}

class SchemaEnum implements Prisma.DMMF.SchemaEnum {
  @ApiProperty()
  name: string;

  @ApiProperty({ type: "string", isArray: true })
  values: string[];
}

class Deprecation implements Prisma.DMMF.Deprecation {
  @ApiProperty()
  sinceVersion: string;

  @ApiProperty()
  reason: string;

  @ApiProperty()
  plannedRemovalVersion?: string;
}

class SchemaArgInputType implements Prisma.DMMF.SchemaArgInputType {
  @ApiProperty()
  isList: boolean;

  @ApiProperty({ oneOf: [{ type: "string" }, { $ref: getSchemaPath("InputType") }, { $ref: getSchemaPath("OutputType") }] })
  type: ArgType;

  @ApiProperty({ type: "string", enum: ["scalar", "inputObjectTypes", "outputObjectTypes", "enumTypes"] })
  location: FieldLocation;

  @ApiProperty({ type: "string", enum: ["model", "prisma"] })
  namespace?: FieldNamespace;
}

class SchemaArg implements Prisma.DMMF.SchemaArg {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  comment?: string;

  @ApiProperty()
  isNullable: boolean;

  @ApiProperty()
  isRequired: boolean;

  // Ordering issues so we use a string to make it easier for us
  @ApiProperty({ type: SchemaArgInputType, isArray: true })
  inputTypes: SchemaArgInputType[];

  // Ordering issues so we use a string to make it easier for us
  @ApiProperty({ type: Deprecation, required: false })
  deprecation?: Deprecation;
}

class SchemaField implements Prisma.DMMF.SchemaField {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  isNullable?: boolean;

  @ApiProperty({
    properties: {
      // This has a circular reference so we (sadly) need to pass in the string manually
      type: { oneOf: [{ type: "string" }, { $ref: getSchemaPath("OutputType") }, { $ref: getSchemaPath(SchemaEnum) }] },
      isList: { type: "boolean" },
      location: { type: "string", enum: ["scalar", "inputObjectTypes", "outputObjectTypes", "enumTypes"] },
      namespace: { type: "string", enum: ["model", "prisma"] },
    },
  })
  outputType: {
    type: string | OutputType | SchemaEnum;
    isList: boolean;
    location: FieldLocation;
    namespace?: FieldNamespace;
  };

  @ApiProperty({ type: SchemaArg, isArray: true })
  args: SchemaArg[];

  @ApiProperty({ type: Deprecation, required: false })
  deprecation?: Deprecation;

  @ApiProperty({ required: false })
  documentation?: string;
}

class OutputType implements Prisma.DMMF.OutputType {
  @ApiProperty()
  name: string;

  @ApiProperty({
    type: SchemaField,
    isArray: true,
  })
  fields: SchemaField[];

  @ApiProperty({
    type: "object",
    additionalProperties: {
      $ref: getSchemaPath(SchemaField),
    },
  })
  fieldMap?: Record<string, SchemaField>;
}

class Field implements Prisma.DMMF.Field {
  @ApiProperty({ type: "string", enum: ["scalar", "object", "enum", "unsupported"] })
  kind: FieldKind;

  @ApiProperty()
  name: string;

  @ApiProperty()
  isRequired: boolean;

  @ApiProperty()
  isList: boolean;

  @ApiProperty()
  isUnique: boolean;

  @ApiProperty()
  isId: boolean;

  @ApiProperty({ oneOf: [{ type: "string" }, { $ref: getSchemaPath(SchemaEnum) }, { $ref: getSchemaPath(OutputType) }, { $ref: getSchemaPath(SchemaArg) }] })
  type: string | SchemaEnum | OutputType | SchemaArg;

  @ApiProperty({ type: "string", isArray: true, nullable: true, required: false })
  dbNames?: string[] | null;

  @ApiProperty()
  isGenerated: boolean;

  @ApiProperty()
  hasDefaultValue: boolean;

  @ApiProperty({ oneOf: [{ type: "string" }, { type: "boolean" }, { type: "number" }, { $ref: getSchemaPath(FieldDefault) }], required: false })
  default?: FieldDefault | string | boolean | number;

  // We actually know that this will be an array of strings
  @ApiProperty({ type: "string", isArray: true, required: false })
  relationToFields?: any[];

  @ApiProperty({ required: false })
  relationOnDelete?: string;

  @ApiProperty({ required: false })
  relationName?: string;

  @ApiProperty({ required: false })
  documentation?: string;
}

class Model implements Prisma.DMMF.Model {
  @ApiProperty()
  name: string;

  @ApiProperty({ nullable: true })
  dbName: string | null;

  @ApiProperty({ type: Field, isArray: true })
  fields: Field[];

  @ApiProperty({
    type: "object",
    additionalProperties: {
      $ref: getSchemaPath(Field),
    },
    required: false,
  })
  fieldMap?: Record<string, Field>;

  @ApiProperty({ type: "array", items: { type: "array", items: { type: "string" } } })
  uniqueFields: string[][];

  @ApiProperty({ type: uniqueIndex, isArray: true })
  uniqueIndexes: uniqueIndex[];

  @ApiProperty({ required: true })
  documentation?: string;

  @ApiProperty({ type: PrimaryKey, nullable: true })
  primaryKey: PrimaryKey | null;
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

class InputType implements Prisma.DMMF.InputType {
  @ApiProperty()
  name: string;

  @ApiProperty({
    properties: {
      maxNumFields: { type: "number", nullable: true },
      minNumFields: { type: "number", nullable: true },
    },
  })
  constraints: {
    maxNumFields: number | null;
    minNumFields: number | null;
  };

  @ApiProperty({
    type: SchemaArg,
    isArray: true,
  })
  fields: SchemaArg[];

  @ApiProperty({
    type: "object",
    additionalProperties: {
      $ref: getSchemaPath(SchemaArg),
    },
  })
  fieldMap?: Record<string, SchemaArg>;
}

class Schema implements Prisma.DMMF.Schema {
  @ApiProperty({ required: false, nullable: true })
  rootQueryType?: string;

  @ApiProperty({ required: false, nullable: true })
  rootMutationType?: string;

  @ApiProperty({
    properties: {
      model: { items: { $ref: getSchemaPath(InputType) } },
      prisma: { items: { $ref: getSchemaPath(InputType) } },
    },
  })
  inputObjectTypes: { model?: InputType[]; prisma: InputType[] };

  @ApiProperty({
    properties: {
      model: { items: { $ref: getSchemaPath(OutputType) } },
      prisma: { items: { $ref: getSchemaPath(OutputType) } },
    },
  })
  outputObjectTypes: { model: OutputType[]; prisma: OutputType[] };

  @ApiProperty({
    properties: {
      model: { items: { $ref: getSchemaPath(SchemaEnum) } },
      prisma: { items: { $ref: getSchemaPath(SchemaEnum) } },
    },
  })
  enumTypes: { model?: SchemaEnum[]; prisma: SchemaEnum[] };
}

class ModelMapping implements Prisma.DMMF.ModelMapping {
  @ApiProperty()
  model: string;

  @ApiProperty()
  plural: string;

  @ApiProperty({ required: false, nullable: true })
  findUnique?: string | null;

  @ApiProperty({ required: false, nullable: true })
  findFirst?: string | null;

  @ApiProperty({ required: false, nullable: true })
  findMany?: string | null;

  @ApiProperty({ required: false, nullable: true })
  create?: string | null;

  @ApiProperty({ required: false, nullable: true })
  createMany?: string | null;

  @ApiProperty({ required: false, nullable: true })
  update?: string | null;

  @ApiProperty({ required: false, nullable: true })
  updateMany?: string | null;

  @ApiProperty({ required: false, nullable: true })
  upsert?: string | null;

  @ApiProperty({ required: false, nullable: true })
  delete?: string | null;

  @ApiProperty({ required: false, nullable: true })
  deleteMany?: string | null;

  @ApiProperty({ required: false, nullable: true })
  aggregate?: string | null;

  @ApiProperty({ required: false, nullable: true })
  groupBy?: string | null;

  @ApiProperty({ required: false, nullable: true })
  count?: string | null;
}

class Mappings implements Prisma.DMMF.Mappings {
  @ApiProperty({
    type: ModelMapping,
    isArray: true,
  })
  modelOperations: ModelMapping[];

  @ApiProperty({
    properties: {
      read: { items: { type: "string" } },
      write: { items: { type: "string" } },
    },
  })
  otherOperations: { read: string[]; write: string[] };
}

export class DMMFDto implements Prisma.DMMF.Document {
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
