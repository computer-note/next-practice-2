import LoadNextUser from './_components/LoadNextUser';

export default async function Home() {
  const response = await fetch(`https://randomuser.me/api`, {
    cache: 'no-cache',
  });
  const data = await response.json();
  const user = data.results[0];

  return (
    <main>
      <LoadNextUser user={user} />
    </main>
  );
}
