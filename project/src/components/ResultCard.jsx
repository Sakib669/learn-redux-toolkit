import React from 'react';

const ResultCard = ({ item, tab }) => {
  // ১. বিভিন্ন API থেকে আসা ইমেজের ইউআরএল হ্যান্ডেল করা
  const imageUrl = item.urls?.small || item.images?.fixed_height.url || item.image;

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 overflow-hidden group">
      <figure className="relative h-60 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={tab}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* ভিডিওর ক্ষেত্রে একটি প্লে আইকন বা ব্যাজ দেখানো যেতে পারে */}
        {tab === "videos" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40">
            <div className="badge badge-primary">Video</div>
          </div>
        )}
      </figure>
      
      <div className="card-body p-4">
        <h2 className="card-title text-sm capitalize">
          {tab} by {item.user?.name || "Unknown Artist"}
        </h2>
        <div className="card-actions justify-end mt-2">
          <a 
            href={item.links?.html || item.url} 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-xs btn-outline"
          >
            View Original
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;