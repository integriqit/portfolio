import { Check, User } from 'lucide-react';
import chairmanImg from '../assets/chairman.jpeg';
import directorImg from '../assets/director.jpeg';

type Leader = {
  name: string;
  title: string;
  role: string;
  tier: string;
  bio: string;
  img?: string;
  imgPosition?: string;
  placeholder?: boolean;
};

const leaders: Leader[] = [
  {
    name: 'Md. Tariqul Islam',
    title: 'Chairman, Board of Directors',
    role: 'Chairman',
    tier: 'Board',
    bio: 'Chairs the board and sets the long-term vision for IntegriQ IT. He champions a culture of integrity, accountability and disciplined growth, ensuring every decision serves clients and the company\u2019s future in equal measure.',
    img: chairmanImg,
    imgPosition: 'center 20%',
  },
  {
    name: 'Md. Manirul Islam',
    title: 'Founder & Chief Executive Officer',
    role: 'Founder & CEO',
    tier: 'Executive',
    bio: 'Founded IntegriQ IT to build software teams can trust. He leads company strategy and day-to-day execution, pairing deep engineering experience with a clear focus on quality, reliability and lasting client relationships.',
  },
  {
    name: 'A. H. M. Mostafa Zaman',
    title: 'Director',
    role: 'Director',
    tier: 'Board',
    bio: 'Serves on the board and supports the company\u2019s operations and governance. He helps guide strategic decisions and partnerships, keeping delivery, trust and sustainable growth at the centre of how IntegriQ IT works.',
    img: directorImg,
    imgPosition: '44% 25%',
  },
  {
    name: 'Prosenjith Roy Shuvo',
    title: 'Head of Engineering',
    role: 'Head of Engineering',
    tier: 'Engineering',
    bio: 'Leads the engineering team and owns technical delivery end to end. From architecture and code quality to release discipline, he makes sure every product ships on time and holds up to real-world demands.',
  },
];

const Leadership = () => {
  return (
    <section id="leadership" className="py-24 bg-dark-surface/30 relative overflow-hidden">
      {/* Ambient background blobs (consistent with other sections) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-16 w-72 h-72 bg-[#10B981]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-16 right-16 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-[#10B981]/40">
              <Check className="h-3 w-3 text-[#10B981]" />
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#10B981]/80">
              Governance &amp; Leadership
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
            The people behind{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent inline-block py-1">
              IntegriQ IT
            </span>
          </h2>

          <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            A leadership team that pairs engineering depth with accountable governance —
            the same integrity we build into every line of code.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((p) => (
            <div
              key={p.name + p.role}
              className="group relative rounded-2xl border border-gray-900/60 bg-[#111622]/40 p-5 transition-all duration-300 hover:border-[#10B981]/30 hover:bg-[#111622] hover:shadow-[0_20px_50px_-24px_rgba(16,185,129,0.35)]"
            >
              {/* Role eyebrow */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#10B981]/80">
                  {p.role}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40">
                  {p.tier}
                </span>
              </div>

              {/* Photo / placeholder */}
              <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-gray-800 bg-[#0B0F17]">
                {p.img ? (
                  <img
                    src={p.img}
                    alt={p.placeholder ? 'Chairman of IntegriQ IT' : `${p.name}, ${p.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: p.imgPosition ?? 'center' }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-[#131a29] to-[#0B0F17]">
                    <User className="h-16 w-16 text-gray-700" strokeWidth={1.4} />
                  </div>
                )}

                {/* Verification tick — echoes the brand mark */}
                <span className="absolute bottom-2.5 right-2.5 grid h-8 w-8 place-items-center rounded-full bg-[#0B0F17]/90 border border-[#10B981]/30 shadow-[0_4px_14px_-4px_rgba(16,185,129,0.5)]">
                  <Check className="h-4 w-4 text-[#10B981]" strokeWidth={3} />
                </span>
              </div>

              {/* Name + title */}
              <h3
                className={
                  'mt-5 text-lg font-bold tracking-tight ' +
                  (p.placeholder ? 'text-muted-foreground/50 italic' : 'text-foreground')
                }
              >
                {p.name}
              </h3>
              <p className="mt-0.5 text-sm text-muted-foreground">{p.title}</p>

              {/* Bio */}
              <p className="mt-3 pt-3 border-t border-gray-900/80 text-xs leading-relaxed text-muted-foreground/80">
                {p.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
