import { faker } from '@faker-js/faker';
import { sanitizeInput } from './sanitize';

export let headersData = { headers: [], data: {} };

const HEADERS_NUM = 10; 

Array.from({ length: HEADERS_NUM }).forEach(() => {
  headersData.headers.push(sanitizeInput(faker.name.firstName('male')));
});

Array.from({ length: HEADERS_NUM }).forEach(() => {
  let companyName = sanitizeInput(faker.address.state());

  headersData.data[companyName] = [];
  Array.from({ length: HEADERS_NUM }).forEach(() => {
    headersData.data[companyName].push(sanitizeInput(faker.address.zipCode()));
  });
});
