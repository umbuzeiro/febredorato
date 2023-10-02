
import { Pagination, Controller, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide,useSwiper} from 'swiper/react';
import 'swiper/css';
import { Banner } from '@/components/Banner/Banner'

export function Banners() {
    return (
        <>
            <Swiper
                modules={[Pagination, Controller, Autoplay]}
                centeredSlides={true}
                initialSlide={1}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                loop={true}
                spaceBetween={0}
                slidesPerView={1.4}
                onSlideChange={() => console.log('slide change')}
                pagination={{
                    clickable: true,
                }}
            >
                <SwiperSlide>
                    <Banner title="Segurança no trabalho" desc='Na nossa empresa, a segurança dos nossos colaboradores é uma prioridade absoluta. Sabemos que trabalhos elétricos podem apresentar riscos significativos, e é por isso que investimos constantemente em treinamentos de segurança.' img='/img/rd-1.webp' />
                </SwiperSlide>
                <SwiperSlide>
                    <Banner title="GTD" desc='Nossa atuação abrange uma ampla gama de setores vitais relacionados à energia, incluindo a geração, transmissão e distribuição de eletricidade, gás natural e outras fontes de energia.' img='/img/lt-3.webp' />
                </SwiperSlide>
                <SwiperSlide>
                    <Banner title="Garantimos a sustentabilidade" desc='A sustentabilidade é um pilar fundamental em nossa empresa. Integramos práticas ambientalmente responsáveis em todas as operações, reduzindo nosso impacto e promovendo a conservação dos recursos naturais.' img='/img/tree-2.webp' />
                </SwiperSlide>
                <SwiperSlide>
                    <Banner title="Energia limpa" desc='Investimos constantemente em fontes renováveis, como solar e eólica, para reduzir nossa pegada de carbono. Além disso, promovemos a eficiência energética em todas as operações, demonstrando nosso compromisso com um ambiente mais saudável e sustentável.' img='/img/eolico-3.webp' />
                </SwiperSlide>
            </Swiper>
        </>
    )
}