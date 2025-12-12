import React from 'react';

const imageAsset = {
  saham: '/public/images/saham.png',
};

const InvesmentAssets = () => {
  return (
    <div className="px-6 py-3 flex flex-col gap-4">
      <h2 className="font-bold text-4xl">Beragam Aset, Beragam Keuntungan</h2>
      <div className="flex gap-2 flex-wrap max-w-[80%]">
        <button className="py-2 px-4 border border-gray-300 rounded-4xl text-sm font-bold text-blue-600">Saham</button>
        <button className="py-2 px-4 border border-gray-300 rounded-4xl text-sm font-bold text-gray-400">E-IPO</button>
        <button className="py-2 px-4 border border-gray-300 rounded-4xl text-sm font-bold text-gray-400">ETF</button>
        <button className="py-2 px-4 border border-gray-300 rounded-4xl text-sm font-bold text-gray-400">Reksa Dana</button>
        <button className="py-2 px-4 border border-gray-300 rounded-4xl text-sm font-bold text-gray-400">Aset Kripto</button>
        <button className="py-2 px-4 border border-gray-300 rounded-4xl text-sm font-bold text-gray-400">Obligasi</button>
        <button className="py-2 px-4 border border-gray-300 rounded-4xl text-sm font-bold text-gray-400">Saham AS</button>
      </div>
    </div>
  );
};

export default InvesmentAssets;
