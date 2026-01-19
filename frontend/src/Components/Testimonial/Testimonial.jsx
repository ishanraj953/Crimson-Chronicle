import TestinomialCard from "./TestinomialCard";

export default function Testimonial() {
    return (
        <section className="mt-6 flex flex-col justify-center">
        <h2 className="text-4xl font-extrabold text-center text-gray-800">Testimonials</h2>
        <div className="grid grid-cols-3 items-center mt-10 ml-10 gap-4">
            <TestinomialCard />
            <TestinomialCard />
            <TestinomialCard />
            <TestinomialCard />
            <TestinomialCard />
            <TestinomialCard />
        </div>
        </section>
    )
}