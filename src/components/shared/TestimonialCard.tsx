// --- Reusable Testimonial Card (Tailwind) ---
export function TestimonialCard({
  img = "https://dummyimage.com/305x305",
  title = "nombre de la persona",
  descripton = "testimonio",
  subtitle = "que es de la empresa",
}) {
  return (
    <>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img
            alt="testimonial"
            className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-teal-600 bg-gray-100"
            src={img}
          />
          <p className="leading-relaxed">&ldquo;{descripton}&ldquo;</p>
          <span
            className="inline-block h-1 w-10 rounded mt-6 mb-4"
            style={{ background: "#BA9F33" }}
          ></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
            {title}
          </h2>
          <p className="text-gray-500">{subtitle}</p>
        </div>
      </div>
    </>
  );
}
