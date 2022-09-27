import { Outlet } from 'react-router-dom';
export default function Home() {
  return (
    <div className="home">
      Home
      <Outlet />
    </div>
  );
}
