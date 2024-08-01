
/*

  Este carousel no se usa en este proyecto.
  Lo dejo por si lo llego a usar JAJA.

*/




import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';

export function Carousel() {
  const items = [
    '../../public/img/imagen1.jpg',
    '../../public/img/imagen3.jpg',
  ];

  return (
    <div className="w-full  overflow-hidden">
      <ResponsiveCarousel
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        dynamicHeight={false}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full">
            <img src={item} alt={`Slide ${index}`} className="w-fullobject-cover" />
          </div>
        ))}
      </ResponsiveCarousel>
    </div>
  );
}
