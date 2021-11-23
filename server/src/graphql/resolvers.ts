

import { users } from "../../database/mockdb";
import axios from 'axios';

export const resolvers = {
        Query: {
          users: async () => users,
          // peoples: async (args:any) =>{
          //   const response = await axios.get(`https://swapi.dev/api/people/?page=${args.page}`);
          //   return response.data['results'];
          // },
          // search: async (args:any)=>{
          //   console.log(args);
          //   const response = await axios.get(`https://swapi.dev/api/people/?search=${args.search}`);
          //   return response.data['results'];
          // }
          peoples:  (_, { page }, { dataSources }) => {
            return dataSources.peopleAPI.getListOfPeople(page);
          },
          search: (_, { search }, { dataSources }) => {
            return dataSources.peopleAPI.searchPersonByName(search);
          }
        },
      };
