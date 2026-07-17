const TESTIMONIALS = [
  {
    id: 1,
    name: "María Fernández",
    role: "Fundadora",
    company: "Restaurante Origen",
    content: "Ely entendió perfectamente la visión de nuestro restaurante. Logró traducir conceptos abstractos en una identidad visual que nuestros clientes adoran.",
  },
  {
    id: 2,
    name: "Carlos Rebolledo",
    role: "Director General",
    company: "Hotel Boutique Alba",
    content: "Su enfoque estratégico nos permitió posicionar nuestro hotel en un mercado altamente competitivo. El nivel de detalle y profesionalismo es incomparable.",
  },
  {
    id: 3,
    name: "Ana Sofía Garza",
    role: "Directora de Mkt",
    company: "Grupo Nube",
    content: "La creatividad de Ely es de otro nivel. No solo rediseñó nuestra identidad, sino que creó un ecosistema digital que duplicó nuestros leads.",
  },
];

export default function Testimonios() {
  return (
    <section className="py-24 lg:py-32 bg-rose-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="font-nunito font-extrabold text-4xl md:text-5xl text-stone-800 tracking-tight mb-16 text-center leading-tight">
          No lo digo solo yo,<br />
          <span className="text-rose-600">también mis clientes.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div key={test.id} className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-stone-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
              <p className="font-medium text-lg text-stone-600 leading-relaxed mb-8 italic">
                "{test.content}"
              </p>
              <div className="pt-6 border-t border-stone-100">
                <p className="font-nunito font-bold text-xl text-stone-800 mb-1">{test.name}</p>
                <p className="font-medium text-sm text-rose-600 uppercase tracking-widest">{test.role}</p>
                <p className="font-medium text-sm text-stone-500">{test.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
