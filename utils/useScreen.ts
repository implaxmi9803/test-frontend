import { useEffect, useState } from 'react';

function useMediaQuery(query: string): boolean {
	const getMatches = (query: string): boolean => {
		// Prevents SSR issues
		if (typeof window !== 'undefined') {
			return window.matchMedia(query).matches;
		}
		return false;
	};

	const [matches, setMatches] = useState<boolean>(getMatches(query));

	function handleChange() {
		setMatches(getMatches(query));
	}

	useEffect(() => {
		const matchMedia = window.matchMedia(query);

		// Triggered at the first client-side load and if query changes
		handleChange();

		// Listen matchMedia
		if (matchMedia.addListener) {
			matchMedia.addListener(handleChange);
		} else {
			matchMedia.addEventListener('change', handleChange);
		}

		return () => {
			if (matchMedia.removeListener) {
				matchMedia.removeListener(handleChange);
			} else {
				matchMedia.removeEventListener('change', handleChange);
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	return matches;
}

const size = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '640px',
	tabletS: '768px',
	tabletM: '1024px',
	tabletL: '1280px',
	laptop: '1536px',
	desktop: '1920px',
};

export const devices = {
	mobileS: `(min-width: ${size.mobileS})`,
	mobileM: `(min-width: ${size.mobileM})`,
	mobileL: `(min-width: ${size.tabletL})`,
	tabletS: `(min-width: ${size.tabletS})`,
	tabletM: `(min-width: ${size.tabletM})`,
	tabletL: `(min-width: ${size.tabletL})`,
	laptop: `(min-width: ${size.laptop})`,
	desktop: `(min-width: ${size.desktop})`,
};

export const useScreen = () => {
	const isSmallMobile = useMediaQuery(devices.mobileS);
	const isMediumMobile = useMediaQuery(devices.mobileM);
	const isLargeMobile = useMediaQuery(devices.mobileL);
	const isSmallTablet = useMediaQuery(devices.tabletS);
	const isMediumTablet = useMediaQuery(devices.tabletM);
	const isLargeTablet = useMediaQuery(devices.tabletL);
	const isLaptop = useMediaQuery(devices.laptop);
	const isDesktop = useMediaQuery(devices.desktop);

	return {
		isSmallMobile,
		isMediumMobile,
		isLargeMobile,
		isSmallTablet,
		isMediumTablet,
		isLargeTablet,
		isLaptop,
		isDesktop,
	};
};
