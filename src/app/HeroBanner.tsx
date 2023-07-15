import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import BannerTile from "./BannerTile";
import { BannerProps } from "./Banner";

const sampleData = require("./utilities/sampledata.json");

type SampleData = Pick<BannerProps, "title" | "description"> & {
  genres: string[];
  cover_url: string;
};

export const StyledSwiper = styled(Swiper)`
  & .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }
`;

const HeroBanner = () => (
  <StyledSwiper navigation modules={[Navigation]} slidesPerView={1}>
    {sampleData.data.map((item: SampleData, index: number) => (
      <SwiperSlide key={`key-${item.title}-${index}`}>
        <BannerTile
          title={item.title}
          tags={item.genres}
          image={item.cover_url}
          description={item.description}
        />
      </SwiperSlide>
    ))}
  </StyledSwiper>
);

export default HeroBanner;
