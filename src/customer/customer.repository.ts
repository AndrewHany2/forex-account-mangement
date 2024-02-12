import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { CreateCustomerInput } from './dto/create-customer.input';

@EntityRepository(Customer)
export class CustomerRepository extends Repository<Customer> {
  constructor(dataSource: DataSource) {
    super(Customer, dataSource.createEntityManager());
  }
  async createCustomer(
    createCustomerInput: CreateCustomerInput,
  ): Promise<Customer> {
    try {
      const { firstName, lastName, password, email, title, country } =
        createCustomerInput;
      const customer = new Customer();
      customer.title = title;
      customer.firstName = firstName;
      customer.lastName = lastName;
      customer.email = email;
      customer.password = password;
      customer.country = country;
      await customer.save();
      return customer;
    } catch (error) {
      console.log(error);
    }
  }
}
