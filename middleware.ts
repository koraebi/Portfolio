import createMiddleware from 'next-intl/middleware';
import { Languages } from '@/constants/common';
 
export default createMiddleware({
  locales: Languages,
  defaultLocale: 'en'
});
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};