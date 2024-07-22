import Card from "./Card";

const cardData = [
  {
    title: "Cutting-Edge Technology",
    text: "We utilize the latest drone technology for unparalleled precision and quality, ensuring superior results in every project.",
    imageUrl: "src/img/drone5.jpg",
  },
  {
    title: "Expert Team",
    text: "Our team of certified drone pilots and industry experts guarantee professional service and innovative solutions tailored to meet your specific needs.",
    imageUrl: "src/img/drone7.jpg",
  },
  {
    title: "Customer-Centric Approach",
    text: "We prioritize customer satisfaction by offering personalized services, quick turnaround times, and exceptional support, making us the preferred choice for drone services.",
    imageUrl: "src/img/drone6.jpg",
  },
];

function Cards() {
  return (
    <div className=" grid gap-12 lg:grid-cols-3 mt-[200px]">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          text={card.text}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
}

export default Cards;
