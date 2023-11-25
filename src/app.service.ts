import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async jokes() {
    const response: AxiosResponse = await axios.get(
      'https://api.chucknorris.io/jokes/random',
    );
    if (response.data.value) {
      return {
        sucess: true,
        message: 'operation successfully done',
        data: response.data.value,
      };
    } else {
      return {
        sucess: false,
        message: 'Data not found',
      };
    }
  }

  async test() {
    const productArray = [
      {
        id: 1,
        sku: 'abc',
        productName: 'name 1',
        category: 1,
      },
      {
        id: 2,
        sku: 'def',
        productName: 'name 2',
        category: 2,
      },
      {
        id: 3,
        sku: 'ghi',
        productName: 'name 1',
        category: 2,
      },
      {
        id: 4,
        sku: 'klm',
        productName: 'name 1',
        category: 3,
      },
      {
        id: 5,
        sku: 'xyz',
        productName: 'name 1',
        category: 1,
      },
    ];

    const pricingArray = [
      {
        sku: 'abc',
        price: 10,
      },
      {
        sku: 'def',
        price: 20,
      },
      {
        sku: 'ghi',
        price: 30,
      },
      {
        sku: 'klm',
        price: 40,
      },
      {
        sku: 'xyz',
        price: 50,
      },
    ];

    const categoryArray = [
      {
        id: 1,
        name: 'category 1',
      },
      {
        id: 2,
        name: 'category 2',
      },
      {
        id: 3,
        name: 'category 3',
      },
      {
        id: 4,
        name: 'category 4',
      },
      {
        id: 5,
        name: 'category 5',
      },
    ];

    const Product = productArray.map(product => {
      const pricingEntry = pricingArray.find(
        pricing => pricing.sku === product.sku,
      );
      const categoryEntry = categoryArray.find(
        category => category.id === product.category,
      );

      return {
        id: product.id,
        sku: product.sku,
        productName: product.productName,
        category: product.category,
        price: pricingEntry ? pricingEntry.price : null,
        categoryName: categoryEntry ? categoryEntry.name : null,
      };
    });
    return {
      message: 'operation successfully done',
      success: true,
      data: Product,
    };
  }
}
