import { Box, HStack, Image, Stack, useMediaQuery } from '@chakra-ui/react';
import router from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FetchProducts from '../../utils/fetchProducts';
import GallerySlider from './gallerySlider';

type ProductInfo = {
    _id: string;
    title: string;
    description: string;
    price: number;
    image: string[];
    category: string;
    material: string;
    brand: string;
    size: string[];
    color: string[];
};

type ReduxState = {
    products: ProductInfo[];
};

const ProductGallery = () => {
    const [image, setImage] = useState('');

    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    const id = router.asPath.split('/')[2];

    FetchProducts();

    const product = useSelector((state: ReduxState) =>
        state.products.find((item: ProductInfo) => item._id === id)
    );
    const images = product?.image || ['ERRO 404'];

    useEffect(() => {
        product && setImage(product.image[0]);
    }, [product]);

    return (
        <>
            {isLargerThan768 ? (
                <HStack>
                    <Stack top={'20px'}>
                        {images.map((img: string) => (
                            <Image
                                cursor={'pointer'}
                                border={'1px solid #E7E7E7'}
                                key={img}
                                src={img}
                                objectFit="cover"
                                w="70px"
                                h="70px"
                                alt="imagem do produtos"
                                onClick={() => setImage(img)}
                                _hover={{ border: '1px solid black' }}
                            />
                        ))}
                    </Stack>
                    <Box overflow={'hidden'}>
                        <Image
                            cursor={'zoom-in'}
                            _hover={{
                                transform: 'scale(1.2)',
                                transition: 'all 0.3s ease',
                            }}
                            src={image}
                            alt=""
                            w="100%"
                            h="500px"
                            maxH="600px"
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
