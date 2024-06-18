import React from "react";
import { useEffect, useState } from "react";
import { ThumbsUpIcon, TriangleAlertIcon } from "lucide-react";
import { ThumbsDownIcon } from "lucide-react";
function Modals({
  title,
  description,
  duration,
  type,
  trigger,
}: {
  title: string;
  description: string;
  duration: number;
  type: string;
  trigger: boolean;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (trigger) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [trigger]);
  if (!visible) return null;
  if (type === "warning") {
    return (
      <div className="bg:white flex items-center   gap-4  alertModal border-2 ">
        <div className="">
          <TriangleAlertIcon className="text-red-500" />
        </div>
        <div>
          <span className="text-red-600">{title}...</span>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="bg:white flex items-center   gap-4  alertModal border-2 ">
      <div className="">
        {/* <TriangleAlertIcon className="text-red-500" /> */}
        <ThumbsUpIcon className="text-green-500" />
      </div>
      <div>
        <span className="text-green-500">{title}...</span>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
    // <div className="bg:white flex flex-col gap-2  rounded-sm alertModal">
    //   <ThumbsUpIcon className="text-green-500" />
    //   <span className="text-gray-600">{title}...</span>
    //   <p>{description}</p>
    // </div>
  );
}

export default Modals;
