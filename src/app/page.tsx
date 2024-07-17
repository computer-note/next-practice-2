import LoadNextPokemon from './_components/LoadNextPokemon';
import LoadNextUser from './_components/LoadNextUser';

export default async function Home() {
  //유저 데이터 로드 --- SSR 방식
  const response = await fetch(`https://randomuser.me/api`, {
    cache: 'no-cache',
  });
  const data = await response.json();
  const user = data.results[0];

  //포켓몬 데이터 로드 --- SSG 방식
  const response2 = await fetch(
    'https://pokeapi.co/api/v2/pokemon/1/'
  );
  const pokemon = await response2.json();

  return (
    <main>
      {/* 클라이언트 컴포넌트 */}
      <LoadNextUser user={user} />

      <hr />

      {/* 클라이언트 컴포넌트 */}
      <LoadNextPokemon pokemon={pokemon} />
    </main>
  );
}
