const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    users: [Trip]
  }

  type Mutation {
    addTrip(trip: InputTrip): Trip
  }

  input InputTrip {
    id: ID
    name: String
    mobile: String
    dateOfArrival: String
    airportName: String
    terminalName: String
    flightNumber: String
  }

  type Trip {
    id: ID
    name: String
    mobile: String
    dateOfArrival: String
    airportName: String
    terminalName: String
    flightNumber: String
  }
`;

const resolvers = {
  Mutation: {
    addTrip: async (_, { trip }, { dataSources }) => {
      console.log("_, param1, param2", _, trip, dataSources);
      // save data to the database
      return trip;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => console.log(`Server ready at ${url}`));
