export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-5">Try navigating to the '/about'</h1>
      <div className="text-2xl">You will be redirected back to '/' using the redirect method through the middleware (This is applicable only if you are using the first code in the middleware.js file)</div>
    </div>
  );
}
