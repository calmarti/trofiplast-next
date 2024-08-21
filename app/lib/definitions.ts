// import { Prisma } from '@prisma/client'

import { Item } from "@prisma/client";

//fieldOption of Prisma
export type PrismaOption<Field extends string> = {
    [K in Field]: string | null;
  };



//fieldOption of react-select

 export type OptionType = {
    value: string;
    label: string;
    fieldName: string
  };


export type SelectionType =  Omit<Item, 'id' | 'from' |  'to' |  'period' |  'summary' |  'reference' |  'href' |   'contributor' | 'createdAt' >;
