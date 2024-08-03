// import { Prisma } from '@prisma/client'

//fieldOption of Prisma
type PrismaOption<Field extends string> = {
    [K in Field]: string | null;
  };




//fieldOption of react-select

 type OptionType = {
    value: string;
    label: string;
    fieldName: string
  };
