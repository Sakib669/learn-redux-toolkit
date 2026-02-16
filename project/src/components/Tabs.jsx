import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab, setResults } from "../redux/features/searchSlice";
import { fetchGIFS, fetchPhotos, fetchVideos } from "../api/mediaApi";

const Tabs = () => {
  // ১. ট্যাবগুলোর নাম একটি অ্যারেতে রাখা হয়েছে
  const tabs = ["photos", "videos", "gif"];
  const dispatch = useDispatch();

  // ২. Redux Store থেকে ডাটাগুলো আনা হচ্ছে
  const { query, activeTab, results } = useSelector((store) => store.search);

  // ৩. এপিআই থেকে ডাটা ফেচ করার ফাংশন
  const getData = async () => {
    let data;
    if (activeTab === "photos") {
      data = await fetchPhotos(query);
    } else if (activeTab === "videos") {
      data = await fetchVideos(query);
    } else if (activeTab === "gif") {
      data = await fetchGIFS(query);
    }

    if (data) {
      // এপিআই রেসপন্স অনুযায়ী রেজাল্ট সেট করা (Unsplash এর জন্য .results থাকে)
      dispatch(setResults(data.results || data));
    }
  };

  // ৪. যখনই কুয়েরি বা একটিভ ট্যাব পরিবর্তন হবে, ডাটা ফেচ হবে
  useEffect(() => {
    if (query) {
      getData();
    }
  }, [query, activeTab]);

  return (
    <div className="p-5">
      {/* ৫. DaisyUI এর Tabs Lifted স্টাইল ব্যবহার করা হয়েছে */}
      <div className="tabs tabs-lifted">
        {tabs.map((tab, index) => (
          <React.Fragment key={index}>
            {/* রেডিও ইনপুট যা ট্যাব পরিবর্তনের কাজ করে */}
            <input
              type="radio"
              name="media_tabs"
              className="tab"
              aria-label={tab.toUpperCase()}
              checked={activeTab === tab}
              onChange={() => dispatch(setActiveTab(tab))}
            />

            {/* ট্যাবের কন্টেন্ট এরিয়া */}
            <div className="tab-content bg-base-100 border-base-300 p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {activeTab === tab &&
                  results?.map((item, idx) => (
                    <ResultCard key={item.id || idx} item={item} tab={tab} />
                  ))}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
