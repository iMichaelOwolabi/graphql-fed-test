import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ ()', async () => {
    const catsMutation = {
      name: "Ajala",
      age: 71
    }
    // mutation createCat { createCat(createCatInput: {name: "Ajala", age: 7}){ name, age }}
    const response = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `mutation createCat { createCat(createCatInput: {name: \"Ajala\", age: 7}){ name, age }}`,
      })
      console.log(response.body, '=======')
    expect(response.status).toBe(200)
    expect(response.body.data.createCat.name).toBe("Ajala")
  });
});
