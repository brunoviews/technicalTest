import { Suspense } from 'react';
import TeamListContainer from '../containers/TeamListContainer';

export default function HomePage() {
  return (
    <Suspense fallback={<div className="text-center text-blue-600 font-medium py-8 animate-pulse">Loading...</div>}>
      <TeamListContainer />
    </Suspense>);
}
