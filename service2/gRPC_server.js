const PROTO_PATH = __dirname + '/proto/demo.proto';
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const read = require('./src/read');


const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const demo_proto = grpc.loadPackageDefinition(packageDefinition).demo;

//Starts an RPC server that receives requests for the Welcome service at the
const server = new grpc.Server();
server.addService(demo_proto.Crud.service, { 
  read: read,
});
server.bindAsync('127.0.0.1:50052', grpc.ServerCredentials.createInsecure(), () => {server.start();});
console.log('server activo');
