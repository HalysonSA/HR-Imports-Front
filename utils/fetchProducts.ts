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
                        _id: '633b47cf279c61cf2e09fb32',
                        title: 'Smartphone Samsung Galaxy S20',
                        description:
                            'Smartphone Samsung Galaxy S20 FE 5G 128GB, 6GB RAM Este é o smartphone para pessoas que querem tudo. Ouvimos vocês, os fãs, e agora não precisam mais ficar em dúvida sobre o que escolher. Este é o smartphone feito sob medida para fãs de todos os tipos. Então, se você é fã de fotografia, jogos ou adora deixar seu feed repleto de tudo que o inspira, nós reunimos a combinação definitiva de inovação S20. Este é o smartphone que oferece o que você deseja, para você fazer mais daquilo que ama. A Câmera de Lente Tripla de Nível Profissional A câmera de lente tripla de nível profissional permite que você tire aquela foto profissional digna de #semfiltro com facilidade. Enquadre a cena com a câmera wide e, a seguir, mostre ainda mais com a câmera ultra-wide, ou aumente o zoom com o zoom óptico de 3x na câmera teleobjetiva.Conectividade O LTE de até 1,6 Gbps oferece velocidades de dados poderosas, enquanto o Wi-Fi 6 conecta você com segurança e baixa latência, mesmo em um local lotado. Portanto, quer você esteja conectado a LTE ou Wi-Fi, pode jogar em tempo real com pouco atraso.Bateria Inteligente o Dia Todo para que Você possa Jogar por Horas Viva sua vida sem se preocupar com onde você pode conectar seu smartphone. A bateria de 4500mAh (padrão) dá ao seu smartphone a energia necessária para durar mais que o seu dia, e é inteligente o suficiente para economizar energia para quando você realmente precisar.Espaço para Milhares de Fotos e Vídeos Com 128 GB integrados e a capacidade de armazenar até 1 TB (não incluso) a mais em um cartão microSD, o único limite para o que você pode armazenar é o que você pode criar e baixar.',

                        price: 1890.0,
                        brand: 'Samsung',
                        color: ['#ffffff'],
                        material: 'Plástico e metal',
                        category: 'Celular e Smartphone',
                        size: ['único'],
                        stock: null,
                        promotional: false,
                        image: [
                            'https://images.kabum.com.br/produtos/fotos/325684/smartphone-samsung-galaxy-s20-fe-5g-6gb-ram-128gb-octa-core-camera-tripla-32mp-tela-infinita-6-5-branco-sm-g781bzwrzto_1652124965_gg.jpg',
                            'https://images.kabum.com.br/produtos/fotos/325684/smartphone-samsung-galaxy-s20-fe-5g-6gb-ram-128gb-octa-core-camera-tripla-32mp-tela-infinita-6-5-branco-sm-g781bzwrzto_1652124964_gg.jpg',
                            'https://images.kabum.com.br/produtos/fotos/325684/smartphone-samsung-galaxy-s20-fe-5g-6gb-ram-128gb-octa-core-camera-tripla-32mp-tela-infinita-6-5-branco-sm-g781bzwrzto_1652124967_gg.jpg',
                            'https://images.kabum.com.br/produtos/fotos/325684/smartphone-samsung-galaxy-s20-fe-5g-6gb-ram-128gb-octa-core-camera-tripla-32mp-tela-infinita-6-5-branco-sm-g781bzwrzto_1652124963_gg.jpg',
                            'https://images.kabum.com.br/produtos/fotos/325684/smartphone-samsung-galaxy-s20-fe-5g-6gb-ram-128gb-octa-core-camera-tripla-32mp-tela-infinita-6-5-branco-sm-g781bzwrzto_1652124961_gg.jpg',
                        ],
                        createdAt: '2022-10-03T20:36:31.053Z',
                        updatedAt: '2022-10-03T20:46:27.469Z',
                        __v: 0,
                    },
                    {
                        _id: '633b47cf279c61cf2e093b32',
                        title: 'Smart TV Neo QLED Samsung 75 Polegadas 8K',
                        description:
                            'Desfrute do máximo da qualidade de imagem em 8K, com 1 bilhão de cores vibrantes por muito mais tempo. Toda intensidade de cores e brilho das telas QLED Samsung agora ainda mais surpreendente com um exclusivo painel de Mini LED que viabiliza além de uma TV mais fina, precisão na iluminação pra você testemunhar a evolução do contraste e aproveitar todos os pequenos detalhes até nas cenas mais escuras do filme.',
                        price: 58800.0,
                        brand: 'Samsung',
                        color: ['#ffffff'],
                        material: 'Plástico e metal',
                        category: 'Smart TV',
                        size: ['único'],
                        stock: null,
                        promotional: false,
                        image: [
                            'https://images.kabum.com.br/produtos/fotos/sync_mirakl/163896/Smart-TV-Neo-QLED-Samsung-75-8K-Ultrafina-Mini-LED-Processador-IA-Som-Em-Movimento-Pro-75QN900A_1663945720_gg.jpg',
                            'https://images.kabum.com.br/produtos/fotos/sync_mirakl/163896/Smart-TV-Neo-QLED-Samsung-75-8K-Ultrafina-Mini-LED-Processador-IA-Som-Em-Movimento-Pro-75QN900A_1663945732_gg.jpg',
                            'https://images.kabum.com.br/produtos/fotos/sync_mirakl/163896/Smart-TV-Neo-QLED-Samsung-75-8K-Ultrafina-Mini-LED-Processador-IA-Som-Em-Movimento-Pro-75QN900A_1663945745_gg.jpg',
                            'https://images.kabum.com.br/produtos/fotos/sync_mirakl/163896/Smart-TV-Neo-QLED-Samsung-75-8K-Ultrafina-Mini-LED-Processador-IA-Som-Em-Movimento-Pro-75QN900A_1663945757_gg.jpg',
                            'https://images.kabum.com.br/produtos/fotos/sync_mirakl/163896/Smart-TV-Neo-QLED-Samsung-75-8K-Ultrafina-Mini-LED-Processador-IA-Som-Em-Movimento-Pro-75QN900A_1663945769_gg.jpg',
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
                        category: 'Periférico',
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

                    {
                        _id: '63743e809a3d64c9f76f89ra',
                        title: 'Kit Gamer Redragon Teclado Mecânico Kumara',
                        description:
                            'Kit Gamer Redragon - Teclado Mecânico Kumara, RGB, Switch Outemu Blue, PT, Branco + Mouse Cobra M711 Redragon Kumara RGB, a linha de Teclados Mecânicos mais vendida em todo o Brasil. Uma união fantástica de Design, Performance e Durabilidade para seu Setup, com o Estilo Redragon que você já ama e conhece.',
                        price: 230.0,
                        brand: 'Redragon',
                        color: ['#ffffff'],
                        material: 'Plástico',
                        category: 'Periférico',
                        size: ['único'],
                        stock: null,
                        promotional: true,
                        image: [
                            'https://images.kabum.com.br/produtos/fotos/128031/kit-gamer-redragon-teclado-mecanico-kumara-rgb-switch-outemu-blue-pt-branco-mouse-cobra-m711-chroma-10000dpi-branco-s118w_1600804255_gg.jpg',
                            'https://images.kabum.com.br/produtos/fotos/128031/kit-gamer-redragon-teclado-mecanico-kumara-rgb-switch-outemu-blue-pt-branco-mouse-cobra-m711-chroma-10000dpi-branco-s118w_1600804186_gg.jpg',
                            'https://images.kabum.com.br/produtos/fotos/128031/kit-gamer-redragon-teclado-mecanico-kumara-rgb-switch-outemu-blue-pt-branco-mouse-cobra-m711-chroma-10000dpi-branco-s118w_1600804187_gg.jpg',
                            'https://images.kabum.com.br/produtos/fotos/128031/kit-gamer-redragon-teclado-mecanico-kumara-rgb-switch-outemu-blue-pt-branco-mouse-cobra-m711-chroma-10000dpi-branco-s118w_1600804184_gg.jpg',
                        ],
                        createdAt: '2022-10-03T20:36:31.053Z',
                        updatedAt: '2022-10-03T20:46:27.469Z',
                        __v: 0,
                    },

                    {
                        _id: '63743e809932l64c9f76f89ra',
                        title: 'Mousepad Gamer Husky Black Avalanche Speed',
                        description:
                            'Com o Mousepad Gamer Husky Black Avalanche, Speed, Extra Grande, você possui um amplo espaço de ação de 900 por 400 mm que permite a completa fluidez de movimentos e muito mais velocidade para seu mouse.Desenvolvido com materiais de qualidade premium, o Mousepad gamer Husky Black Avalanche conta com tecido de microfibra de alta densidade e bordas costuradas, além de estrutura em borracha antideslizante e resistente ao suor. As borrachas antiderrapantes da parte inferior garantem aderência à mesa e as bordas com costura de alta qualidade são resistentes ao desgaste diário.',

                        price: 49.9,
                        brand: 'Husky',
                        color: ['#000000'],
                        material: 'Tecido e Borracha',
                        category: 'Periférico',
                        size: ['único'],
                        stock: null,
                        promotional: true,
                        image: [
                            'https://images.kabum.com.br/produtos/fotos/99474/mousepad-gamer-husky-black-avalanche-speed-extra-grande-890x400mm-mp-hav-bk_1636052636_gg.jpg',
                            'https://images.kabum.com.br/produtos/fotos/99474/mousepad-gamer-husky-black-avalanche-speed-extra-grande-890x400mm-mp-hav-bk_1636052634_gg.jpg',
                            'https://images.kabum.com.br/produtos/fotos/99474/mousepad-gamer-husky-black-avalanche-speed-extra-grande-890x400mm-mp-hav-bk_1636052637_gg.jpg',
                            'https://images.kabum.com.br/produtos/fotos/99474/mousepad-gamer-husky-black-avalanche-speed-extra-grande-890x400mm-mp-hav-bk_1636052633_gg.jpg',
                            'https://images.kabum.com.br/produtos/fotos/99474/mousepad-gamer-husky-black-avalanche-speed-extra-grande-890x400mm-mp-hav-bk_1636052630_gg.jpg',
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
