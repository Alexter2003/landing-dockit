'use client';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        interest: 'general'
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                subject: '',
                message: '',
                interest: 'general'
            });
        }, 2000);
    };

    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
            ),
            title: "Email",
            content: "hola@dockit.com",
            link: "mailto:hola@dockit.com"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
            ),
            title: "WhatsApp",
            content: "+52 55 1234 5678",
            link: "https://wa.me/5255123456"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
            ),
            title: "Oficina",
            content: "Ciudad de México, México",
            link: "#"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            ),
            title: "Horario",
            content: "Lun - Vie: 9:00 - 18:00",
            link: "#"
        }
    ];

    const faqs = [
        {
            question: "¿Los productos Dockit son compatibles entre sí?",
            answer: "Sí, todos nuestros productos están diseñados con filosofía modular. Pueden funcionar perfectamente de forma individual o combinarse para crear tu ecosistema de escritorio ideal."
        },
        {
            question: "¿Hacen envíos a toda Latinoamérica?",
            answer: "Actualmente realizamos envíos a México, Colombia, Chile, Argentina y Perú. Estamos expandiendo nuestra cobertura gradualmente a otros países de la región."
        },
        {
            question: "¿Qué garantía tienen los productos?",
            answer: "Todos nuestros productos incluyen 2 años de garantía contra defectos de fabricación. También ofrecemos 30 días de garantía de satisfacción total."
        },
        {
            question: "¿Puedo personalizar mi ecosistema Dockit?",
            answer: "¡Por supuesto! Nuestro enfoque modular te permite empezar con cualquier producto y agregar otros gradualmente según tus necesidades y presupuesto."
        }
    ];

    return (
        <section id="contacto" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                        Conversemos sobre tu
                        <span className="text-blue-600"> Espacio Ideal</span>
                    </h2>
                    <p className="text-xl text-black max-w-3xl mx-auto">
                        ¿Tienes preguntas sobre nuestros productos? ¿Necesitas ayuda para elegir tu ecosistema Dockit?
                        Estamos aquí para ayudarte a crear el escritorio perfecto.
                    </p>image.png
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-gray-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h3>

                        {submitStatus === 'success' && (
                            <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-green-800 font-medium">¡Mensaje enviado exitosamente! Te contactaremos pronto.</span>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                                        Nombre completo *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-black mb-2">
                                        Empresa
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        placeholder="Tu empresa"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                                        Teléfono
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        placeholder="+52 55 1234 5678"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="interest" className="block text-sm font-medium text-black mb-2">
                                    ¿En qué estás interesado?
                                </label>
                                <select
                                    id="interest"
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                >
                                    <option value="general">Información general</option>
                                    <option value="basehub">Dockit BaseHub</option>
                                    <option value="voltbar">Dockit VoltBar</option>
                                    <option value="pocketdock">Dockit PocketDock</option>
                                    <option value="flexarm">Dockit FlexArm</option>
                                    <option value="glowbar">Dockit GlowBar</option>
                                    <option value="ecosystem">Ecosistema completo</option>
                                    <option value="wholesale">Ventas mayoreo</option>
                                    <option value="support">Soporte técnico</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                                    Asunto
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    placeholder="¿En qué te podemos ayudar?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                                    Mensaje *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                                    placeholder="Cuéntanos más sobre tu proyecto o necesidades..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${isSubmitting
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
                                    } text-white`}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Enviando...
                                    </span>
                                ) : (
                                    'Enviar mensaje'
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-black mb-6">Información de contacto</h3>

                        <div className="space-y-6 mb-8">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <div className="text-blue-600">
                                            {info.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-black mb-1">{info.title}</h4>
                                        {info.link && info.link !== '#' ? (
                                            <a
                                                href={info.link}
                                                className="text-black hover:text-blue-600 transition-colors"
                                                target={info.link.startsWith('http') ? '_blank' : '_self'}
                                                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                                            >
                                                {info.content}
                                            </a>
                                        ) : (
                                            <span className="text-black">{info.content}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* FAQ Section */}
                        <div className="bg-blue-50 rounded-2xl p-6">
                            <h4 className="text-xl font-bold text-black mb-4">Preguntas frecuentes</h4>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <details key={index} className="group">
                                        <summary className="flex justify-between items-center cursor-pointer list-none font-medium text-black hover:text-blue-600 transition-colors">
                                            {faq.question}
                                            <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </summary>
                                        <div className="mt-3 text-black text-sm leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Proof */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold text-black mb-8">También nos encuentras en</h3>
                    <div className="flex justify-center space-x-6">
                        <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                            <span className="sr-only">Instagram</span>
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.321-1.291C3.75 14.479 3.01 12.44 3.01 10.262c0-2.178.74-4.217 2.118-5.435.873-.8 2.024-1.29 3.321-1.29 1.297 0 2.448.49 3.321 1.29 1.378 1.218 2.118 3.257 2.118 5.435 0 2.178-.74 4.217-2.118 5.435-.873.801-2.024 1.291-3.321 1.291z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                            <span className="sr-only">YouTube</span>
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
} 