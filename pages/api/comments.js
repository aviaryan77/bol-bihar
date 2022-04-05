/** *************************************************************
 * Any file inside the folder pages/api is mapped to /api/* and  *
 * will be treated as an API endpoint instead of a page.         *
 *************************************************************** */

import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphcmsAuthToken = process.env.GRAPHCMS_AUTH_TOKEN;

export default async function comments(req, res) {
  // res.status(200).json({ name: 'John Doe' });
  const { name, email, slug, comment } = req.body;
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcmsAuthToken}`,
    },
  });

  const query = gql`
    mutation CreateComment(
      $name: String!
      $comment: String!
      $email: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;
  try {
    const result = await graphQLClient.request(query, req.body);

    return res.status(200).send(result);
  } catch (error) {
    console.log('API error', error);
    return res.status(500).send(error);
  }
}
