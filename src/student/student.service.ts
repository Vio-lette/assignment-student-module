import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private studentRepository: Repository<Student>,
    ) { }

    async create(studentData: Partial<Student>): Promise<Student> {
        const student = this.studentRepository.create(studentData);
        return this.studentRepository.save(student);
    }

    async findAll(): Promise<Student[]> {
        return this.studentRepository.find();
    }

    async findOne(id: number): Promise<Student> {
        return this.studentRepository.findOne({ where: { id } });
    }

    async update(id: number, updateData: Partial<Student>): Promise<Student> {
        await this.studentRepository.update(id, updateData);
        return this.studentRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.studentRepository.delete(id);
    }

}
