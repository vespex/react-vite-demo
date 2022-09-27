import { useSnapshot } from 'valtio';
import { state } from '../stores';

export default function Async() {
  const snap = useSnapshot(state);
  return <>title is {snap.request?.title}</>;
}
