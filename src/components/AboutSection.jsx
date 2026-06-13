import Image from "next/image";
import {
  Sparkles,
  ShieldCheck,
  Heart,
  Award,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Luxury Ambience",
    description:
      "Peaceful interiors designed for deep relaxation.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Rooms",
    description:
      "Clean, private, and comfortable spa rooms.",
  },
  {
    icon: Heart,
    title: "Wellness Care",
    description:
      "Therapies focused on relaxation and body comfort.",
  },
  {
    icon: Award,
    title: "Expert Therapists",
    description:
      "Professional spa care with trained therapists.",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-[#f8f8f8] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top Section */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <div className="overflow-hidden rounded-[32px] shadow-xl">
            <div className="relative h-[420px] md:h-[520px]">
              <Image
                src="/other/ot1.jpg"
                alt="Bella Spa"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-yellow-500">
              Luxury Wellness
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Premium Spa & Massage Experience in
              <br />
              Chhatrapati Sambhaji Nagar
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              Bella Spa offers professional spa and massage therapies
              designed to relax the body, refresh the mind, and
              improve overall wellness. Our peaceful ambience,
              hygienic rooms, and trained therapists make every
              visit comfortable and rejuvenating.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Located at Rathi Planet, MIDC Industrial Area,
              Chilkalthana, Chhatrapati Sambhaji Nagar,
              Maharashtra 431007, we provide luxury massage
              services including Thai Massage, Full Body Massage,
              Deep Tissue Massage, Swedish Massage, Hot Oil
              Massage, Aroma Therapy, and Couple Massage.
            </p>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-[28px] bg-white p-10 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <Icon
                  size={42}
                  className="mx-auto text-yellow-500"
                />

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}