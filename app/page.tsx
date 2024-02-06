'use client'

import { useState } from "react";

import { PlusIcon } from "~/icons";
import Card from "~/components/Card";
import { cards } from "~/components/data";
import Product from "~/components/Product";
import { useScreen } from "~/utils/useScreen";

export default function Home() {
  const { isLargeTablet } = useScreen();
  const [activeCard, setActiveCard] = useState(cards?.[0]?.id);

  const [isOpenList, setIsOpenList] = useState(new Array(cards?.length).fill(false));

  const handleClick = (index: number) => {
      setIsOpenList((prev) => {
          const newList = [...prev];
          for (let i = 0; i < newList.length; i++) {
              if (i !== index) {
                  newList[i] = false;
              }
          }
          newList[index] = !newList[index];
          return newList;
      });
  };

  const product = cards?.find((x: any) => x?.id === activeCard)?.product;

  return (
    <div className='bg-[#F7F7F7] w-screen flex justify-center'>
    <div className='max-w-[1216px]  py-[152px] flex flex-col items-center gap-[29.67px]'>
        <div className='flex flex-col items-center text-center gap-7.5'>
            <div className='text-[40px] leading-[48px] font-semibold'>Section title</div>
            <div className='text-[24px] leading-[28.8px] font-medium'>
                Section subtitle{' '}
            </div>
        </div>
        {isLargeTablet ? (
            <div className='flex flex-col gap-10'>
                <div className='flex gap-[13px]'>
                    {cards?.map((card: any) => (
                        <Card
                            key={card?.id}
                            card={card}
                            activeCard={activeCard}
                            setActiveCard={setActiveCard}
                        />
                    ))}
                </div>
                <Product product={product} />
            </div>
        ) : (
            <div className='w-screen px-10 flex flex-col gap-6'>
                {cards?.map((item: any, index: any) => {
                    return (
                        <div
                            key={index}
                            className='bg-[#ffffff] border-b-8 border-[#FFE58C] rounded-2xl'
                        >
                            <div
                                className='flex items-center justify-between gap-4  px-8 py-6'
                                onClick={() => handleClick(index)}
                            >
                                <div className='flex items-center cursor-pointer gap-4'>
                                    {item?.icon}
                                    <span className=' text-[18px] leading-[25.2px] font-medium'>
                                        {item?.title}
                                    </span>
                                </div>
                                <PlusIcon />
                            </div>

                            <div
                                className={`bg-[#FFE58C] rounded-t-2xl px-8 pt-8 pb-10 ${
                                    isOpenList[index] ? 'block' : 'hidden'
                                }`}
                            >
                                <Product product={item?.product} />
                            </div>
                        </div>
                    );
                })}
            </div>
        )}
    </div>
</div>
  );
}
