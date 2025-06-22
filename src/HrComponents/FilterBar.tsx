export default function FilterBar() {
  return (
    <div className="text-white">
     <h1 className="text-xl ml-5  mb-2 font-semibold">Categories</h1>
      <div className="   border-violet-500/50   rounded-lg border-1 h-fit w-fit mb-5 mx-5 p-1 bg-violet-900/50 flex-wrap  flex flex-row  justify-around   gap-3">
        <div className="rounded-3xl bg-violet-500 p-1 text-sm">discount</div>
        <div className="rounded-3xl bg-violet-500 p-1 text-sm">Ai-Related</div>
        <div className="rounded-3xl bg-violet-500 p-1 text-sm">
          Tech-Related
        </div>
        <div className="rounded-3xl bg-violet-500 p-1 text-sm">Nitendo</div>
        <div className="rounded-3xl bg-violet-500 p-1 text-sm">Gfuel-PWR</div>
        <div className="rounded-3xl bg-violet-500 p-1 text-sm">Xbox</div>
        <div className="rounded-3xl bg-violet-500 p-1 text-sm">Playstation</div>
        <div className="rounded-3xl bg-violet-500 p-1 text-sm">PC/Parts</div>
        <div className="rounded-3xl bg-violet-500 p-1 text-sm">Gaming</div>
      </div>
    </div>
  );
}
