function Pokemon(props: any) {
  const { pokemon } = props;
  const { base_experience, height, id, name, weight } = pokemon;

  return (
    <div>
      <h3>{id}</h3>
      <div>
        <span className='font-bold'>이름: </span>
        <span>{name}</span>
      </div>
      <div>
        <span className='font-bold'>경험치: </span>
        <span>{base_experience}</span>
      </div>
      <div>
        <span className='font-bold'>키: </span>
        <span>{height}</span>
      </div>
      <div>
        <span className='font-bold'>무게: </span>
        <span>{weight}</span>
      </div>
    </div>
  );
}

export default Pokemon;
