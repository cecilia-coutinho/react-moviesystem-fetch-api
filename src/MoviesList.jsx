import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import MovieCard from './MovieCard';
import { useState, useEffect } from 'react';


const MoviesList = ({ movies, title, showOverviewCondition, showAddMovieCondition }) => {

  const [pagination, setPagination] = useState(0);
  useEffect(() => {
    setPagination(1);
  }, [pagination]);

  return (

    <CarouselContainer>
      <CustomTitle>{title}</CustomTitle>
      <CustomCarousel
        showThumbs={false}
        showArrows={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={8000}
        showIndicators={true}
      >
        {movies.map((movie, index) => {
          return (
            <div key={movie.movieId}>
              <MovieCard
                movie={movie}
                showOverview={showOverviewCondition}
                showAddMovie={showAddMovieCondition}
              />
              <PaginationDetails>
                <p>Showing {pagination + index} of {movies.length} items</p>
              </PaginationDetails>
            </div>
          );
        })}
      </CustomCarousel >
    </CarouselContainer>
  );
}

export default MoviesList;

export const CustomTitle = styled.h2`
  margin: 0px 0 20px 0;
  color: var(--color-primary-5);
  font-size: 30px;
  padding: 40px 5px 10px 5px;
  display: flex;
  justify-content: center;
`;

const CarouselContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
`;


const CustomCarousel = styled(Carousel)`
  font-size: 14px;
  display: block;
  margin: 0 auto;
  padding: 10px;

  .carousel .control-dots {
        margin: 0;
    width: 100%;
    position: absolute;
  }

  .carousel .control-dots .dot {
  width: 12px;
  height: 12px;
  margin: 0px 5px;
  background: var(--color-primary-1);
}

.carousel .slider-wrapper {
    margin-bottom: 20px;
  }
}
`;

const PaginationDetails = styled.div`
  margin: 0 auto;
  padding: 10px 10px;
  font-weight: 600;
`;

const SlidesDetails = styled.div`
display: 'flex';
    flex-direction: column;
    width: 100%;
    padding: 0 10px;
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5, // optional, default to 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

