import PrimaryButton from '@/components/button/PrimaryButton';
import List from '@/components/list/List';
import Link from 'next/link';

const Home = () => {
  const items = ["item1", "item2", "item3"];
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about" rel='noopener noreferrer'>About</Link>
      <PrimaryButton>ボタン</PrimaryButton>
      <List listitems={items} />
    </div>
  )
}

export default Home;