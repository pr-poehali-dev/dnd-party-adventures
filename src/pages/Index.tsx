import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/ecffb486-95b3-48e6-ba6e-205e72c2a45d/files/d5de3daf-2ae0-40d3-ab23-c8c146a45766.jpg';
const TEXTURE_IMG = 'https://cdn.poehali.dev/projects/ecffb486-95b3-48e6-ba6e-205e72c2a45d/files/da602b1c-bec3-4ac3-9434-798de36fc696.jpg';

const NAV = [
  { id: 'hero', label: 'Главная' },
  { id: 'characters', label: 'Персонажи' },
  { id: 'story', label: 'История' },
  { id: 'chronicle', label: 'Хроника' },
];

const CHARACTERS = [
  {
    name: 'Барон Сандор Рейвенфорт',
    role: 'Носитель Испепелителя',
    race: 'Хитрец и воин',
    icon: 'Sword',
    desc: 'Расчётливый барон, что обзавёлся священным мечом против нежити и дьяволов. Носит черепа поверженных врагов как трофеи — чтобы низшие дьяволы знали, с кем имеют дело.',
  },
  {
    name: 'Лирика',
    role: 'Жрица',
    race: 'Служительница божества',
    icon: 'Sparkles',
    desc: 'Знаток повадок нежити, чьи божественные силы развеивают орды восставших мертвецов. Её чутьё не раз выводило отряд на логова вампиров.',
  },
  {
    name: 'Ариана',
    role: 'Жрица',
    race: 'Тифлинг',
    icon: 'Flame',
    desc: 'Тифлинг, рождённая со связью с инфернальными мирами. Вместе с Лирикой её священная мощь обращает в прах легионы нежити у стен Щита Хельма.',
  },
  {
    name: 'Ксарн',
    role: 'Странник Подземья',
    race: 'Дроу',
    icon: 'Moon',
    desc: 'Дроу, привыкший к тьме и опасности. Объединился с отрядом по холодному расчёту — вместе пережить падение Элтуреля проще, чем в одиночку.',
  },
];

const CHRONICLE = [
  { day: '2 Марпенота', title: 'Падение Элтуреля', text: 'Волей дьяволицы Зариэль целый город был низвергнут в Аверно. Градоначальник заключил с ней сделку, а горожане, сами того не зная, скрепили контракт клятвой верности городу. Когда Зариэль понадобились ресурсы для войны с демонами — она забрала должное.' },
  { day: '2–7 Марпенота', title: 'Рождение отряда', text: 'Пять дней город пребывал в панике. Барон Сандор, жрица Лирика, тифлинг Ариана и дроу Ксарн бродили по улицам в поисках ответов. Они объединились — не из симпатии, а по простому расчёту: вместе выжить проще.' },
  { day: '7 Марпенота', title: 'Спасение Харкины', text: 'Отряд встретил Харкину Хант, бежавшую с двумя детьми от троих бородатых дьяволов, что хотели продать их в рабство. Дьяволов перебили. Сандор забрал голову одного — намереваясь носить череп, чтобы низшие дьяволы знали, с кем имеют дело. В лагере выживших отряд встретил Клава Икайю — Верховного Всадника и вампира.' },
  { day: '8 Марпенота', title: 'Пара Чёрных Рогов', text: 'У таверны волшебницы Лефит Эзим дьяволы сошлись с демонами. Костяной дьявол Тилигилус предложил союз, но в разгар боя отряд переметнулся к демонам минотавра Коровека. В награду Сандор забрал священный меч — Испепелитель, разящий нежить и дьяволов пламенем. Череп Тилигилуса стал застёжкой его плаща.' },
  { day: '9 Марпенота', title: 'Доки Драконьего Глаза', text: 'В доме семьи Ратханда отряд нашёл всех обращёнными в вампирских отродий и самого вампира Спурнайта. В подвале отыскали его гроб — Сандор вбил кол в сердце, даровав окончательную смерть. Артефакты поделили с Клавом. Затем Сандор приставил Испепелитель к горлу вампира, обвинив того в подстроенной ловушке — но резни на глазах толпы устраивать не стал.' },
  { day: '10 Марпенота', title: 'Щит Хельма', text: 'По пути к замку отряд прошёл Мост Торма без боя — трофеи Сандора отпугнули дьяволов. У стен Щита Хельма Лирика и Ариана развеяли орды нежити, а в подземелье отряд спас паладина Онтарра Фрума. Тот узнал в Испепелителе меч погибшего друга и потребовал вернуть реликвию. Сандор отказал — и тепло меж ними угасло.' },
];

