const List = (props: {
  listitems: string[];
}) => {
  const { listitems } = props;

  return (
    <>
      <ul>
        {listitems.map((listitem) => (
          <li key={listitem}>{listitem}</li>
        ))}
      </ul>
    </>
  )
}

export default List;
