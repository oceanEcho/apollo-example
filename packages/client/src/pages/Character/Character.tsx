import React, { FC } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router';

import { config } from '../../config';
import { Loader } from '../../components/Loader';

import styles from './styles.module.scss';

const GET_CHARACTER = gql`
  query GetCharacter($characterId: ID!) {
    character(id: $characterId) {
      id
      name
      status
      species
      type
      gender
      location {
        name
        dimension
      }
      image
      origin {
        name
        dimension
      }
    }
  }
`;

export const Character: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: {
      characterId: id,
    },
    context: {
      uri: config.api.externalUri,
    },
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <section className={styles.Character}>
      <h1>{data.character.name}</h1>
      <figure className={styles.CharacterImage}>
        <img src={data.character.image} alt={data.character.name} width={300} height={300} />
        <figcaption>
          <p>Name: {data.character.name}</p>
          <p>Status: {data.character.status}</p>
          <p>Species: {data.character.species}</p>
        </figcaption>
      </figure>
    </section>
  );
};
