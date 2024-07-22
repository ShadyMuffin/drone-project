function AboutCard({ title, text, imageUrl }) {
  return (
    <>
      <div className="rounded-lg overflow-hidden shadow-lg bg-slate-900">
        <img className="w-full h-48 object-cover" src={imageUrl} />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2 text-emerald-600">{title}</h2>
          <p className="text-white">{text}</p>
        </div>
      </div>
    </>
  );
}

export default AboutCard;
