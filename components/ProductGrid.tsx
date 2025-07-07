import React from 'react';

export default function ProductGrid() {
  // هنا يمكننا إضافة كود عرض المنتجات لاحقًا
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* سيتم عرض المنتجات هنا */}
      <p className="text-center text-gray-500">لا توجد منتجات حالياً</p>
    </div>
  );
}
