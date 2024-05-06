const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teachs about a specific topic "
  type Track {
    id: ID!
    "the track's title"
    title: String!
    "the track's main author"
    author: Author!
    "the track's main illustration to display in track card or track page detail"
    thumbnail: String
    "the track's approximate length to complete, in minutes"
    length: Int
    "the number of modules this track contains"
    modulesCount: Int
  }

  "Author of a complete track"
  type Author {
    id: ID!
    "The author's firstname and lastname"
    name: String!
    "The author's profile picture url"
    photo: String
  }
`;

module.exports = typeDefs;
