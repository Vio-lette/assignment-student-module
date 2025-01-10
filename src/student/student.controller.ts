import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Post()
    create(@Body() stuData: Partial<Student>) {
        return this.studentService.create(stuData);
    }

    @Get()
    findAll() {
        return this.studentService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Student> {
        return this.studentService.findOne(id);
    }

}
