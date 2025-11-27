import { PickType } from "@nestjs/mapped-types";
import { AuthRegister } from "./register.dto";

export class LoginDto extends PickType(AuthRegister, ["phoneNumber", "password"]){}