import { useState, useEffect } from 'react';
import { Image, Box, HStack, useMediaQuery, Stack } from '@chakra-ui/react';
import GallerySlider from './gallerySlider';

const ProductGallery = () => {
    const [image, setImage] = useState('');

    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    const images = [
        'https://swiperjs.com/demos/images/nature-6.jpg',
        'https://swiperjs.com/demos/images/nature-7.jpg',
        'https://swiperjs.com/demos/images/nature-8.jpg',
        'https://swiperjs.com/demos/images/nature-9.jpg',
        'https://swiperjs.com/demos/images/nature-10.jpg',
    ];

    useEffect(() => {
        setImage(images[0]);
    }, []);

    return (
        <>
            {isLargerThan768 ? (
                <HStack>
                    <Stack>
                        {images.map((img) => (
                            <Image
                                key={img}
                                src={img}
                                objectFit="cover"
                                minW="50px"
                                h="50px"
                                alt="imagem do produtos"
                                onClick={() => setImage(img)}
                            />
                        ))}
                    </Stack>
                    <Box overflow={'hidden'}>
                        <Image
                            _hover={{
                                transform: 'scale(1.2)',
                                transition: 'all 0.5s ease',
                            }}
                            src={image}
                            alt=""
                            w="100%"
                            h="100%"
                            objectFit="cover"
                        />
                    </Box>
                </HStack>
            ) : (
                <GallerySlider images={images} />
            )}
        </>
    );
};

export default ProductGallery;
