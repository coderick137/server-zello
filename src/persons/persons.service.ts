import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}

  async create(createPersonDto: CreatePersonDto): Promise<Person> {
    const { name, age } = createPersonDto;

    const person = new Person();

    person.name = name;
    person.age = age;

    return await this.personRepository.save(person);
  }

  async findAll(): Promise<Person[]> {
    return await this.personRepository.find();
  }

  async findOne(id: number): Promise<Person> {
    return await this.personRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePersonDto: UpdatePersonDto): Promise<Person> {
    const { name, age } = updatePersonDto;

    const person = await this.personRepository.findOne({ where: { id } });

    person.name = name;
    person.age = age;

    return await this.personRepository.save(person);
  }

  async remove(id: number): Promise<void> {
    const person = await this.personRepository.findOne({ where: { id } });

    await this.personRepository.remove(person);
  }
}
