import React, { useState } from "react";

export default function SiteRemontAleksseev() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    object: "Квартира",
    area: "",
    message: "",
  });

  const services = [
    {
      title: "Косметический ремонт",
      desc: "Окраска, обои, замена плинтусов и розеток, лёгкое выравнивание стен.",
      price: "от 2 500 ₽/м²",
    },
    {
      title: "Капитальный ремонт",
      desc: "Полный комплекс работ: стяжка, электрика, сантехника, перегородки, чистовая отделка.",
      price: "от 7 500 ₽/м²",
    },
    {
      title: "Ремонт офиса",
      desc: "Под ключ: планировка, кабель-менеджмент, установка потолков, напольных покрытий, серверной.",
      price: "индивидуально",
    },
    {
      title: "Санузлы и кухни",
      desc: "Гидроизоляция, плитка, разводка коммуникаций, установка сантехники и мебели.",
      price: "от 60 000 ₽",
    },
    {
      title: "Электромонтаж",
      desc: "Проект, штробление, установка щитов, автоматов и УЗО, слаботочные сети.",
      price: "от 900 ₽/точка",
    },
    {
      title: "Потолки и стены",
      desc: "ГКЛ, перегородки, шумка, малярные работы ‘под покраску’.",
      price: "по смете",
    },
  ];

  const advantages = [
    { title: "Договор и смета", desc: "Фиксируем сроки и стоимость. Прозрачные акты и фото-отчёты." },
    { title: "Гарантия 24 месяца", desc: "На работы — письменная гарантия, оперативно решаем вопросы." },
    { title: "Собственные мастера", desc: "Без посредников. Прорабы с опытом 10+ лет." },
    { title: "Чистота и порядок", desc: "Защитные укрытия, вывоз мусора, ежедневная уборка." },
  ];

  const portfolio = [
    {
      title: "Квартира-студия 36 м²",
      note: "Косметический ремонт, 3 недели",
      img:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Офис open space 180 м²",
      note: "Капремонт, инженерка и СКС",
      img:
        "https://images.unsplash.com/photo-1507209696998-3c532be9b2b6?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Санузел в керамограните",
      note: "Гидроизоляция, тёплый пол",
      img:
        "https://images.unsplash.com/photo-1616596876495-9e5cea2f7c9a?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  const faqs = [
    {
      q: "Сколько стоит выезд и замер?",
      a: "Выезд прораба и базовая консультация — бесплатно. Итоговая смета формируется после замера и уточнения материалов.",
    },
    {
      q: "Работаете по договору?",
      a: "Да. Индивидуальный предприниматель Алексеев Роман Николаевич. Работаем официально: договор, смета, график платежей, КС-2/КС-3 по запросу.",
    },
    {
      q: "Можно сделать ремонт под ключ?",
      a: "Берём на себя все этапы: закупка материалов, логистика, черновые и чистовые работы, клининг и сдача объекта.",
    },
    {
      q: "Какие сроки?",
      a: "Косметический ремонт — от 2–4 недель, капитальный — от 6–12 недель в зависимости от площади и сложности.",
    },
  ];

  function submitForm(e: React.FormEvent) {
    e.preventDefault();
    alert(
      `Спасибо! Мы свяжемся с вами по телефону ${formData.phone}. Также можете позвонить нам: +7 (950) 015-63-42.`
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Шапка */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-neutral-900 text-white flex items-center justify-center font-bold">AR</div>
            <div>
              <p className="text-sm text-neutral-500 leading-none">ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ</p>
              <h1 className="text-lg font-semibold leading-none">АЛЕКСЕЕВ РОМАН НИКОЛАЕВИЧ</h1>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-neutral-600">Услуги</a>
            <a href="#advantages" className="hover:text-neutral-600">Преимущества</a>
            <a href="#prices" className="hover:text-neutral-600">Цены</a>
            <a href="#portfolio" className="hover:text-neutral-600">Портфолио</a>
            <a href="#contacts" className="hover:text-neutral-600">Контакты</a>
            <a href="#lead" className="px-4 py-2 rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800">Заказать смету</a>
          </nav>
        </div>
      </header>

      {/* Хиро */}
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.08),transparent_60%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Ремонт под ключ: квартиры, офисы, коммерческие помещения
            </h2>
            <p className="mt-4 text-neutral-600 text-lg">
              Замер и консультация — бесплатно. Заключаем договор, фиксируем смету и сроки. Гарантия на работы — 24 месяца.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#lead" className="px-5 py-3 rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800">Получить смету</a>
              <a href="#portfolio" className="px-5 py-3 rounded-2xl border border-neutral-300 hover:bg-white">Смотреть работы</a>
            </div>
            <div className="mt-6 text-sm text-neutral-500">
              ИП Алексеев Р.Н. ИНН 693901358168, ОГРНИП 322695200014582. Работаем по УСН.
            </div>
          </div>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
            <img
              alt="renovation"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section id="advantages" className="max-w-6xl mx-auto px-4 py-14">
        <h3 className="text-2xl font-semibold mb-6">Почему мы</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {advantages.map((a) => (
            <div key={a.title} className="rounded-2xl bg-white p-5 shadow-sm border border-neutral-200">
              <h4 className="font-semibold">{a.title}</h4>
              <p className="text-sm text-neutral-600 mt-1">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="bg-white border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h3 className="text-2xl font-semibold mb-6">Основные услуги</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {services.map((s) => (
              <article key={s.title} className="rounded-2xl p-5 border border-neutral-200 shadow-sm">
                <h4 className="font-semibold text-lg">{s.title}</h4>
                <p className="text-sm text-neutral-600 mt-1">{s.desc}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium px-3 py-1 rounded-full bg-neutral-100">
                  {s.price}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Блок цен */}
      <section id="prices" className="max-w-6xl mx-auto px-4 py-14">
        <h3 className="text-2xl font-semibold mb-6">Примерные цены</h3>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="rounded-2xl p-6 bg-white border border-neutral-200 shadow-sm">
            <h4 className="font-semibold text-lg">Косметический</h4>
            <p className="text-sm text-neutral-600 mt-1">Быстро освежить помещение</p>
            <ul className="mt-4 text-sm list-disc pl-4 space-y-1 text-neutral-700">
              <li>Покраска/обои</li>
              <li>Лёгкая подготовка стен</li>
              <li>Замена розеток/плинтусов</li>
            </ul>
            <div className="mt-5 text-2xl font-bold">от 2 500 ₽/м²</div>
            <a href="#lead" className="mt-5 inline-block px-4 py-2 rounded-2xl bg-neutral-900 text-white">Рассчитать</a>
          </div>

          <div className="rounded-2xl p-6 bg-neutral-900 text-white shadow-sm">
            <h4 className="font-semibold text-lg">Капитальный</h4>
            <p className="text-sm text-neutral-300 mt-1">Комплексные работы</p>
            <ul className="mt-4 text-sm list-disc pl-4 space-y-1 text-neutral-200">
              <li>Стяжка, выравнивание</li>
              <li>Электрика и сантехника</li>
              <li>Перепланировка, перегородки</li>
            </ul>
            <div className="mt-5 text-2xl font-bold">от 7 500 ₽/м²</div>
            <a href="#lead" className="mt-5 inline-block px-4 py-2 rounded-2xl bg-white text-neutral-900">Рассчитать</a>
          </div>

          <div className="rounded-2xl p-6 bg-white border border-neutral-200 shadow-sm">
            <h4 className="font-semibold text-lg">Офис под ключ</h4>
            <p className="text-sm text-neutral-600 mt-1">Для бизнеса и коворкингов</p>
            <ul className="mt-4 text-sm list-disc pl-4 space-y-1 text-neutral-700">
              <li>СКС и электрика</li>
              <li>Серверная, потолки, полы</li>
            </ul>
            <div className="mt-5 text-2xl font-bold">индивидуально</div>
            <a href="#lead" className="mt-5 inline-block px-4 py-2 rounded-2xl bg-neutral-900 text-white">Запросить смету</a>
          </div>
        </div>
      </section>

      {/* Портфолио */}
      <section id="portfolio" className="bg-white border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h3 className="text-2xl font-semibold mb-6">Недавние проекты</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {portfolio.map((p) => (
              <figure key={p.title} className="rounded-3xl overflow-hidden border border-neutral-200 shadow-sm">
                <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
                <figcaption className="p-4">
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-sm text-neutral-600">{p.note}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h3 className="text-2xl font-semibold mb-6">Отзывы клиентов</h3>
        <div className="grid md:grid-cols-3 gap-5">
          {[1, 2, 3].map((i) => (
            <blockquote key={i} className="rounded-2xl bg-white p-5 border border-neutral-200 shadow-sm text-sm text-neutral-700">
              «Сделали всё аккуратно и в срок. Смета не изменилась, прораб всегда был на связи. Рекомендуем!»
              <div className="mt-3 text-neutral-500">— Анна, ЖК Северный</div>
            </blockquote>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h3 className="text-2xl font-semibold mb-6">Частые вопросы</h3>
          <div className="divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
            {faqs.map((item, idx) => (
              <div key={idx} className="p-5">
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="font-medium">{item.q}</span>
                  <span className="text-xl">{faqOpen === idx ? "–" : "+"}</span>
                </button>
                {faqOpen === idx && (
                  <p className="mt-3 text-sm text-neutral-600">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Лид-форма */}
      <section id="lead" className="max-w-6xl mx-auto px-4 py-14">
        <div className="rounded-3xl bg-neutral-900 text-white p-8 md:p-10 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold">Получите бесплатный расчёт</h3>
            <p className="text-neutral-300 mt-2">
              Заполните форму — перезвоним в течение рабочего дня, уточним детали и подготовим смету.
            </p>
            <ul className="mt-5 text-sm text-neutral-200 list-disc pl-4 space-y-1">
              <li>Выезжаем на объект для замера</li>
              <li>Помогаем с выбором материалов</li>
              <li>Фиксируем сроки в договоре</li>
            </ul>
          </div>
          <form onSubmit={submitForm} className="space-y-3">
            <input
              required
              placeholder="Ваше имя"
              className="w-full px-4 py-3 rounded-2xl bg-white text-neutral-900 placeholder-neutral-400"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              required
              placeholder="Телефон"
              className="w-full px-4 py-3 rounded-2xl bg-white text-neutral-900 placeholder-neutral-400"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <div className="grid grid-cols-2 gap-3">
              <select
                className="w-full px-4 py-3 rounded-2xl bg-white text-neutral-900"
                value={formData.object}
                onChange={(e) => setFormData({ ...formData, object: e.target.value })}
              >
                <option>Квартира</option>
                <option>Офис</option>
                <option>Дом/Таунхаус</option>
                <option>Коммерческое помещение</option>
              </select>
              <input
                placeholder="Площадь, м²"
                className="w-full px-4 py-3 rounded-2xl bg-white text-neutral-900 placeholder-neutral-400"
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              />
            </div>
            <textarea
              rows={4}
              placeholder="Опишите задачу (состояние, материалы, сроки)"
              className="w-full px-4 py-3 rounded-2xl bg-white text-neutral-900 placeholder-neutral-400"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <button type="submit" className="w-full px-5 py-3 rounded-2xl bg-white text-neutral-900 font-medium">
              Отправить заявку
            </button>
            <div className="text-xs text-neutral-300">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
            </div>
          </form>
        </div>
      </section>

      {/* Контакты */}
      <footer id="contacts" className="border-t border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-6 text-sm">
          <div className="md:col-span-2">
            <div className="font-semibold">ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ</div>
            <p className="mt-1">АЛЕКСЕЕВ РОМАН НИКОЛАЕВИЧ</p>
            <p className="text-neutral-600 mt-1">Ремонт квартир и офисов под ключ</p>
            <p className="text-neutral-500 mt-3">ИНН 693901358168, ОГРНИП 322695200014582</p>
            <p className="text-neutral-500 mt-1">Р/с 40802810206000078470, ПАО "Банк ПСБ"</p>
            <p className="text-neutral-500 mt-1">БИК 044030920, К/с 30101810000000000920</p>
            <p className="text-neutral-500 mt-1">Юридический адрес банка: 195220, Россия, г. Санкт-Петербург, пр-т Гражданский 114, к. 1А</p>
          </div>
          <div>
            <div className="font-semibold">Контакты</div>
            <ul className="mt-2 space-y-1 text-neutral-700">
              <li>Тел.: <a href="tel:+79500156342" className="hover:underline">+7 (950) 015‑63‑42</a></li>
              <li>WhatsApp: <a href="https://wa.me/79500156342" className="hover:underline">написать</a></li>
              <li>Email: <a href="mailto:info@remont-ar.ru" className="hover:underline">info@remont-ar.ru</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Навигация</div>
            <ul className="mt-2 space-y-1 text-neutral-700">
              <li><a href="#services" className="hover:underline">Услуги</a></li>
              <li><a href="#prices" className="hover:underline">Цены</a></li>
              <li><a href="#portfolio" className="hover:underline">Портфолио</a></li>
              <li><a href="#lead" className="hover:underline">Смета</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-neutral-500 pb-6">© {new Date().getFullYear()} ИП Алексеев Р.Н. Все права защищены.</div>
      </footer>

      {/* JSON-LD для SEO */}
      <script
        // @ts-ignore
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: "ИП Алексеев Роман Николаевич",
            description:
              "Услуги ремонта квартир и офисов под ключ. Бесплатный замер, договор, гарантия 24 месяца.",
            areaServed: "RU",
            telephone: "+7-950-015-63-42",
            email: "info@remont-ar.ru",
            url: "https://example.com/",
            sameAs: [
              "https://wa.me/79500156342"
            ],
            priceRange: "₽₽",
            openingHours: "Mo-Sa 09:00-19:00",
          }),
        }}
      />
    </div>
  );
}