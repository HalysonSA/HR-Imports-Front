import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useRouter } from 'next/router';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper';
import {
    Box,
    Center,
    Text,
    useMediaQuery,
    Image,
    HStack,
    Stack,
    Button,
} from '@chakra-ui/react';
import {
    BsStarFill,
    BsStarHalf,
    BsStar,
    BsHeart,
    BsHeartFill,
} from 'react-icons/bs';

import { setProducts } from '../Redux/ProductSlice';
import api from '../../api/axios';

import PriceFormat from '../../utils/priceFormat';

type productInfo = {
    products: [] | null;
    _id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
    brand: string;
    material: string;
    stock: number;
    size: [];
};

export default function RelatedProductSlider() {
    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
    const [isLargerThan425] = useMediaQuery('(min-width: 425px)');

    const router = useRouter();

    const myProducts = useSelector((state: productInfo) => state.products);
    const products = myProducts ? [...myProducts] : [];
    products.reverse();

    const dispatch = useDispatch();

    
    //Mudar do fake Api para o real Api

    const serverResponse:any = [
        {
            "_id": "633b47cf279c61cf2e09fbc9",
            "title": " Lenovo lp40 tws fones de ouvido sem fio bluetooth ",
            "description": "O Lenovo LP40 traz um design moderno, sendo ideal para suas atividades. Possui um incrível sistema de alto falantes projetado com uma poderosa unidade de som de 13 mm interna, os fones de ouvido Lenovo LP40 tws oferecem um som limpo, alto e equilibrado, com altas frequências e feedback de voz. Para ficar ainda melhor, os fones de ouvido também são à prova d'água, capazes de suportar incidências de umidade, como respingos de suor durante exercícios físicos ou água da chuva durante uma aventura. A Sua bateria possui uma duração de 1,5 horas em uso contínuo.",
            "price": 115,
            "brand": "Lenovo",
            "color": "Preto",
            "material": "Plástico",
            "category": "Eletrônico",
            "size": [],
            "stock": 0,
            "image": "https://s2.glbimg.com/0J-B5BjlZ_iPoIxPgCMVqkmqM6U=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/e/5/tjI8VlRcC483euipGUfw/lenovo2.jpg",
            "createdAt": "2022-10-03T20:36:31.053Z",
            "updatedAt": "2022-10-03T20:46:27.469Z",
            "__v": 0
        },
        {
            "_id": "634b06b01a9ef6b9a02ec914",
            "title": "Relógio Inteligente SmartWatch D13 ",
            "description": "Tempo de trabalho: Cerca de 7 dias Toque: um ponto de toque Nível impermeável: IP67 Sensor: sensor de Três Eixos/luz Verde ativo sensor de frequência cardíaca Mostrador do relógio função: Tempo de exibição, exibição do ícone da bateria, exibição da data, semana de exibição de esportes Padrão função (passo, distância, caloria) multi-modo de esportes (a pé, correr, andar de bicicleta, pular, badminton, basquete, futebol, natação) exame de Saúde função: freqüência cardíaca, pressão arterial, teste de teste de oxigênio no sangue (Você pode salvar os últimos registros de 7) Sono exibição de tempo, ajuste de brilho da tela, controle de música, interruptor de vibração vibração do motor, a história de armazenamento de mensagens (3) Função de lembrete: Chamada, SMS, QQ, WeChat lembrete (exibir o conteúdo e nome). Facebook, Whatsapp, Twitter, Skype, e outros estrangeiros lembretes de software social. alarm clock (três conjuntos de despertadores), lembrete sedentário. Anti-perdido inteligente: Encontrar a pulseira. (sem desconectar lembrete) Trajetória de movimento: apoio Android APLICATIVO saúde medição: freqüência cardíaca, pressão arterial, a medição. Monitoramento da freqüência cardíaca durante todo o dia (exibido em bares, mais alta registrada, menor freqüência cardíaca) Controle remoto da câmera: Apoio a longo imprensa a pulseira de telefone de controle remoto para tirar fotos Outros: não perturbe modo, levantar a mão para a tela brilhante, time format setting, restaurar a fábrica, longo de imprensa para rejeitar chamadas recebidas, três interface do relógio seleção, controle de música (suporte anterior, em seguida, play/pause), exposição do tempo, a apple para a saúde.",
            "price": 80,
            "brand": "D13",
            "color": "Preto",
            "material": "Plástico",
            "category": "Eletrônico",
            "size": [
                "P",
                "M",
                "G"
            ],
            "stock": 0,
            "image": "https://m.media-amazon.com/images/I/51bm67Iu8PL._AC_SX425_.jpg",
            "createdAt": "2022-10-15T19:14:56.548Z",
            "updatedAt": "2022-10-15T19:14:56.548Z",
            "__v": 0
        }
    ]

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await api.get('/products');
                //mudar para response.data
                dispatch(setProducts(serverResponse));
            } catch (err) {
                console.log(err);
            }
        }
        getProducts();
    }, []);

    return (
        <Box>
            <Text
                px={[4, 10, 20]}
                py={5}
                fontWeight={'bold'}
                fontSize={'2xl'}
            >
                Produtos Relacionados
            </Text>

            <Box
                cursor={'grab'}
                mx={['2', '3', '4', '5']}
            >
                <Swiper
                    slidesPerView={
                        isLargerThan1280
                            ? 5
                            : isLargerThan768
                            ? 4
                            : isLargerThan425
                            ? 2
                            : 1
                    }
                    slidesPerGroup={1}
                    spaceBetween={10}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    autoplay={{
                        delay: 1700,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {products.slice(0, 9).map((product: productInfo) => (
                        <SwiperSlide key={product._id}>
                            <Center>
                                <Box
                                    borderRadius={10}
                                    border="1px solid #e2e8f0"
                                    w="280px"
                                    minH="410px"
                                    pb="2"
                                    bg="white"
                                >
                                    <Image
                                        borderRadius={'10px 10px 0 0'}
                                        h="180px"
                                        w="100%"
                                        objectFit={'cover'}
                                        src={product.image}
                                        alt={product.title}
                                    />
                                    <Box mx="5">
                                        <HStack>
                                            <Text
                                                fontSize={'xl'}
                                                fontWeight={'bold'}
                                                mt="2"
                                                wordBreak={'break-word'}
                                            >
                                                {product.title}
                                            </Text>
                                            <Box mt="2">
                                                <BsHeart color="red" />
                                            </Box>
                                        </HStack>
                                        <HStack>
                                            <BsStarFill color="#9F7AEA" />
                                            <BsStarFill color="#9F7AEA" />
                                            <BsStarFill color="#9F7AEA" />
                                            <BsStarFill color="#9F7AEA" />
                                            <BsStarHalf color="#9F7AEA" />
                                        </HStack>
                                        <Stack spacing={0}>
                                            {/*Exemplo com desconto*/}
                                            <Box
                                                transform={'translateY( 10px)'}
                                            >
                                                <Text
                                                    as="del"
                                                    color={'red'}
                                                >
                                                    {PriceFormat(product.price)}
                                                </Text>
                                            </Box>
                                            <Text
                                                fontSize={'3xl'}
                                                fontWeight={'extrabold'}
                                                mt="4"
                                            >
                                                {PriceFormat(
                                                    product.price -
                                                        product.price * 0.1
                                                )}
                                            </Text>
                                            <Text
                                                transform={'translateY(-10px)'}
                                            >
                                                Á vista no PIX
                                            </Text>
                                        </Stack>
                                        <Center
                                            mt="5"
                                            pb="2"
                                        >
                                            <Button
                                                w="100%"
                                                colorScheme={'purple'}
                                                onClick={() => {
                                                    router.push(
                                                        `/shop/${product._id}`
                                                    );
                                                }}
                                            >
                                                Comprar
                                            </Button>
                                        </Center>
                                    </Box>
                                </Box>
                            </Center>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
}
