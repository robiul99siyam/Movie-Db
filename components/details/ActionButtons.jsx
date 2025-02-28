export default function ActionButtons() {
  return (
    <div className="mb-6 flex flex-wrap gap-4">
      <button className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg">
        <svg width="24" height="24" stroke="currentColor" strokeWidth="2">
          <path d="M12 11v6M9 14h6" />
        </svg>
        Add to Watchlist
      </button>
      <button className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg text-green-600">
        <svg width="24" height="24" stroke="currentColor" strokeWidth="2">
          <path d="M7 12l5 5l10 -10M2 12l5 5m5 -5l5 -5" />
        </svg>
        Added to Watchlist
      </button>
    </div>
  );
}
