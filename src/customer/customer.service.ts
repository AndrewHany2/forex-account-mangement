import { Injectable } from '@nestjs/common';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { CustomerRepository } from './customer.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerRepository)
    private customerRepository: CustomerRepository,
  ) {}
  createCustomer(createCustomerInput: CreateCustomerInput) {
    return this.customerRepository.createCustomer(createCustomerInput);
  }

  findAll() {
    return `This action returns all customer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerInput: UpdateCustomerInput) {
    console.log(
      '🚀 ~ CustomerService ~ update ~ UpdateCustomerInput:',
      updateCustomerInput,
    );
    return `This action updates a #${id} customer $`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
