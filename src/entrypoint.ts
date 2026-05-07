import type { Alpine } from 'alpinejs';

type FlooringType = {
  name: string; slug: string;
  valMin: number; valMax: number;   // $ value added per sq ft
  timeMin: number; timeMax: number; // days per 1000 sq ft
  color: string;
};

type EstimatorData = {
  sqft: number;
  mode: 'value' | 'time';
  types: FlooringType[];
  displayValue(t: FlooringType): string;
  displayTime(t: FlooringType): string;
  displayLabel(t: FlooringType): string;
  barPct(t: FlooringType): number;
};

export default (Alpine: Alpine) => {
  Alpine.data('flooringEstimator', (): EstimatorData => ({
    sqft: 800,
    mode: 'value',
    types: [
      { name: 'Vinyl Sheet',  slug: '/vinyl-flooring/',     valMin: 3,  valMax: 6,  timeMin: 1, timeMax: 2, color: '#6b7280' },
      { name: 'Carpet',       slug: '/carpet-flooring/',    valMin: 4,  valMax: 8,  timeMin: 1, timeMax: 2, color: '#a87c4f' },
      { name: 'Laminate',     slug: '/laminate-flooring/',  valMin: 6,  valMax: 11, timeMin: 1, timeMax: 2, color: '#d97706' },
      { name: 'Luxury Vinyl', slug: '/luxury-vinyl-plank/', valMin: 10, valMax: 18, timeMin: 2, timeMax: 3, color: '#E53535' },
      { name: 'Tile',         slug: '/tile-flooring/',      valMin: 12, valMax: 20, timeMin: 3, timeMax: 5, color: '#CC0000' },
      { name: 'Hardwood',     slug: '/hardwood-flooring/',  valMin: 15, valMax: 26, timeMin: 3, timeMax: 5, color: '#7f1d1d' },
    ],
    displayValue(t: FlooringType): string {
      const sqft = (this as unknown as EstimatorData).sqft;
      const lo = Math.round(sqft * t.valMin / 100) * 100;
      const hi = Math.round(sqft * t.valMax / 100) * 100;
      return `+$${lo.toLocaleString()} – $${hi.toLocaleString()}`;
    },
    displayTime(t: FlooringType): string {
      const sqft = (this as unknown as EstimatorData).sqft;
      const ratio = sqft / 1000;
      const lo = Math.max(1, Math.round(t.timeMin * ratio * 2) / 2);
      const hi = Math.max(1, Math.round(t.timeMax * ratio * 2) / 2);
      const fmt = (d: number) => d === 1 ? '1 day' : `${d} days`;
      return lo === hi ? `~${fmt(lo)}` : `${fmt(lo)} – ${fmt(hi)}`;
    },
    displayLabel(t: FlooringType): string {
      const self = this as unknown as EstimatorData;
      return self.mode === 'value' ? self.displayValue(t) : self.displayTime(t);
    },
    barPct(t: FlooringType): number {
      const self = this as unknown as EstimatorData;
      return self.mode === 'value'
        ? Math.round((t.valMax / 26) * 100)
        : Math.round((t.timeMax / 5)  * 100);
    },
  }));
};
