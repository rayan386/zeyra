import { useState } from 'react';
import { storage } from '../../firebase/config';

export default function SellerDashboard() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: null
  });

  const handleUpload = async (e) => {
    e.preventDefault();
    const storageRef = ref(storage, products/${product.image.name});
    await uploadBytes(storageRef, product.image);
    // إضافة المنتج إلى Firestore
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">رفع منتج جديد</h2>
      <form onSubmit={handleUpload}>
        <input 
          type="file" 
          onChange={(e) => setProduct({...product, image: e.target.files[0]})} 
          className="mb-4"
        />
        <input
          type="text"
          placeholder="اسم المنتج"
          className="block w-full p-2 border mb-4"
          onChange={(e) => setProduct({...product, name: e.target.value})}
        />
        <input
          type="number"
          placeholder="السعر"
          className="block w-full p-2 border mb-4"
          onChange={(e) => setProduct({...product, price: e.target.value})}
        />
        <button 
          type="submit" 
          className="bg-orange-500 text-white px-6 py-2 rounded"
        >
          رفع المنتج
        </button>
      </form>
    </div>
  );
}
