import { AccordianIcon1, AccordianIcon2, AccordianIcon3, CardIcon1, CardIcon2, CardIcon3, CardIcon4 } from "~/icons";

export const cards = [
    {
        id: 1,
        title: 'Card Title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: <CardIcon1 />,
        product: {
            title: 'Product title 1',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque risus id ante maximus blandit.',
            faqs: [
                { icon: <AccordianIcon1 />, title: 'Accordion title', description: 'Accordion description' },
                { icon: <AccordianIcon2 />, title: 'Accordion title', description: 'Accordion description' },
                { icon: <AccordianIcon3 />, title: 'Accordion title', description: 'Accordion description' },
                { icon: <AccordianIcon2 />, title: 'Accordion title', description: 'Accordion description' },
                { icon: <AccordianIcon1 />, title: 'Accordion title', description: 'Accordion description' },
            ],
        },
    },
    {
        id: 2,
        title: 'Card title that goes 2 lines',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: <CardIcon2 />,
        product: {
            title: 'Product title 2',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque risus id ante maximus blandit.',
            faqs: [
                { icon: <AccordianIcon1 />, title: 'Accordion title', description: 'Accordion description' },
                { icon: <AccordianIcon2 />, title: 'Accordion title', description: 'Accordion description' },
                { icon: <AccordianIcon3 />, title: 'Accordion title', description: 'Accordion description' },
                { icon: <AccordianIcon2 />, title: 'Accordion title', description: 'Accordion description' },
                { icon: <AccordianIcon1 />, title: 'Accordion title', description: 'Accordion description' },
            ],
        },
    },
    {
        id: 3,
        title: 'Card title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: <CardIcon3 />,
        product: {
            title: 'Product title 3',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque risus id ante maximus blandit.',
            faqs: [
                { icon: <AccordianIcon1 />, title: 'Accordion title', description: 'Accordion description' },
                { icon: <AccordianIcon2 />, title: 'Accordion title', description: 'Accordion description' },
                { icon: <AccordianIcon3 />, title: 'Accordion title', description: 'Accordion description' },
                { icon: <AccordianIcon2 />, title: 'Accordion title', description: 'Accordion description' },
                { icon: <AccordianIcon1 />, title: 'Accordion title', description: 'Accordion description' },
            ],
        },
    },
    {
        id: 4,
        title: 'Card title that goes 2 lines',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: <CardIcon4 />,
        product: {
            title: 'Product title 4',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque risus id ante maximus blandit.',
            faqs: [
                { icon: <AccordianIcon1 />, title: 'Accordion title', description: 'Accordion description' },
                { icon: <AccordianIcon2 />, title: 'Accordion title', description: 'Accordion description' },
                { icon: <AccordianIcon3 />, title: 'Accordion title', description: 'Accordion description' },
                { icon: <AccordianIcon2 />, title: 'Accordion title', description: 'Accordion description' },
                { icon: <AccordianIcon1 />, title: 'Accordion title', description: 'Accordion description' },
            ],
        },
    },
];
