import Image from 'next/image';

export default function ProfilePicture() {
  return (
    <div>
      <Image 
        src='/headshot.jpg' 
        alt='headshot-image' 
        width={150}
        height={150}
        className='border-2 border-amber-50 rounded-full object-cover aspect-square
                   hover:border-amber-100 hover:scale-103 transition-all duration-300'
      />
    </div>
  );
}