import { useSnapshot } from 'valtio';
import { state } from '../stores';

export default function Input() {
  const snap = useSnapshot(state);
  return (
    <input
      type="text"
      value={snap.input}
      onChange={(e) => (state.input = e.target.value)}
    />
  );
}
