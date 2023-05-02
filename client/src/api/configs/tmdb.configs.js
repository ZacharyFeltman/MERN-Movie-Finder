const mediaType = {
    movie: "movie",
    tv: "tv"
};

const mediaCategory = {
    popular: "popular",
    top_rated: "top_rated"
};

const backdropPath = (imgEndpoint) => `https://image.tmdb.org/t/p/original${imgEndpoint}`;  //image might be iamge

const posterPath = (imgEndpoint) => `https://image.tmdb.org/t/p/w500${imgEndpoint}`;

const youtubePath = (videoId) => `https://www.youtube.com/embed/${videoId}?controls=0`;

