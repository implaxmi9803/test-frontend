import { DownArrowIcon } from "~/icons";

interface ICardProps {
    card: any;
    activeCard: number;
    setActiveCard: any;
}

const Card = ({ card, activeCard, setActiveCard }: ICardProps) => {
    return (
        <div className='flex flex-col gap-[10px]  border border-[#CCCCCC] rounded-lg w-[266px]'>
            <div className='px-6 pt-6 flex flex-col gap-4'>
                <div className='flex justify-between'>
                    <div className='text-[20px] leading-[24px] font-semibold w-[143px]'>
                        {card?.title}
                    </div>
                    {card?.icon}
                </div>
                <div className='text-base font-medium'>{card?.description}</div>
            </div>
            <button
                onClick={() => setActiveCard(card?.id)}
                className={`w-[143.26px] h-[56px] px-6 py-4 ${
                    activeCard === card?.id
                        ? 'bg-[#FFD540] border-t-0 border-l-0 border-b-[6px] border-r-[8.24px] border-[#3C479D]'
                        : ' bg-[#EBECF5]'
                } rounded-none rounded-tr-[32px] flex gap-4  hover:bg-[#FFD540] hover:border-t-0 hover:border-l-0 hover:border-b-[6px] hover:border-r-[8.24px] hover:border-[#3C479D]`}
            >
                <span className='text-base font-medium'>Discover</span>
                <DownArrowIcon />
            </button>
        </div>
    );
};

export default Card;
