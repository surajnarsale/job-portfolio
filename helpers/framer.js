import { motion } from 'framer-motion';

export const nameVariants = {
	hidden: {
		opacity: 0,
		y: '-20px',
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 20,
			ease: 'easeIn',
			delay: 0.1,
		},
	},
};
export const headingVariants = {
	hidden: {
		opacity: 0,
		y: '-20px',
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 20,
			ease: 'easeIn',
			delay: 0.4,
		},
	},
};
export const subHeadingVariants = {
	hidden: {
		opacity: 0,
		y: '-20px',
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 20,
			ease: 'easeIn',
			delay: 0.7,
		},
	},
};
