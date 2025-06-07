export default function About() {
    const values = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
            ),
            title: "Modularidad y Compatibilidad",
            description: "Nuestros productos están hechos para convivir entre sí. Buscamos que cada usuario pueda construir su propio espacio de forma progresiva, sin depender de kits cerrados."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
            ),
            title: "Diseño Centrado en el Usuario",
            description: "Desde la ergonomía hasta el tamaño del estuche, todo está pensado para la vida real de estudiantes, profesionales, creadores de contenido y usuarios digitales modernos."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
            ),
            title: "Innovación Práctica",
            description: "Integramos tecnología o ideas nuevas solo cuando aportan valor. No vendemos \"gadgets\", sino soluciones inteligentes y accesibles."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
            ),
            title: "Estética Funcional",
            description: "Creemos que el orden también entra por los ojos. Nuestros productos no solo funcionan bien, también transforman el entorno de trabajo en un espacio más limpio, profesional y personal."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
            ),
            title: "Sostenibilidad y Durabilidad",
            description: "Promovemos el uso de materiales resistentes y versátiles. No diseñamos para lo descartable, sino para que cada producto tenga vida útil prolongada y siga siendo útil incluso al combinarse con futuras versiones."
        }
    ];

    return (
        <section id="nosotros" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                        ¿Qué es
                        <span className="text-blue-600"> Dockit?</span>
                    </h2>
                    <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
                        Dockit es una empresa enfocada en el diseño y desarrollo de accesorios de escritorio para organización tecnológica.
                        Nuestra propuesta se basa en crear productos modulares que puedan usarse individualmente, pero que también se
                        complementen entre sí visual y funcionalmente, ofreciendo orden, practicidad y una estética limpia para cualquier espacio de trabajo.
                    </p>
                </div>

                {/* Brand Name Explanation */}
                <div className="mb-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Qué significa el nombre Dockit?</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                <span className="text-white font-bold text-xl">Dock</span>
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">&ldquo;Dock&rdquo;</h4>
                            <p className="text-black">Hace referencia a un punto de conexión, soporte o base donde los dispositivos se ordenan o cargan.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                <span className="text-white font-bold text-xl">It</span>
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">&ldquo;It&rdquo;</h4>
                            <p className="text-black">Refuerza la idea de acción y tecnología (&ldquo;Dock-it&rdquo;, como una invitación a organizar).</p>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <div className="inline-block bg-white rounded-xl px-6 py-3 shadow-sm border border-gray-200">
                            <p className="text-black font-medium">
                                El nombre refleja nuestro enfoque modular, tecnológico y práctico: cada producto funciona por sí solo,
                                pero también puede &ldquo;encajar&rdquo; con los demás. Es una marca, pero también una forma de transformar tu espacio.
                            </p>
                        </div>
                    </div>
                    <div className="text-center mt-6">
                        <span className="text-2xl font-bold text-blue-600">&ldquo;Just Dockit.&rdquo;</span>
                    </div>
                </div>

                {/* Mission, Vision, Purpose Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Mission */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                        <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-black mb-4">Nuestra Misión</h3>
                        <p className="text-black leading-relaxed">
                            Diseñar, desarrollar y ofrecer productos tecnológicos de organización que, de forma individual o conjunta,
                            aporten orden, funcionalidad y estilo a los escritorios de nuestros usuarios. En Dockit, creemos que cada
                            accesorio debe resolver un problema real y combinarse con otros sin perder su valor propio.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
                        <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-black mb-4">Nuestra Visión</h3>
                        <p className="text-black leading-relaxed">
                            Ser la marca líder en organización tecnológica de escritorio en Latinoamérica, ofreciendo productos modulares,
                            funcionales y visualmente armónicos que transformen cualquier espacio en una estación de trabajo eficiente,
                            estética y conectada.
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div>
                    <h3 className="text-3xl font-bold text-center text-black mb-12">Nuestros Valores</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
                                <div className="text-blue-600 mb-4 group-hover:text-blue-700 transition-colors">
                                    {value.icon}
                                </div>
                                <h4 className="text-xl font-semibold text-black mb-3">{value.title}</h4>
                                <p className="text-black leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Strategies Section */}
                <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold mb-4">Nuestras Estrategias</h3>
                        <p className="text-blue-100 text-lg">Acciones enfocadas hacia el cumplimiento de nuestros objetivos y misión</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold mb-3">Modularidad Progresiva</h4>
                            <p className="text-blue-100">Ofrecer productos individuales pero con diseño compatible, permitiendo al usuario armar su ecosistema Dockit paso a paso.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold mb-3">Visual y Estética</h4>
                            <p className="text-blue-100">Desarrollar productos con un diseño minimalista y atractivo, utilizando materiales sostenibles y paletas neutras para destacar en el mercado.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold mb-3">Diferenciación</h4>
                            <p className="text-blue-100">Resaltar la filosofía modular, la portabilidad, y la integración entre productos como ventaja competitiva frente a soluciones genéricas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 