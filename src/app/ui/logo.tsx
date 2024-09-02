import Image from 'next/image';

export default function Logo() {
  return (
    <div
      className='p-8 space-x-2 flex flex-row items-center leading-none text-tinybird-space-cadet bg-tinybird-emerald'
    >
        <Image src='/isotype-main.svg' alt='tinybird-logo' width='32' height='32'/>

      <p className="font-bold text-3xl">GameDB</p>
    </div>
  );
}