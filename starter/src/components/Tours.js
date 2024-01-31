import Tour from "./Tour";
import { tours } from "../data";

function Tours() {
  return (
    <section class="section" id="tours">
      <div class="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>
      <div class="section-center featured-center">
        {tours.map((tour) => (
          <Tour
          key={tour.id}
          image={tour.image}
          date={tour.date}
          title={tour.title}
          info={tour.info}
          location={tour.location}
          duration={tour.duration}
          cost={tour.cost}
          />
        ))}
      </div>
    </section>
  );
}

export default Tours;
