import { PartialType } from "@nestjs/mapped-types";
import { AuthRegister } from "./register.dto";


export class UpdateUser extends PartialType(AuthRegister){}