const Index = () => {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      for (const item of [...NAV].reverse()) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActive(item.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Floating embers */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute block rounded-full bg-primary/70 animate-ember-rise"
            style={{
              left: `${(i * 53) % 100}%`,
              bottom: '-10px',
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              animationDelay: `${(i % 6) * 1.1}s`,
              animationDuration: `${5 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-gold/20">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 font-display text-lg tracking-widest gold-gradient">
            <Icon name="Flame" size={22} className="text-primary" />
            AVERNUS
          </button>
          <ul className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => scrollTo(n.id)}
                  className={`font-serif text-base tracking-wide transition-colors ${active === n.id ? 'text-primary' : 'text-muted-foreground hover:text-gold'}`}
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} alt="Аверно" className="w-full h-full object-cover animate-flicker" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,hsl(var(--background))_95%)]" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <p className="font-serif italic text-gold/80 text-lg md:text-xl mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Марпенот, 20 год Новой Эры · Первый слой Баатора
          </p>
          <h1 className="font-display font-black text-5xl md:text-8xl tracking-tight ember-gradient text-glow opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            АВЕРНУС
          </h1>
          <p className="mt-6 max-w-2xl mx-auto font-body text-lg md:text-xl text-foreground/80 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Город Элтурель был низвергнут в Ад волей дьяволицы Зариэль.
            Это хроника четверых, что объединились ради выживания среди рек крови и огненных небес.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <button onClick={() => scrollTo('characters')} className="px-8 py-3 rounded-md bg-primary text-primary-foreground font-display tracking-wider hover:scale-105 transition-transform animate-glow-pulse">
              Знакомство с партией
            </button>
            <button onClick={() => scrollTo('chronicle')} className="px-8 py-3 rounded-md border border-gold/40 text-gold font-display tracking-wider hover:bg-gold/10 transition-colors">
              Читать хронику
            </button>
          </div>
        </div>
        <button onClick={() => scrollTo('characters')} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 animate-bounce z-10">
          <Icon name="ChevronDown" size={32} />
        </button>
      </section>

      {/* CHARACTERS */}
      <section id="characters" className="relative z-10 py-24 container mx-auto px-4">
        <SectionTitle eyebrow="Те, кто рискнул всем" title="Персонажи" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {CHARACTERS.map((c, i) => (
            <article
              key={c.name}
              className="group infernal-border rounded-lg bg-card/80 p-6 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/15 border border-gold/30 flex items-center justify-center mb-5 group-hover:animate-glow-pulse">
                <Icon name={c.icon} size={30} className="text-primary" />
              </div>
              <h3 className="font-display text-xl gold-gradient">{c.name}</h3>
              <p className="font-serif italic text-gold/70 mt-1">{c.role}</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{c.race}</p>
              <div className="w-12 h-px bg-gold/30 my-4" />
              <p className="font-body text-sm text-foreground/75 leading-relaxed">{c.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="relative z-10 py-24">
        <div className="absolute inset-0 opacity-20">
          <img src={TEXTURE_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative container mx-auto px-4 max-w-4xl">
          <SectionTitle eyebrow="Первый слой Баатора" title="История" />
          <div className="mt-14 space-y-8 font-body text-lg leading-relaxed text-foreground/85">
            <p className="first-letter:font-display first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:gold-gradient first-letter:leading-none">
              Авернус — бесплодная каменная пустыня, озарённая красным светом, что льётся с бессолнечных
              небес. Острые обсидиановые и кварцевые осколки обильно усыпают мёртвый ландшафт, делая
              быстрое перемещение смертельно опасным.
            </p>
            <p>
              Иногда на камнях проступают искажённые мукой лица. Реки крови текут через выжженную землю —
              некоторые баатезу утверждают, что это кровь всех жертв их интриг и коварства. Через этот
              слой течёт и сама река Стикс, чьи воды крадут память у всякого, кто их коснётся.
            </p>
            <blockquote className="border-l-2 border-gold/50 pl-6 italic font-serif text-xl text-gold/90">
              «Небо здесь не знает солнца — лишь вечное багровое зарево над пустыней из острого камня.»
              <span className="block text-sm not-italic text-muted-foreground mt-2">— о первом слое Баатора</span>
            </blockquote>
            <p>
              Но главная угроза приходит сверху. Без видимых причин с бессолнечных небес срываются
              огненные шары и падают со взрывом, обращая в пепел всё на своём пути. В этот ад был
              низвергнут целый город Элтурель — и четверо смертных, что теперь ищут дорогу домой.
            </p>
          </div>
        </div>
      </section>

      {/* CHRONICLE */}
      <section id="chronicle" className="relative z-10 py-24 container mx-auto px-4 max-w-3xl">
        <SectionTitle eyebrow="Летопись похода" title="Хроника" />
        <div className="mt-14 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/10 via-gold/40 to-transparent" />
          {CHRONICLE.map((e, i) => (
            <div key={e.day} className={`relative flex md:items-center mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-2 border-gold animate-glow-pulse z-10" />
              <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <span className="font-display text-sm tracking-widest text-primary">{e.day}</span>
                <h3 className="font-serif text-2xl gold-gradient mt-1">{e.title}</h3>
                <p className="font-body text-foreground/75 mt-2 leading-relaxed">{e.text}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center font-serif italic text-gold/70 text-xl mt-4">Продолжение следует…</p>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-gold/20 py-10 text-center">
        <div className="flex items-center justify-center gap-2 font-display tracking-widest gold-gradient text-lg">
          <Icon name="Flame" size={20} className="text-primary" />
          AVERNUS CHRONICLE
        </div>
        <p className="font-serif italic text-muted-foreground mt-3">Хроника нашей партии · Dungeons &amp; Dragons</p>
      </footer>
    </div>
  );
};

const SectionTitle = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div className="text-center">
    <p className="font-serif italic text-gold/70 text-lg">{eyebrow}</p>
    <h2 className="font-display font-bold text-4xl md:text-6xl ember-gradient text-glow mt-2">{title}</h2>
    <div className="w-24 h-px bg-gold/40 mx-auto mt-6" />
  </div>
);

export default Index;