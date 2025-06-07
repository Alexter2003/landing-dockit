'use client';

import { useState } from 'react';

// Modal Component
interface ProductModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
    if (!isOpen || !product) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black bg-opacity-50"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                {/* Product Image */}
                <div className="bg-gray-100 rounded-xl h-64 mb-6 flex items-center justify-center">
                    <div className="text-center">
                        <div className={`w-20 h-20 mx-auto mb-3 rounded-xl flex items-center justify-center ${product.category === 'Soporte' ? 'bg-blue-600' :
                            product.category === 'Carga' ? 'bg-green-600' :
                                product.category === 'Organización' ? 'bg-purple-600' :
                                    product.category === 'Ergonomía' ? 'bg-red-600' :
                                        'bg-amber-600'
                            }`}>
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                            </svg>
                        </div>
                        <span className="text-gray-500 text-sm">{product.category}</span>
                    </div>
                </div>

                {/* Product Info */}
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-black mb-2">{product.name}</h2>
                    <p className="text-black mb-4">{product.description}</p>

                    <div className="flex items-center justify-center mb-6">
                        <span className="text-3xl font-bold text-black">{product.price}</span>
                        <span className="text-gray-500 line-through ml-3">{product.originalPrice}</span>
                    </div>
                </div>

                {/* Full Description */}
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-black mb-3">Descripción</h3>
                    <p className="text-black leading-relaxed">{product.fullDescription}</p>
                </div>

                {/* Features */}
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">Características</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {product.features.map((feature: string, index: number) => (
                            <div key={index} className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span className="text-black">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Action button */}
                <button
                    onClick={onClose}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
}

interface Product {
    id: string;
    name: string;
    price: string;
    originalPrice: string;
    description: string;
    fullDescription: string;
    features: string[];
    category: string;
    popular?: boolean;
    inStock: boolean;
}

interface CartItem {
    id: string;
    name: string;
    price: string;
    type: 'product' | 'bundle';
    quantity: number;
}

