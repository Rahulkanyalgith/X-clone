
import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";



const FeedCard: React.FC = () => {
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
          <Image
            src="https://pbs.twimg.com/profile_images/1775033696980008960/RVZaerpX_400x400.jpg"
            className="rounded-full"
            alt="user-image"
            height={50}
            width={50}
          />
        </div>

        <div className="col-span-11">
          <h5>Rahul kanyal</h5>
          <p>
            How 'dark web' websites are made? is it similar to html , css, js
            which we normally do?
          </p>
          <div className="flex justify-between mt-5 text-xl items-center w-[90%] ">
          <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiUpload />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
