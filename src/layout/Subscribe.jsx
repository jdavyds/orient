export default function Subscribe() {
  return (
    <main className="px-5 md:px-20 flex flex-col md:flex-row gap-10 py-12 w-full leading-loose justify-between items-start text-white bg-secondary">
      <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-10">
        <b className="text-xl md:text-[60px] font-[500] text-white">
          Newsletter
        </b>
        <p className="lato">
          Stay a step ahead on your travel journey! Join our exclusive
          newsletter to unlock insider tips, special offers, and the latest
          trends in travel security. Be the first to know about our newest
          services and promotions. Sign up now and elevate your travel
          experience with Orient Services!
        </p>
        <label className="flex h-14 w-full md:w-3/4 rounded">
          <input
            type="text"
            className="w-full h-full px-5 bg-inherit rounded border outline-none text-sm"
            placeholder="Enter your email address"
          />
          <button className="bg-primary text-white font-[600] border border-primary lato px-5 min-w-fit">
            Subscribe
          </button>
        </label>
      </div>
    </main>
  );
}
