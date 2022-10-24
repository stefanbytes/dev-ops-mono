import {Injectable} from '@nestjs/common';
import {IUser} from "@dev-ops-meta/core";

@Injectable()
export class AppService {
  getData(): IUser {
    return {
      email: "user@domain.com",
      name: "John Doe",
      id: "007"
    };
  }
}
