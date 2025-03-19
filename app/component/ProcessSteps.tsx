import Image from 'next/image';

export default function ProcessSteps() {
    return (
        <div className="relative bg-gradient-to-b from-blue-900 to-blue-700 text-white py-20 px-10 flex flex-col items-center">
            <h3 className="text-lg tracking-widest">HOW WE WORK</h3>
            <h2 className="text-4xl font-bold text-center mt-2">Our Process For Delivering Results</h2>
            <p className="text-center max-w-2xl mt-4 text-gray-300">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry’s standard dummy text ever.
            </p>

            {/* SVG for wave-style dashed line */}
            <div className="relative w-full max-w-5xl mt-12">
                <svg className="absolute top-1/2 left-0 w-full h-16 transform -translate-y-1/2" viewBox="0 0 600 100" preserveAspectRatio="none">
                    <path d="M0,50 C150,90 450,10 600,50" stroke="white" strokeWidth="3" strokeDasharray="10,10" fill="none" />
                </svg>

                <div className="relative flex justify-between items-center w-full">
                    {/* Steps */}
                    {['Make An Appointment', 'Meet Our Team', 'Get Consultation', 'Start Project'].map((text, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center group">
                            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-b from-orange-500 to-red-500 shadow-lg text-white font-bold text-lg transition-transform transform group-hover:scale-110 cursor-pointer">
                                {`0${index + 1}.`}
                            </div>
                            <span className="mt-2 text-center text-white">{text}</span>
                        </div>
                    ))}
                </div>
            </div>

            <button className="mt-10 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-semibold">
                Contact Now
            </button>
        </div>
    );
}
