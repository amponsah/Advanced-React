import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const ALL_PROGRAMS_QUERY = gql`
  query ALL_PROGRAMS_QUERY {
    allPrograms {
      id
      name
      description
      category
      country
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
export default function Programs() {
  const { data, error, loading } = useQuery(ALL_PROGRAMS_QUERY);

  if (loading) return <p>Loading</p>;
  if (error) return <p>ErrorL {error.message}</p>;

  return (
    <div>
      {data.allPrograms.map((program) => (
        <h1 key={program.id}>{program.name}</h1>
      ))}
    </div>
  );
}
