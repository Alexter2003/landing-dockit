export default function Services() {
    const services = [
        {
            title: "Diseño Modular",
            description: "Desarrollamos productos que funcionan perfectamente solos, pero se complementan entre sí para crear ecosistemas únicos.",
            features: [
                "Compatibilidad total entre productos",
                "Diseño estético cohesivo",
                "Flexibilidad de configuración",
                "Crecimiento progresivo del setup"
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
            ),
            color: "blue"
        },
        {
            title: "Consultoría de Espacios",
            description: "Te ayudamos a diseñar tu escritorio ideal según tus necesidades específicas y estilo de trabajo.",
            features: [
                "Análisis de necesidades personales",
                "Recomendaciones de productos",
                "Configuración optimizada",
                "Seguimiento post-instalación"
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
            ),
            color: "green"
        },
        {
            title: "Calidad Premium",
            description: "Utilizamos materiales de alta calidad y procesos de manufactura rigurosos para garantizar durabilidad.",
            features: [
                "Materiales resistentes y duraderos",
                "Control de calidad estricto",
                "Garantía extendida",
                "Certificaciones internacionales"
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
            ),
            color: "purple"
        },
        {
            title: "Soporte Técnico",
            description: "Ofrecemos asistencia completa desde la compra hasta el uso diario de todos nuestros productos.",
            features: [
                "Guías de instalación detalladas",
                "Soporte técnico especializado",
                "Resolución de problemas",
                "Actualizaciones de firmware"
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
            ),
            color: "red"
        },
        {
            title: "Envíos LATAM",
            description: "Cubrimos toda Latinoamérica con envíos seguros y tracking completo para tus productos Dockit.",
            features: [
                "Cobertura en toda LATAM",
                "Empaque seguro especializado",
                "Tracking en tiempo real",
                "Seguro de transporte incluido"
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                </svg>
            ),
            color: "indigo"
        },
        {
            title: "Personalización",
            description: "Adaptamos soluciones para empresas y usuarios con necesidades específicas de organización.",
            features: [
                "Configuraciones personalizadas",
                "Branding corporativo",
                "Volúmenes empresariales",
                "Soluciones a medida"
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
                </svg>
            ),
            color: "amber"
        }
    ];

    const getColorClasses = (color: string) => {
        const colorMap = {
            blue: {
                bg: "from-blue-50 to-blue-100",
                border: "border-blue-200",
                icon: "bg-blue-600",
                hover: "hover:from-blue-100 hover:to-blue-200"
            },
            green: {
                bg: "from-green-50 to-green-100",
                border: "border-green-200",
                icon: "bg-green-600",
                hover: "hover:from-green-100 hover:to-green-200"
            },
            purple: {
                bg: "from-purple-50 to-purple-100",
                border: "border-purple-200",
                icon: "bg-purple-600",
                hover: "hover:from-purple-100 hover:to-purple-200"
            },
            red: {
                bg: "from-red-50 to-red-100",
                border: "border-red-200",
                icon: "bg-red-600",
                hover: "hover:from-red-100 hover:to-red-200"
            },
            indigo: {
                bg: "from-indigo-50 to-indigo-100",
                border: "border-indigo-200",
                icon: "bg-indigo-600",
                hover: "hover:from-indigo-100 hover:to-indigo-200"
            },
            amber: {
                bg: "from-amber-50 to-amber-100",
                border: "border-amber-200",
                icon: "bg-amber-600",
                hover: "hover:from-amber-100 hover:to-amber-200"
            }
        };
        return colorMap[color as keyof typeof colorMap] || colorMap.blue;
    };

    return (
        <section id="servicios" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        ¿Qué ofrecemos en
                        <span className="text-blue-600"> Dockit?</span>
                    </h2>
                    <p className="text-xl text-white max-w-3xl mx-auto">
                        Más que productos, ofrecemos una experiencia completa de transformación de espacios de trabajo.
                        Desde el diseño hasta el soporte post-venta.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => {
                        const colors = getColorClasses(service.color);
                        return (
                            <div
                                key={index}
                                className={`bg-gradient-to-br ${colors.bg} ${colors.hover} p-8 rounded-2xl border ${colors.border} transition-all duration-300 hover:shadow-lg group`}
                            >
                                <div className={`w-16 h-16 ${colors.icon} rounded-xl flex items-center justify-center mb-6`}>
                                    <div className="text-white">
                                        {service.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-green-900 mb-4">
                                    {service.title}
                                </h3>

                                <p className="text-black mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                <ul className="space-y-2">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-black">
                                            <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                {/* Process Section */}
                <div className="bg-white rounded-2xl p-12 shadow-lg">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-green-900 mb-4">
                            Cómo Trabajamos Contigo
                        </h3>
                        <p className="text-black text-lg">
                            Nuestro proceso centrado en el usuario para crear tu espacio de trabajo ideal
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-xl">1</span>
                            </div>
                            <h4 className="font-semibold text-green-900 mb-2">Consulta</h4>
                            <p className="text-black text-sm">Analizamos tus necesidades y estilo de trabajo</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-xl">2</span>
                            </div>
                            <h4 className="font-semibold text-green-900 mb-2">Diseño</h4>
                            <p className="text-black text-sm">Recomendamos la combinación perfecta de productos</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-xl">3</span>
                            </div>
                            <h4 className="font-semibold text-green-900 mb-2">Entrega</h4>
                            <p className="text-black text-sm">Enviamos tus productos con instalación incluida</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-xl">4</span>
                            </div>
                            <h4 className="font-semibold text-green-900 mb-2">Evolución</h4>
                            <p className="text-black text-sm">Tu espacio crece contigo, agregando productos modulares</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
                        <h3 className="text-3xl font-bold mb-4">¿Listo para transformar tu espacio?</h3>
                        <p className="text-blue-100 mb-8 text-lg">
                            Empieza con cualquier producto Dockit y construye tu ecosistema ideal paso a paso.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#productos"
                                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
                            >
                                Ver Productos
                            </a>
                            <a
                                href="#contacto"
                                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                            >
                                Consulta Gratuita
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 