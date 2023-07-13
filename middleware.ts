import createMiddleware from 'next-intl/middleware';
import { Languages } from '@/data/common';
 
export default createMiddleware({
  locales: Languages,
  defaultLocale: 'en'
});
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};