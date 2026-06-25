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
  {
    day: '2 Марпенота',
    title: 'Падение Элтуреля',
    paragraphs: [
      'В этот день город Элтурель был низвергнут в Аверно — первый слой Баатора — волей дьяволицы Зариэль. Градоначальник некогда заключил с ней сделку, а горожане, сами того не зная, скрепили контракт клятвой верности городу. Когда Зариэль понадобились ресурсы для войны с демонами — она забрала должное.',
    ],
  },
  {
    day: '2–7 Марпенота',
    title: 'Рождение отряда',
    paragraphs: [
      'Пять дней город пребывал в панике. Барон Сандор Рейвенфорт, жрица Лирика, тифлинг Ариана и дроу Ксарн бродили по улицам, пытаясь разобраться в происходящем. За это время они нашли друг друга и объединились — не из-за симпатии, а из простого расчёта: вместе выжить проще.',
    ],
  },
  {
    day: '7 Марпенота',
    title: 'Спасение Харкины',
    paragraphs: [
      'Отряд наткнулся на женщину по имени Харкина Хант. Она пыталась уйти от троих бородатых дьяволов вместе с двумя маленькими детьми — девочкой Эзо и мальчиком Браском, обоим около трёх лет. Дьяволы намеревались продать их в рабство. Отряд вмешался и убил всех троих.',
      'Сандор отрубил голову одному из дьяволов и забрал её с собой — намереваясь выварить и носить череп при себе, чтобы низкоранговые дьяволы понимали, с кем имеют дело.',
      'Харкину с детьми отвели в лагерь выживших горожан на рынке Шеары. Там отряд познакомился с Клавом Икайей — Верховным Всадником Элтуреля. Адские всадники давно почитаются в городе как герои: некогда они ушли вместе с Зариэль на войну с демонами, а вернувшись — объявили, что она погибла, но битва была выиграна. Горожане по сей день не знают правды.',
      'Сандор быстро заметил, что Клав является вампиром. Его отродья — Лилит и Моркар — тоже были здесь. Говорить об этом Лирике он не стал. Затевать бой с вампиром и двумя отродьями посреди толпы перепуганных людей было бессмысленно. Да и прямой угрозы Клав пока не представлял.',
    ],
  },
  {
    day: '8 Марпенота',
    title: 'Пара Чёрных Рогов',
    paragraphs: [
      'Отдохнув, отряд двинулся по просьбе Клава к таверне Пара Чёрных Рогов — туда, где до падения города обитала волшебница Лефит Эзим. Сидеть на месте и ждать смерти никто не хотел.',
      'У таверны стояли дьяволы. Внутри засели демоны. Костяной дьявол по имени Тилигилус предложил отряду временный союз против общего врага. Сандор согласился — но когда расклад в бою изменился, отряд переметнулся на сторону демонов. Контракта с Тилигилусом подписано не было, и никаких последствий это не повлекло.',
      'Демонами командовал минотавр по имени Коровек. Сандор убедил его, что всегда был на его стороне — тот поверил без лишних вопросов. В награду демоны позволили отряду забрать из таверны священный меч, найденный среди трупов и демонического ихора. Сандор назвал его Испепелитель. Демоны к мечу не приближались — и стало ясно почему: против демонов, дьяволов и нежити клинок бил священным пламенем.',
      'Череп самого Тилигилуса Сандор тоже забрал — и приспособил его как застёжку плаща. Рога держат края ткани, сам череп висит на груди.',
      'Волшебница Лефит Эзим обнаружилась живой — пряталась в магически созданном подпространстве. Демоны её не нашли. Сандор провёл её мимо них и вернулся в лагерь.',
    ],
  },
  {
    day: '9 Марпенота',
    title: 'Доки Драконьего Глаза',
    paragraphs: [
      'Клав сообщил, что в месте под названием Доки Драконьего Глаза давно нет вестей от семьи Ратханда — мужа, жены и двух дочерей. Туда же прежде отправился отряд на поиски схрона с артефактами, полезными в борьбе с дьяволами. Отряд пошёл проверить.',
      'В доме обнаружили, что вся семья обращена в вампирских отродий. Там же находился сам вампир — по имени Спурнайт. С отродьями разобрались быстро, Испепелитель оказался незаменим. Спурнайт исчез прямо в разгар боя.',
      'Лирика, знакомая с повадками нежити, рассудила, что убежище вампира должно быть где-то рядом. Так и вышло — в подвале нашёлся скрытый проход в тайную комнату с гробом. Вампир лежал внутри и восстанавливал силы. Сандор открыл крышку и вбил кол в сердце. Спурнайт получил окончательную смерть.',
      'Артефакты нашлись там же. Единственная выжившая из пропавшего отряда — женщина по имени Нири Вистлвуд — была обнаружена живой и доставлена в лагерь.',
      'Часть артефактов передали Клаву, часть отряд оставил себе.',
      'Затем Сандор схватил Клава за грудки и приставил Испепелитель к его горлу. Он прямо обвинил вампира в том, что тот намеренно отправил их в дом Ратханда — зная, что там есть другой вампир — чтобы избавиться от отряда, и в первую очередь от Лирики. Вампир, по мнению Сандора, не мог этого не знать.',
      'Однако устраивать побоище у всех на виду Сандор не захотел и опустил меч.',
      'Клав потребовал, чтобы отряд убрался из лагеря. Сандор отказался уходить до тех пор, пока отряд не отдохнёт — понимая, что вампир не станет обострять на глазах у своей кормовой базы. Клав отступил.',
      'В эту ночь отряд спал по очереди, выставив дежурство.',
    ],
  },
  {
    day: '10 Марпенота',
    title: 'Щит Хельма',
    paragraphs: [
      'Утром, когда отряд проснулся, волшебница Лефит Эзим попросила проводить её в Щит Хельма — укреплённый замок на западе Элтуреля. Она надеялась найти там Верховного герцога Ульдера Рейвенгарда, веря, что столь прославленный человек знает, как вернуть город обратно.',
      'Ульдер Рейвенгард — глава Пламенного Кулака и Верховный герцог Врат Балдура. Солдат, дослужившийся до вершины власти без особой любви к политике. Его интересуют стабильность и процветание города, а не популярность.',
      'По пути к Щиту Хельма отряд вышел на Мост Торма. Мост перекрывал отряд дьяволов, отлавливавших всех, кто пытался перебраться на другую сторону города. Сандор вышел вперёд и молча посмотрел в глаза их главному. Тот осмотрел трофеи — череп бородатого дьявола на поясе, череп Тилигилуса на груди — и решил не связываться. Отряд прошёл без единого удара.',
      'У стен Щита Хельма шёл бой. Несколько дьяволов подняли полчища нежити и пытались пробиться внутрь. Лирика и Ариана разобрались с нежитью быстро — их божественные силы оказались именно тем, что нужно. Затем отряд вошёл внутрь и добил тех дьяволов, что уже прорвались за стены, спасая защитников и мирных жителей.',
      'В подземелье замка группа обнаружила крупного костяного дьявола и троих бородатых дьяволов. От них отбивались паладин Хельма — дварф по имени Онтарр Фрум — и двое рыцарей. С приходом героев дьяволов одолели.',
      'Онтарр Фрум поблагодарил отряд, однако тут же заметил, что Испепелитель некогда принадлежал его другу — прославленному рыцарю и паладину Хельма. Он попросил вернуть реликвию в руки служителей бога.',
      'Сандор ответил, что если кто-то хочет забрать у него этот меч — пусть попробует.',
      'Благодарность Онтарра заметно поубавилась. Драки он всё же не затеял — отряд только что спас всех в крепости. Но тепла в отношениях не осталось.',
    ],
  },
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
      <section id="chronicle" className="relative z-10 py-24 container mx-auto px-4 max-w-4xl">
        <SectionTitle eyebrow="Летопись похода" title="Хроника" />
        <div className="mt-14 relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold/10 via-gold/40 to-transparent" />
          {CHRONICLE.map((e) => (
            <div key={e.day} className="relative pl-16 mb-14">
              <div className="absolute left-6 -translate-x-1/2 top-1.5 w-4 h-4 rounded-full bg-primary border-2 border-gold animate-glow-pulse z-10" />
              <span className="font-display text-sm tracking-widest text-primary uppercase">{e.day}</span>
              <h3 className="font-serif text-2xl md:text-3xl gold-gradient mt-1 mb-4">{e.title}</h3>
              <div className="space-y-3">
                {e.paragraphs.map((p, pi) => (
                  <p key={pi} className="font-body text-base text-foreground/80 leading-relaxed">{p}</p>
                ))}
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