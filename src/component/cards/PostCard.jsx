import React from "react";
import SaveIcon from "../../assets/icons/SaveIcon";
import LikeIcon from "../../assets/icons/LikeIcon";
import CommentIcon from "../../assets/icons/CommentIcon";

/**
 * PostCard Component
 * Renders a single post with author info, content preview, and interaction icons.
 */
const PostCard = ({
  id,
  authorImg,
  authorName,
  username,
  timeAgo,
  title,
  body,
  tag,
  readTime,
  selected,
  poemImg,
  saved,
  liked,
  onSaveToggle,
  onLikeToggle,
}) => (
  <div className="flex flex-col md:flex-row border-b pb-6">
    {/* Text content */}
    <div className="flex-1">
      <div className="w-full md:w-[80%] mb-4">
        {/* Author Info */}
        <div className="flex items-center gap-2 font-roboto text-sm mb-4">
          <img
            src={authorImg}
            alt="author"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-[#292929]">{authorName}</span>
            <small className="text-[#7f7f7f]">{username}</small>
          </div>
          <span className="text-[#757575]">·</span>
          <span className="text-[#757575]">{timeAgo}</span>
        </div>

        {/* Post title and body */}
        <h2 className="text-xl font-semibold font-roboto mb-2">{title}</h2>
        <p className="text-[#292929] mb-4 text-sm font-roboto">{body}</p>

        {/* Metadata and icons */}
        <div className="flex flex-wrap justify-between gap-4">
          {/* Tags and time info */}
          <div className="text-xs text-[#757575] font-roboto flex gap-2 items-center">
            <span className="bg-[#F2F2F2] px-2 py-1 rounded-full text-[#292929]">
              {tag}
            </span>
            <span>{readTime}</span>
            <span>·</span>
            <span>{selected}</span>
          </div>

          {/* Interactive icons */}
          <div className="flex items-center gap-4 text-[#757575]">
            <button
              onClick={() => onSaveToggle(id)}
              className={saved ? "text-[#044AB1]" : ""}
            >
              <SaveIcon />
            </button>
            <button
              onClick={() => onLikeToggle(id)}
              className={liked ? "text-[#044AB1]" : ""}
            >
              <LikeIcon />
            </button>
            <button>
              <CommentIcon />
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Optional right-side image */}
    {poemImg && (
      <div className="w-full md:w-32 h-32 flex-shrink-0">
        <img src={poemImg} alt="poem" className="w-full h-full object-cover" />
      </div>
    )}
  </div>
);

export default PostCard;
