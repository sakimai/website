// app/ClientAnalytics.tsx
'use client';

import { useEffect } from 'react';
import { initializeAnalytics } from '../app/firebase/config';

export default function ClientAnalytics() {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  return null;
}
