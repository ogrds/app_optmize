import { Star, Clock } from "react-feather";

import "../styles/movie-card.scss";

interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
  style?: React.CSSProperties;
}

export function MovieCard({
  title,
  poster,
  rating,
  runtime,
  style = {},
}: MovieCardProps) {
  return (
    <div className="movie-card" style={style}>
      <img src={poster} alt={title} />

      <div>
        <div className="movie-info">
          <span>{title}</span>
          <div className="meta">
            <div>
              <Star /> {rating}
            </div>

            <div>
              <Clock /> {runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
