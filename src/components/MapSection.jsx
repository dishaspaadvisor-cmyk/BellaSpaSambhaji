export default function MapSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
            Find Us
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Visit Bella Spa
          </h2>

          <p className="mt-4 text-slate-600">
            Shop No.5-9, Ground Floor, Rathi Planet, MIDC Industrial Area,
            Chilkalthana, Chhatrapati Sambhaji Nagar, Maharashtra 431007
          </p>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-red-100 shadow-xl">
          <iframe
            src="https://maps.google.com/maps?q=Rathi%20Planet%20MIDC%20Industrial%20Area%20Chilkalthana%20Chhatrapati%20Sambhaji%20Nagar&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bella Spa Location"
          />
        </div>
      </div>
    </section>
  );
}