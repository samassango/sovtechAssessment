const { gql } = require('apollo-server');

export const typeDefs = gql`
    type User {
      name: String
      email: String
      projects: [Project]
    }
  
    type Project {
        title: String 
        status: String 
        members: [User]
    }
  
    type People {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: String
  }

    type Query {
      users: [User]
      peoples(page: Int):[People]
      search(search: String!):[People]
    }
  `;

