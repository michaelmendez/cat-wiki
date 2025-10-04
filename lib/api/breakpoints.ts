import { MAX_WIDTH_SM } from '@/constants/breakpoints';

const isMobileDevice = (width: number) => width <= MAX_WIDTH_SM;

export { isMobileDevice };
