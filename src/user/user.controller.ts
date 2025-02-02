import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { UpdateUserDTO } from './dto/update-put-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() body: CreateUserDTO) {
    return await this.userService.create(body);
  }

  @Get()
  async list() {
    return await this.userService.list();
  }

  @Get(':id')
  async show(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.show(id);
  }

  @Put(':id')
  async update(
    @Body() { email, name, password }: UpdateUserDTO,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return { method: 'put', email, name, password, id };
  }

  @Patch(':id')
  async updatePartial(
    @Body() { email, name, password }: UpdatePatchUserDTO,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return { method: 'patch', email, name, password, id };
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }
}
