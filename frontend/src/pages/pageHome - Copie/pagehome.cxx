.cell-container .cell-line, .cell-container .stamp-line {
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 1rem 0.2rem 0.1rem;
  border: 1px dashed grey;
}
.cell-container .cell-line .cell-id, .cell-container .stamp-line .cell-id {
  width: 4rem;
  border-radius: 4px;
  text-align: center;
}
.cell-container .cell-line .cell-id:hover, .cell-container .stamp-line .cell-id:hover {
  background-color: rgb(222, 224, 249);
  cursor: pointer;
}
.cell-container .cell-line .cell-info-carte, .cell-container .stamp-line .cell-info-carte {
  width: 8rem;
  padding-left: 0.5rem;
  text-align: center;
}
.cell-container .cell-line .cell-info-annee, .cell-container .stamp-line .cell-info-annee {
  width: 4rem;
  padding-left: 0.5rem;
  text-align: center;
}
.cell-container .cell-line .cell-info-annee:hover, .cell-container .stamp-line .cell-info-annee:hover {
  background-color: rgb(222, 224, 249);
  cursor: pointer;
}
.cell-container .cell-line .cell-info, .cell-container .stamp-line .cell-info {
  width: 8rem;
  padding-left: 0.5rem;
  text-align: left;
}
.cell-container .cell-line .cell-info:hover, .cell-container .stamp-line .cell-info:hover {
  background-color: rgb(222, 224, 249);
  cursor: pointer;
}
.cell-container .cell-line .cell-label-boolean, .cell-container .stamp-line .cell-label-boolean {
  width: 3rem;
  font-size: 0.8rem;
  text-align: center;
  color: rgb(253, 253, 253);
}
.cell-container .cell-line .cell-boolean, .cell-container .stamp-line .cell-boolean {
  width: 3rem;
  height: 1.2rem;
  text-align: center;
  background: transparent;
  color: var(--grey-300);
}
.cell-container .cell-line .cell-boolean-oui, .cell-container .stamp-line .cell-boolean-oui {
  width: 3rem;
  height: 1, 2rem;
  text-align: center;
  background: transparent;
  color: var(--green-600);
}
.cell-container .cell-line .cell-date, .cell-container .stamp-line .cell-date {
  width: 8rem;
  margin: 0;
  padding-left: 0.5rem;
  text-align: left;
}

