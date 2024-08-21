// import { Prisma } from '@prisma/client'

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


  // type Filters =  {
  //   group: string, 
  //   order: string,
  //   family: string,
  //   genus: string,
  //   species: string, 
  //   area: string,
  //   origin: string,
  //   country: string,
  // }