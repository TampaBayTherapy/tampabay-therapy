export interface GalleryImage {
    _id: string;
    asset: {
      _ref: string;
      url: string;
      alt: string;
      dimensions: {
        width: number;
        height: number;
      };
    };
  }
  
  export const mockGalleryImages: GalleryImage[] = [
    {
      _id: '1',
      asset: {
        _ref: 'image-1',
        url: '/images/gallery/gallery-1.jpg',
        alt: 'Therapy room interior',
        dimensions: { width: 800, height: 600 }
      }
    },
    {
      _id: '2',
      asset: {
        _ref: 'image-2',
        url: '/images/gallery/gallery-2.jpg',
        alt: 'Waiting area',
        dimensions: { width: 800, height: 600 }
      }
    },
    {
      _id: '3',
      asset: {
        _ref: 'image-3',
        url: '/images/gallery/gallery-3.jpg',
        alt: 'Waiting area',
        dimensions: { width: 800, height: 600 }
      }
    },
    {
      _id: '4',
      asset: {
        _ref: 'image-4',
        url: '/images/gallery/gallery-4.jpg',
        alt: 'Waiting area',
        dimensions: { width: 800, height: 600 }
      }
    },
    {
      _id: '5',
      asset: {
        _ref: 'image-5',
        url: '/images/gallery/gallery-5.jpg',
        alt: 'Waiting area',
        dimensions: { width: 800, height: 600 }
      }
    },
    {
      _id: '6',
      asset: {
        _ref: 'image-6',
        url: '/images/gallery/gallery-6.jpg',
        alt: 'Therapy room interior',
        dimensions: { width: 800, height: 600 }
      }
    },
    {
      _id: '7',
      asset: {
        _ref: 'image-7',
        url: '/images/gallery/gallery-7.jpg',
        alt: 'Waiting area',
        dimensions: { width: 800, height: 600 }
      }
    },
    {
      _id: '8',
      asset: {
        _ref: 'image-8',
        url: '/images/gallery/gallery-8.jpg',
        alt: 'Waiting area',
        dimensions: { width: 800, height: 600 }
      }
    },
    {
      _id: '9',
      asset: {
        _ref: 'image-9',
        url: '/images/gallery/gallery-9.jpg',
        alt: 'Waiting area',
        dimensions: { width: 800, height: 600 }
      }
    },
    {
      _id: '10',
      asset: {
        _ref: 'image-10',
        url: '/images/gallery/gallery-10.jpg',
        alt: 'Waiting area',
        dimensions: { width: 800, height: 600 }
      }
    },
   
  ];