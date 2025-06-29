"use client";

export default function ProductCard() {
  const products = [
    {
      id: 1,
      name: 'MacBook Pro 16"',
      price: 19999,
      originalPrice: 21999,
      image: '💻',
      rating: 4.8,
      badge: '热销'
    },
    {
      id: 2,
      name: 'iPhone 15 Pro',
      price: 8999,
      originalPrice: 9999,
      image: '📱',
      rating: 4.9,
      badge: '新品'
    },
    {
      id: 3,
      name: 'iPad Air',
      price: 4399,
      originalPrice: null,
      image: '📱',
      rating: 4.7,
      badge: '推荐'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* 练习说明 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            练习03：产品展示卡片
          </h1>
          <p className="text-gray-600 mb-4">
            电商风格的产品卡片组件设计。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">HTML</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">CSS</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Grid</span>
          </div>
        </div>

        {/* 产品卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative">
                <div className="text-6xl">{product.image}</div>
                <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs">
                  {product.badge}
                </span>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                
                <div className="flex items-center mb-3">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-red-600">
                    ¥{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ¥{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors">
                  立即购买
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 