import Card from '@/components/shared/Card';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className='container'>
    <Card className='about'>
      <h1 className='font-extrabold text-[25px]'>About this Project</h1>
      <p>This is a React app built with Next.js and TypeScript to leave feedback for a product or service</p>
      <p>Version: 1.0.0</p>

      <Link href='/' passHref>
        <p className='bg-[#e66f83] max-w-[150px] text-center rounded text-white p-3 mt-4'>
          Back to Home
        </p>
      </Link>
    </Card>
    </div>
  );
};

export default AboutPage;
