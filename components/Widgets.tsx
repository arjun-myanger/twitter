import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Widgets() {
  return (
    <div className="px-2 mt-2 col-span-2 hidden lg:inline">
      {/* Search */}
      <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full mt-2">
        <SearchIcon className="h-6 w-6 text-gray-500" />
        <input
          className="flex-1 outline-none bg-transparent"
          type="text"
          placeholder="Search Twitter"
        />
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="elonmusk"
        options={{ height: 1000 }}
      />
    </div>
  );
}

export default Widgets;
