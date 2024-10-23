'use client';
import { useState } from 'react';
import Vets from '@/components/Vets';
import Foods from '@/components/Foods';
import pageStyles from './page.module.css';

export default function HomePage() {
  const [activePage, setActivePage] = useState('vets'); // Tracks which section to show

  return (
    <div>
      <nav>
        <button onClick={() => setActivePage('vets')}>Cat Vets</button>
        <button onClick={() => setActivePage('foods')}>Cat Foods</button>
      </nav>

      <div>
        {activePage === 'vets' && <Vets />}
        {activePage === 'foods' && <Foods />}
      </div>
    </div>
  );
}
