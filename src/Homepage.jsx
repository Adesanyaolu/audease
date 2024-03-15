import { Button } from 'flowbite-react';
import { Link } from "react-router-dom";

function Homepage() {

  return (
    <div className='bg-bg-pink w-screen h-screen flex justify-center items-center'>
      <div className='flex flex-row justify-center text-center max-w-md space-x-16'>
        <Button className="py-3 px-6 text-bigTextb bg-bulletGreen"> <Link to="/signin" className='pt-6 md:pt-0 md:pr-4 ' > Sign In </Link> </Button>
        <Button className="py-3 px-6 text-bigTextb bg-bulletYellow"> <Link to="/dashboard" className='pt-6 md:pt-0 md:pr-4 ' > Dashboard </Link></Button>
      </div>
    </div>
  )
}

export default Homepage

