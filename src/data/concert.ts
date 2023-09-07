import { Concert } from '@/types';

export const concertsData: Concert[] = [
  {
    id: 'concert-1',
    title: 'Fête de la musique',
    date: new Date('21/06/2023'),
    location: {
      city: 'Brest',
      country: 'France',
      zipCode: '29200',
    },
    description: "L'été dernier, nous avons été sélectionnés par la mairie de Brest supervisée par margoulin production. Nous avons eu l'opportunité de clôturer la scène rue etienne dolet lors de la fête de la musique.",
    videos: [
      {
        title: 'Poppax',
        url: 'https://www.youtube.com/watch?v=O9EsO33RZ1M&ab_channel=Poppytime',
      },
      {
        title: 'Out Of Breath',
        url: 'https://www.youtube.com/watch?v=8wEDuNeVny4&ab_channel=Poppytime',
      },
      {
        title: 'Solo Louis',
        url: ' https://www.youtube.com/watch?v=NSnERqZt3Uo&ab_channel=Poppytime',
      },
      {
        title: 'Retours Concert',
        url: ' https://youtu.be/j4uxfF5DTr4',
      },
    ],
    images: [
      {
        url: '/images/concerts/concert-1/image-1.jpeg',
      }
    ]
  },
  {
    id: 'concert-2',
    title: 'Concert privé',
    date: new Date('21/06/2023'),
    location: {
      city: 'Brest',
      country: 'France',
      zipCode: '29200',
    },
    description: 'Nous avons joué dans une fête privée avec 150 personnes',
    images: [
      {
        url: '/images/concerts/concert-2/image-1.jpg',
      },
      {
        url: '/images/concerts/concert-2/image-2.jpg',
      },
      {
        url: '/images/concerts/concert-2/image-3.jpg',
      },
      {
        url: '/images/concerts/concert-2/image-4.jpg',
      },
      {
        url: '/images/concerts/concert-2/image-5.jpg',
      },
      {
        url: '/images/concerts/concert-2/image-6.jpg',
      },
      {
        url: '/images/concerts/concert-2/image-7.jpg',
      }
    ]
  }
]