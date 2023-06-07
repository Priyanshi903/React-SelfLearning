import Card from './Card';
import useCounter from './hooks/use-counter';

const ForwardCounter = () => {
  // custom hook in every comp has its own state
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
