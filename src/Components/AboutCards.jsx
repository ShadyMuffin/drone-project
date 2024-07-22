import AboutCard from "./AboutCard";

const cardData = [
  {
    title: "Who We Serve",
    text: "We cater to a diverse range of clients, including real estate professionals, event organizers, filmmakers, and businesses seeking to elevate their visual content. Our services include aerial photography, videography, real estate showcases, and event coverage. We pride ourselves on delivering top-notch results that solve our clients' needs and exceed their expectations.",
    imageUrl: "src/img/drone4.jpg",
  },
  {
    title: "How We Operate",
    text: "Our expert team utilizes the latest drone technology to ensure precision and quality in every project. We follow a meticulous process, from planning and execution to post-production, ensuring that every shot is perfect. Our commitment to innovation and attention to detail sets us apart from the competition.",
    imageUrl: "src/img/drone1.jpg",
  },
  {
    title: "The Face Of Our Business",
    text: "Meet the team behind the magic. Our founder, Kevin Ulberg, along with our certified drone pilots and industry experts, work tirelessly to deliver exceptional service. We believe in transparency and love sharing behind-the-scenes glimpses of our work, whether it's from our studio or on location.",
    imageUrl: "src/img/about7.jpg",
  },
];

function AboutCards() {
  return (
    <div className="p-14 grid gap-12 lg:grid-cols-3 mt-[200px]">
      {cardData.map((card, index) => (
        <AboutCard
          key={index}
          title={card.title}
          text={card.text}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
}

export default AboutCards;
