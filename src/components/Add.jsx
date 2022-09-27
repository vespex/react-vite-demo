import { state } from '../stores';

export default function Add() {
  return <button onClick={() => (state.count += 1)}>add</button>;
}
