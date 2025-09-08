import shipBg from '@/assets/ship-bg.png';

const VideoSection = () => {
  return (
    <section className="relative w-full h-[50vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${shipBg})`,
        }}
      />
    </section>
  );
};

export default VideoSection;
