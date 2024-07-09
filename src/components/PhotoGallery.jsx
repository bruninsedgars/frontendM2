import React from 'react';
import { SimpleGrid, Image, Container, Title } from '@mantine/core';

const photos = [
  { src: '/images/lake.jpg', title: 'Lake' },
  { src: '/images/church.jpg', title: 'Church' },
  { src: '/images/school.jpg', title: 'School' },
];

const PhotoGallery = () => {
  return (
    <Container>
      <Title order={2} style={{ marginBottom: '20px' }}>Photo Gallery</Title>
      <SimpleGrid cols={3} spacing="lg">
        {photos.map((photo, index) => (
          <Image
            key={index}
            src={photo.src}
            alt={photo.title}
            caption={photo.title}
            radius="md"
            withPlaceholder
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default PhotoGallery;
