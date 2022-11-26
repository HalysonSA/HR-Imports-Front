import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '../components/Redux/ProductSlice';
const FetchProducts = async () => {
    const dispatch = useDispatch();

    useEffect(() => {
        async function getProducts() {
            try {
                //const response = await api.get('/products');
                const products = [
                    {
                        _id: '633b47cf279c61cf2e09fbc9',
                        title: ' Lenovo lp40 tws fones de ouvido sem fio bluetooth ',
                        description:
                            "O Lenovo LP40 traz um design moderno, sendo ideal para suas atividades. Possui um incrível sistema de alto falantes projetado com uma poderosa unidade de som de 13 mm interna, os fones de ouvido Lenovo LP40 tws oferecem um som limpo, alto e equilibrado, com altas frequências e feedback de voz. Para ficar ainda melhor, os fones de ouvido também são à prova d'água, capazes de suportar incidências de umidade, como respingos de suor durante exercícios físicos ou água da chuva durante uma aventura. A Sua bateria possui uma duração de 1,5 horas em uso contínuo.",
                        price: 115.3,
                        brand: 'Lenovo',
                        color: ['#000000', '#ffffff'],
                        material: 'Plástico',
                        category: 'Eletrônico',
                        size: ['único'],
                        stock: null,
                        promotional: false,
                        image: [
                            'https://images-americanas.b2w.io/produtos/4889477486/imagens/fone-de-ouvido-in-ear-sem-fio-lenovo-livepods-lp40/4889477494_1_xlarge.jpg',
                            'https://images-americanas.b2w.io/produtos/4889477486/imagens/fone-de-ouvido-in-ear-sem-fio-lenovo-livepods-lp40/4889477494_5_xlarge.jpg',
                        ],
                        createdAt: '2022-10-03T20:36:31.053Z',
                        updatedAt: '2022-10-03T20:46:27.469Z',
                        __v: 0,
                    },
                    {
                        _id: '634b06b01a9ef6b9a02ec914',
                        title: 'Relógio Inteligente SmartWatch D13 ',
                        description:
                            'Tempo de trabalho: Cerca de 7 dias Toque: um ponto de toque Nível impermeável: IP67 Sensor: sensor de Três Eixos/luz Verde ativo sensor de frequência cardíaca Mostrador do relógio função: Tempo de exibição, exibição do ícone da bateria, exibição da data, semana de exibição de esportes Padrão função (passo, distância, caloria) multi-modo de esportes (a pé, correr, andar de bicicleta, pular, badminton, basquete, futebol, natação) exame de Saúde função: freqüência cardíaca, pressão arterial, teste de teste de oxigênio no sangue (Você pode salvar os últimos registros de 7) Sono exibição de tempo, ajuste de brilho da tela, controle de música, interruptor de vibração vibração do motor, a história de armazenamento de mensagens (3) Função de lembrete: Chamada, SMS, QQ, WeChat lembrete (exibir o conteúdo e nome). Facebook, Whatsapp, Twitter, Skype, e outros estrangeiros lembretes de software social. alarm clock (três conjuntos de despertadores), lembrete sedentário. Anti-perdido inteligente: Encontrar a pulseira. (sem desconectar lembrete) Trajetória de movimento: apoio Android APLICATIVO saúde medição: freqüência cardíaca, pressão arterial, a medição. Monitoramento da freqüência cardíaca durante todo o dia (exibido em bares, mais alta registrada, menor freqüência cardíaca) Controle remoto da câmera: Apoio a longo imprensa a pulseira de telefone de controle remoto para tirar fotos Outros: não perturbe modo, levantar a mão para a tela brilhante, time format setting, restaurar a fábrica, longo de imprensa para rejeitar chamadas recebidas, três interface do relógio seleção, controle de música (suporte anterior, em seguida, play/pause), exposição do tempo, a apple para a saúde.',
                        price: 62.9,
                        brand: 'I9',
                        color: ['#FED7E2', '#ffffff', '#000000'],
                        material: 'Plástico',
                        category: 'Eletrônico',
                        size: ['único'],
                        stock: 0,
                        promotional: false,
                        image: [
                            'https://m.media-amazon.com/images/I/61H4YN-l7ZL._AC_SX679_.jpg',
                            'https://m.media-amazon.com/images/I/51BFLEB7gjL._AC_SX679_.jpg',
                            'https://m.media-amazon.com/images/I/51bm67Iu8PL._AC_SX679_.jpg',
                            'https://m.media-amazon.com/images/I/51RJLDwW8ML._AC_SX679_.jpg',
                        ],
                        createdAt: '2022-10-15T19:14:56.548Z',
                        updatedAt: '2022-10-15T19:14:56.548Z',
                        __v: 0,
                    },
                    {
                        _id: '63743e809a3d64c9f76f84ea',
                        title: 'Mouse Gamer Razer Viper Mini Chroma',
                        description:
                            'Criado para ultrapassar todos os limites dos mouses extremamente leves, o Razer Viper Mini chega em um formato reduzido, mantendo, ao mesmo tempo, um grande desempenho. Para diminuir o comprimento e a largura, trabalhamos com fãs e atletas de Esports para aperfeiçoar ainda mais seu design, assegurando que o controle absoluto chegue às mãos de mais gamers – portanto, apodere-se do nosso mouse gamer mais leve e compacto de todos.',
                        price: 200.5,
                        brand: 'Razer',
                        color: ['#000000'],
                        material: 'Plástico',
                        category: 'Eletrônico',
                        size: ['único'],
                        stock: null,
                        promotional: true,
                        image: [
                            'https://images.kabum.com.br/produtos/fotos/117217/mouse-gamer-razer-viper-mini-chroma-optical-switch-6-botoes-8500dpi-rz01-03250100-r3u1_1630596362_gg.jpg',
                            'https://images.kabum.com.br/produtos/fotos/117217/mouse-gamer-razer-viper-mini-chroma-6-botoes-8500dpi-rz01-03250100-r3u1_1597330052_gg.jpg',
                            'https://images.kabum.com.br/produtos/fotos/117217/mouse-gamer-razer-viper-mini-chroma-6-botoes-8500dpi-rz01-03250100-r3u1_1597330050_gg.jpg',
                            'https://images.kabum.com.br/produtos/fotos/117217/mouse-gamer-razer-viper-mini-chroma-6-botoes-8500dpi-rz01-03250100-r3u1_1597330048_gg.jpg',
                        ],
                        createdAt: '2022-10-03T20:36:31.053Z',
                        updatedAt: '2022-10-03T20:46:27.469Z',
                        __v: 0,
                    },
                ];
                //@ts-ignore - Não precisa se preocupar com isso
                dispatch(setProducts(products));
                //dispatch(setProducts(response.data));
            } catch (err) {
                console.log(err);
            }
        }
        getProducts();
    }, []);
};

export default FetchProducts;
