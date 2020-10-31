const {GraphQLServer} = require('graphql-yoga');

const server = new GraphQLServer();

cons

server.start(({port}) => {
    console.log(`Server started on ${port}`)
})
