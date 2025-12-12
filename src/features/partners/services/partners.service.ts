import { CrudBase } from "@/shared/lib/crud-base";
import { Partner } from "../types/partner.types";

class PartnersService extends CrudBase<Partner> {
  constructor() {
    super("/companies");
  }
}

export const partnersService = new PartnersService();