:root {
  --white: #fff;
  --grey-50: #f9fafb;
  --grey-100: #f3f4f6;
  --grey-200: #e5e7eb;
  --grey-300: #d1d5db;
  --grey-400: #9ca3af;
  --grey-500: #6b7280;
  --grey-600: #4b5563;
  --grey-700: #374151;
  --grey-800: #1f2937;
  --grey-900: #111827;
  --grey-950: #030712;
  --error-50: #fef2f2;
  --error-100: #fee2e2;
  --error-200: #fecaca;
  --error-300: #fca5a5;
  --error-400: #f87171;
  --error-500: #ef4444;
  --error-600: #dc2626;
  --error-700: #b91c1c;
  --error-800: #991b1b;
  --error-900: #7f1d1d;
  --error-950: #450a0a;
  --warning-50: #fffbeb;
  --warning-100: #fef3c7;
  --warning-200: #fde68a;
  --warning-300: #fcd34d;
  --warning-400: #fbbf24;
  --warning-500: #f59e0b;
  --warning-600: #d97706;
  --warning-700: #b45309;
  --warning-800: #92400e;
  --warning-900: #78350f;
  --warning-950: #451a03;
  --success-50: #f0fdf4;
  --success-100: #dcfce7;
  --success-200: #bbf7d0;
  --success-300: #86efac;
  --success-400: #4ade80;
  --success-500: #22c55e;
  --success-600: #16a34a;
  --success-700: #15803d;
  --success-800: #166534;
  --success-900: #14532d;
  --success-950: #052e16;
  --amber-50: #fffbeb;
  --amber-100: #fef3c7;
  --amber-200: #fde68a;
  --amber-300: #fcd34d;
  --amber-400: #fbbf24;
  --amber-500: #f59e0b;
  --amber-600: #d97706;
  --amber-700: #b45309;
  --amber-800: #92400e;
  --amber-900: #78350f;
  --amber-950: #451a03;
  --blue-50: #eff6ff;
  --blue-100: #dbeafe;
  --blue-200: #bfdbfe;
  --blue-300: #93c5fd;
  --blue-400: #60a5fa;
  --blue-500: #3b82f6;
  --blue-600: #2563eb;
  --blue-700: #1d4ed8;
  --blue-800: #1e40af;
  --blue-900: #1e3a8a;
  --blue-950: #172554;
  --cyan-50: #ecfeff;
  --cyan-100: #cffafe;
  --cyan-200: #a5f3fc;
  --cyan-300: #67e8f9;
  --cyan-400: #22d3ee;
  --cyan-500: #06b6d4;
  --cyan-600: #0891b2;
  --cyan-700: #0e7490;
  --cyan-800: #155e75;
  --cyan-900: #164e63;
  --cyan-950: #083344;
  --emerald-50: #ecfdf5;
  --emerald-100: #d1fae5;
  --emerald-200: #a7f3d0;
  --emerald-300: #6ee7b7;
  --emerald-400: #34d399;
  --emerald-500: #10b981;
  --emerald-600: #059669;
  --emerald-700: #047857;
  --emerald-800: #065f46;
  --emerald-900: #064e3b;
  --emerald-950: #022c22;
  --fuchsia-50: #fdf4ff;
  --fuchsia-100: #fae8ff;
  --fuchsia-200: #f5d0fe;
  --fuchsia-300: #f0abfc;
  --fuchsia-400: #e879f9;
  --fuchsia-500: #d946ef;
  --fuchsia-600: #c026d3;
  --fuchsia-700: #a21caf;
  --fuchsia-800: #86198f;
  --fuchsia-900: #701a75;
  --fuchsia-950: #4a044e;
  --green-50: #f0fdf4;
  --green-100: #dcfce7;
  --green-200: #bbf7d0;
  --green-300: #86efac;
  --green-400: #4ade80;
  --green-500: #22c55e;
  --green-600: #16a34a;
  --green-700: #15803d;
  --green-800: #166534;
  --green-900: #14532d;
  --green-950: #052e16;
  --indigo-50: #eef2ff;
  --indigo-100: #e0e7ff;
  --indigo-200: #c7d2fe;
  --indigo-300: #a5b4fc;
  --indigo-400: #818cf8;
  --indigo-500: #6366f1;
  --indigo-600: #4f46e5;
  --indigo-700: #4338ca;
  --indigo-800: #3730a3;
  --indigo-900: #312e81;
  --indigo-950: #1e1b4b;
  --lime-50: #f7fee7;
  --lime-100: #ecfccb;
  --lime-200: #d9f99d;
  --lime-300: #bef264;
  --lime-400: #a3e635;
  --lime-500: #84cc16;
  --lime-600: #65a30d;
  --lime-700: #4d7c0f;
  --lime-800: #3f6212;
  --lime-900: #365314;
  --lime-950: #1a2e05;
  --orange-50: #fff7ed;
  --orange-100: #ffedd5;
  --orange-200: #fed7aa;
  --orange-300: #fdba74;
  --orange-400: #fb923c;
  --orange-500: #f97316;
  --orange-600: #ea580c;
  --orange-700: #c2410c;
  --orange-800: #9a3412;
  --orange-900: #7c2d12;
  --orange-950: #431407;
  --pink-50: #fdf2f8;
  --pink-100: #fce7f3;
  --pink-200: #fbcfe8;
  --pink-300: #f9a8d4;
  --pink-400: #f472b6;
  --pink-500: #ec4899;
  --pink-600: #db2777;
  --pink-700: #be185d;
  --pink-800: #9d174d;
  --pink-900: #831843;
  --pink-950: #500724;
  --purple-50: #faf5ff;
  --purple-100: #f3e8ff;
  --purple-200: #e9d5ff;
  --purple-300: #d8b4fe;
  --purple-400: #c084fc;
  --purple-500: #a855f7;
  --purple-600: #9333ea;
  --purple-700: #7e22ce;
  --purple-800: #6b21a8;
  --purple-900: #581c87;
  --purple-950: #3b0764;
  --red-50: #fef2f2;
  --red-100: #fee2e2;
  --red-200: #fecaca;
  --red-300: #fca5a5;
  --red-400: #f87171;
  --red-500: #ef4444;
  --red-600: #dc2626;
  --red-700: #b91c1c;
  --red-800: #991b1b;
  --red-900: #7f1d1d;
  --red-950: #450a0a;
  --rose-50: #fff1f2;
  --rose-100: #ffe4e6;
  --rose-200: #fecdd3;
  --rose-300: #fda4af;
  --rose-400: #fb7185;
  --rose-500: #f43f5e;
  --rose-600: #e11d48;
  --rose-700: #be123c;
  --rose-800: #9f1239;
  --rose-900: #881337;
  --rose-950: #4c0519;
  --sky-50: #f0f9ff;
  --sky-100: #e0f2fe;
  --sky-200: #bae6fd;
  --sky-300: #7dd3fc;
  --sky-400: #38bdf8;
  --sky-500: #0ea5e9;
  --sky-600: #0284c7;
  --sky-700: #0369a1;
  --sky-800: #075985;
  --sky-900: #0c4a6e;
  --sky-950: #082f49;
  --teal-50: #f0fdfa;
  --teal-100: #ccfbf1;
  --teal-200: #99f6e4;
  --teal-300: #5eead4;
  --teal-400: #2dd4bf;
  --teal-500: #14b8a6;
  --teal-600: #0d9488;
  --teal-700: #0f766e;
  --teal-800: #115e59;
  --teal-900: #134e4a;
  --teal-950: #042f2e;
  --violet-50: #f5f3ff;
  --violet-100: #ede9fe;
  --violet-200: #ddd6fe;
  --violet-300: #c4b5fd;
  --violet-400: #a78bfa;
  --violet-500: #8b5cf6;
  --violet-600: #7c3aed;
  --violet-700: #6d28d9;
  --violet-800: #5b21b6;
  --violet-900: #4c1d95;
  --violet-950: #2e1065;
  --yellow-50: #fefce8;
  --yellow-100: #fef9c3;
  --yellow-200: #fef08a;
  --yellow-300: #fde047;
  --yellow-400: #facc15;
  --yellow-500: #eab308;
  --yellow-600: #ca8a04;
  --yellow-700: #a16207;
  --yellow-800: #854d0e;
  --yellow-900: #713f12;
  --yellow-950: #422006;
}

.cell-container {
  padding-top: 3rem;
}
.cell-container .cell-line-container {
  height: 80vh;
  overflow: scroll;
}
.cell-container .cell-line:hover {
  cursor: pointer;
  color: var(--blue-400);
}
.cell-container .stamp-line {
  border: none;
  padding-right: 2rem;
  background-color: var(--blue-300);
  color: var(--blue-700);
}/*# sourceMappingURL=pagehome.css.map */