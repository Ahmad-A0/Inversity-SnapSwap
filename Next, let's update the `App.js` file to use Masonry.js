import Masonry from 'react-masonry-css';

<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.6 }}
  className="mt-12"
>
  <Masonry
    className="my-masonry-grid"
    columnClassName="my-masonry-grid_column"
  >
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
      <div
        key={i}
        className="my-masonry-grid_column"
        style={{
          backgroundImage: `url(${placeholderImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
          borderRadius: '10px',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'transform 0.3s ease-in-out',
          transform: 'scale(1)',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      />
    ))}
  </Masonry>
</motion.div>
