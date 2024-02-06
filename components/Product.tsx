import { useState } from 'react';

import { ChevronDownIcon } from '~/icons';

import Modal from './Modal';

const Product = ({ product }: any) => {
    const [showModal, setShowModal] = useState(false);
    const [isOpenList, setIsOpenList] = useState(new Array(product?.faqs?.length).fill(false));

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

    return (
        <div className='max-w-[1103px] py-12 xl:px-16 bg-[#FFE58C] rounded-[40px] flex flex-col xl:flex-row gap-16'>
            <div className='max-w-[465px] flex flex-col gap-12'>
                <div className='flex flex-col gap-6'>
                    <div className='text-[48px] leading-[57.6px] font-semibold'>
                        {product?.title}
                    </div>
                    <div className='text-[24px] leading-[31.2px] font-normal'>
                        {product?.description}
                    </div>
                </div>
                <button
                    onClick={() => setShowModal(true)}
                    className='max-w-[262px] h-16 rounded-[40px] bg-[#F15A29] border-[3px] border-[#000000] text-[20px] leading-6 font-semibold'
                >
                    Discover product
                </button>
            </div>
            <div className='xl:w-[421px] flex flex-col gap-6'>
                {product?.faqs?.map((item: any, index: any) => {
                    return (
                        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                        <div
                            key={index}
                            onClick={() => handleClick(index)}
                            className='pb-6 border-b border-[#000000]'
                        >
                            <div className='flex justify-between'>
                                <div className='flex items-center cursor-pointer gap-4'>
                                  {item?.icon}
                                    <span className='text-[18px] leading-[25.2px] font-medium'>
                                        {item?.title}
                                    </span>
                                </div>
                                <ChevronDownIcon />
                            </div>

                            <p
                                className={`pt-4 px-12 text-base ${
                                    isOpenList[index] ? 'block' : 'hidden'
                                }`}
                            >
                                {item?.description}
                            </p>
                        </div>
                    );
                })}
            </div>
            {showModal && (
                <Modal setShowModal={setShowModal} />
            )}
        </div>
    );
};

export default Product;
