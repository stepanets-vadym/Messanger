const Icon = ({ name }) => {
  return (
    <svg className='icon'>
      <use xlinkHref={name}></use>
    </svg>
  );
};

export default Icon;
