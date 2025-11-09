'use client';

import { useEffect, useState } from 'react';

interface Food {
  id: number;
  strTitle: string;
  strDesc: string;
  k: number;
  na: number;
  p: number;
}

function getTrafficLight(value: number, type: 'k' | 'na' | 'p'): string {
  if (type === 'k') {
    if (value <= 150) return 'green';
    if (value <= 299) return 'yellow';
    return 'red';
  }
  if (type === 'na') {
    return value <= 599 ? 'green' : 'red';
  }
  if (type === 'p') {
    if (value <= 90) return 'green';
    if (value <= 299) return 'yellow';
    return 'red';
  }
  return 'green';
}

export default function Home() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/api/foods')
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  const filteredFoods = foods.filter((food) =>
    food.strTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedFoods = searchTerm === '' ? filteredFoods.slice(0, 40) : filteredFoods;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Alimentos</h1>
      <input
        type="text"
        placeholder="Buscar alimentos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <div className="space-y-4">
        {displayedFoods.map((food) => (
          <div key={food.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{food.strTitle}</h2>
            <div className="flex space-x-8 mt-2">
              <div className="flex flex-col items-center">
                <p className="text-sm mb-1">Potasio (K)</p>
                <p className="text-xs font-semibold mb-1">{food.k}</p>
                <img src={`/${getTrafficLight(food.k, 'k')}.png`} alt="Potasio" className="w-12 h-auto object-contain" />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm mb-1">Sodio (Na)</p>
                <p className="text-xs font-semibold mb-1">{food.na}</p>
                <img src={`/${getTrafficLight(food.na, 'na')}.png`} alt="Sodio" className="w-12 h-auto object-contain" />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm mb-1">Fósforo (P)</p>
                <p className="text-xs font-semibold mb-1">{food.p}</p>
                <img src={`/${getTrafficLight(food.p, 'p')}.png`} alt="Fósforo" className="w-12 h-auto object-contain" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
