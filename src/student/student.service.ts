import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private studentRepo: Repository<Student>,
    ) { }

    async create(stuData: Partial<Student>): Promise<Student> {
        const student = this.studentRepo.create(stuData);
        return this.studentRepo.save(student);
    }

    async findAll(): Promise<Student[]> {
        return this.studentRepo.find();
    }

    async findOne(id: number): Promise<Student> {
        return this.studentRepo.findOne({ where: { id } });
    }

}
