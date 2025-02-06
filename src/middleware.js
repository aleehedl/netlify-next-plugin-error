
export function middleware(request) {
  const { nextUrl, url } = request;
  console.log(`Middleware executed for path=${url}, locale=${nextUrl.locale}, nextUrl.path=${nextUrl.pathname}`);
}