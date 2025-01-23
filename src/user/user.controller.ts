import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() body) {
    return { body };
  }

  @Get()
  async list() {
    console.log('teste');
    return { users: [] };
  }

  @Get(':id')
  async show(@Param() params) {
    return { user: {}, params };
  }

  @Put(':id')
  async update(@Body() body, @Param() params) {
    return { method: 'put', body, params };
  }

  @Patch(':id')
  async updatePartial(@Body() body, @Param() params) {
    return { method: 'ptch', body, params };
  }
}
