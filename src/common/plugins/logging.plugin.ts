import { Plugin } from '@nestjs/graphql';
import {
  ApolloServerPlugin,
  GraphQLRequestListener,
} from 'apollo-server-plugin-base';

@Plugin()
export class LoggingPlugin implements ApolloServerPlugin {
  requestDidStart(): any {
    console.log('Request started');
    return {
      willSendResponse() {
        console.log('Will send response');
      },
    };
  }
}