export default function Products() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cart, setCart] = useState<CartItem[]>([]);

    const products = [
        {
            id: 'basehub',
            name: 'Dockit BaseHub',
            description: 'Soporte ergonómico de aluminio para laptop con hub USB-C integrado',
            fullDescription: 'Soporte ergonómico de aluminio para laptop con hub USB-C integrado (puertos HDMI, USB-A, USB-C, lector de tarjetas). Puertos ubicados en la parte trasera para una estética limpia.',
            price: '$42',
            originalPrice: '$50',
            image: '/api/placeholder/400/300',
            category: 'Soporte',
            features: [
                'Hub USB-C integrado',
                'Puertos HDMI, USB-A, USB-C',
                'Lector de tarjetas integrado',
                'Diseño ergonómico de aluminio',
                'Puertos traseros para estética limpia',
                'Compatible con laptops de 13" a 17"',
                'Ángulo de inclinación óptimo',
                'Ventilación mejorada'
            ],
            inStock: true,
            popular: true
        },
        {
            id: 'voltbar',
            name: 'Dockit VoltBar',
            description: 'Barra de carga compacta con múltiples puertos USB-A y USB-C',
            fullDescription: 'Barra de carga compacta con múltiples puertos USB-A y USB-C, pantalla LED que muestra el voltaje de cada puerto. Ideal para cargas rápidas y seguras.',
            price: '$21',
            originalPrice: '$30',
            image: '/api/placeholder/400/300',
            category: 'Carga',
            features: [
                'Múltiples puertos USB-A y USB-C',
                'Pantalla LED con información de voltaje',
                'Carga rápida inteligente',
                'Protección contra sobrecarga',
                'Diseño compacto y modular',
                'Cable de alimentación incluido',
                'Indicadores de estado por puerto',
                'Compatibilidad universal'
            ],
            inStock: true,
            popular: false
        },
        {
            id: 'pocketdock',
            name: 'Dockit PocketDock',
            description: 'Estuche portátil rígido con compartimentos de malla y cintas elásticas',
            fullDescription: 'Estuche portátil rígido con compartimentos de malla y cintas elásticas para organizar adaptadores, cables, memorias y otros accesorios tecnológicos.',
            price: '$19',
            originalPrice: '$25',
            image: '/api/placeholder/400/300',
            category: 'Organización',
            features: [
                'Estuche rígido resistente',
                'Compartimentos de malla flexible',
                'Cintas elásticas organizadoras',
                'Cremallera YKK de calidad',
                'Tamaño compacto para viajes',
                'Interior acolchado',
                'Etiquetas identificadoras',
                'Resistente al agua'
            ],
            inStock: true,
            popular: false
        },
        {
            id: 'flexarm',
            name: 'Dockit FlexArm',
            description: 'Brazo articulado de aluminio con ajuste de altura y ángulo',
            fullDescription: 'Brazo articulado de aluminio con ajuste de altura y ángulo, compatible con monitores y laptops. Diseño elegante y funcional para maximizar el espacio de trabajo.',
            price: '$79',
            originalPrice: '$100',
            image: '/api/placeholder/400/300',
            category: 'Ergonomía',
            features: [
                'Brazo articulado de aluminio premium',
                'Ajuste de altura y ángulo',
                'Compatible con monitores hasta 32"',
                'Soporte para laptop incluido',
                'Gestión de cables integrada',
                'Base con peso ajustable',
                'Movimiento fluido 360°',
                'Instalación sin herramientas'
            ],
            inStock: true,
            popular: true
        },
        {
            id: 'glowbar',
            name: 'Dockit GlowBar',
            description: 'Barra magnética LED para iluminación ambiental del escritorio',
            fullDescription: 'Barra magnética LED para iluminación ambiental del escritorio, con canal inferior para ocultar y organizar cables. Diseño minimalista y funcional.',
            price: '$33',
            originalPrice: '$45',
            image: '/api/placeholder/400/300',
            category: 'Iluminación',
            features: [
                'Iluminación LED ajustable',
                'Base magnética para fácil instalación',
                'Canal inferior para organizar cables',
                'Control táctil de intensidad',
                'Múltiples modos de color',
                'Alimentación USB-C',
                'Diseño minimalista',
                'Compatibilidad universal'
            ],
            inStock: false,
            popular: false
        }
    ];

    const bundles = [
        {
            id: 'workspace-complete',
            name: 'Workspace Completo',
            description: 'El ecosistema completo Dockit para tu escritorio perfecto',
            products: ['basehub', 'voltbar', 'flexarm', 'glowbar'],
            price: '$100',
            originalPrice: '$150',
            discount: '27%'
        },
        {
            id: 'mobile-pro',
            name: 'Mobile Pro',
            description: 'Perfecto para profesionales que trabajan desde cualquier lugar',
            products: ['basehub', 'pocketdock', 'voltbar'],
            price: '$60',
            originalPrice: '$80',
            discount: '26%'
        }
    ];

    const addToCart = (item: typeof products[0] | typeof bundles[0], type: 'product' | 'bundle') => {
        const newItem = {
            ...item,
            type,
            id: `${type}-${item.id}`,
            quantity: 1
        };

        setCart(prev => [...prev, newItem]);
    };

    const removeFromCart = (itemId: string) => {
        setCart(prev => prev.filter(item => item.id !== itemId));
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => {
            const price = parseInt(item.price.replace('$', ''));
            return total + price;
        }, 0);
    };



    return (
        <section id="productos" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Nuestra
                        <span className="text-blue-600"> Línea de Productos</span>
                    </h2>
                    <p className="text-xl text-white max-w-3xl mx-auto">
                        Cada producto está diseñado para funcionar perfectamente solo o en conjunto.
                        Construye tu ecosistema Dockit paso a paso.
                    </p>
                </div>

                {/* Featured Bundles */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center text-black mb-8">Ecosistemas Recomendados</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {bundles.map((bundle) => (
                            <div key={bundle.id} className="bg-white rounded-2xl shadow-lg border-2 border-blue-200 p-8 relative">
                                <div className="absolute -top-4 left-6">
                                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                        Ahorra {bundle.discount}
                                    </span>
                                </div>
                                <h4 className="text-xl font-bold text-black mb-3">{bundle.name}</h4>
                                <p className="text-black mb-4">{bundle.description}</p>
                                <div className="flex items-center mb-4">
                                    <span className="text-2xl font-bold text-black">{bundle.price}</span>
                                    <span className="text-black line-through ml-2">{bundle.originalPrice}</span>
                                </div>
                                <div className="mb-4">
                                    <p className="text-sm text-black mb-2">Incluye:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {bundle.products.map(productId => {
                                            const product = products.find(p => p.id === productId);
                                            return (
                                                <span key={productId} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs">
                                                    {product?.name.replace('Dockit ', '')}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                                <button
                                    onClick={() => addToCart(bundle, 'bundle')}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                                >
                                    Agregar Ecosistema
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Individual Products */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center text-black mb-8">Productos Individuales</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl relative ${product.popular
                                    ? 'border-blue-500 transform scale-105'
                                    : 'border-gray-200 hover:border-blue-300'
                                    }`}
                            >
                                {product.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                                            Popular
                                        </span>
                                    </div>
                                )}

                                {!product.inStock && (
                                    <div className="absolute -top-4 right-4">
                                        <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                            Próximamente
                                        </span>
                                    </div>
                                )}

                                <div className="p-6">
                                    {/* Product Image Placeholder */}
                                    <div className="bg-gray-100 rounded-xl h-48 mb-6 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className={`w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center ${product.category === 'Soporte' ? 'bg-blue-600' :
                                                product.category === 'Carga' ? 'bg-green-600' :
                                                    product.category === 'Organización' ? 'bg-purple-600' :
                                                        product.category === 'Ergonomía' ? 'bg-red-600' :
                                                            'bg-amber-600'
                                                }`}>
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                                </svg>
                                            </div>
                                            <span className="text-gray-500 text-sm">{product.category}</span>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <h4 className="text-xl font-bold text-black mb-2">{product.name}</h4>
                                        <p className="text-black mb-4 text-sm">{product.description}</p>

                                        <div className="flex items-center justify-center mb-4">
                                            <span className="text-2xl font-bold text-black">{product.price}</span>
                                            <span className="text-gray-500 line-through ml-2 text-sm">{product.originalPrice}</span>
                                        </div>

                                        <button
                                            onClick={() => {
                                                setSelectedProduct(product);
                                                setIsModalOpen(true);
                                            }}
                                            className="w-full mb-3 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors text-sm"
                                        >
                                            Ver características
                                        </button>

                                        {product.inStock && (
                                            <button
                                                onClick={() => addToCart(product, 'product')}
                                                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors text-sm"
                                            >
                                                Agregar al Carrito
                                            </button>
                                        )}
                                    </div>


                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Shopping Cart */}
                {cart.length > 0 && (
                    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                        <h3 className="text-2xl font-bold text-black mb-6">Tu Carrito Dockit</h3>

                        <div className="space-y-4 mb-6">
                            {cart.map((item) => (
                                <div key={item.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                                    <div>
                                        <h4 className="font-semibold text-white">{item.name}</h4>
                                        <p className="text-white text-sm capitalize">{item.type === 'product' ? 'Producto individual' : 'Ecosistema'}</p>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <span className="font-bold text-white">{item.price}</span>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 hover:text-red-700 p-1"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-gray-200 pt-6">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-xl font-bold text-black">Total:</span>
                                <span className="text-2xl font-bold text-blue-600">${getTotalPrice()}</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                                    Proceder al Pago
                                </button>
                                <button className="border-2 border-gray-300 hover:border-blue-600 text-black hover:text-blue-600 py-3 px-6 rounded-lg font-semibold transition-colors">
                                    Solicitar Cotización
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Why Choose Dockit */}
                <div className="mt-16 bg-blue-600 rounded-2xl p-12 text-white text-center">
                    <h3 className="text-3xl font-bold mb-4">¿Por qué elegir Dockit?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        <div>
                            <div className="text-4xl mb-4">🔧</div>
                            <h4 className="font-bold mb-2">Modularidad Total</h4>
                            <p className="text-blue-100">Cada producto funciona solo o en conjunto, tú decides cómo armar tu espacio.</p>
                        </div>
                        <div>
                            <div className="text-4xl mb-4">🎨</div>
                            <h4 className="font-bold mb-2">Diseño Premium</h4>
                            <p className="text-blue-100">Materiales de alta calidad con estética minimalista y funcional.</p>
                        </div>
                        <div>
                            <div className="text-4xl mb-4">🚀</div>
                            <h4 className="font-bold mb-2">Envío Rápido</h4>
                            <p className="text-blue-100">Entrega en toda Latinoamérica con seguimiento completo.</p>
                        </div>
                    </div>
                </div>

                {/* Product Modal */}
                <ProductModal
                    product={selectedProduct}
                    isOpen={isModalOpen}
                    onClose={() => {
                        setIsModalOpen(false);
                        setSelectedProduct(null);
                    }}
                />
            </div>
        </section>
    );
} 