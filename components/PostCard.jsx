import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { graphCMSImageLoader } from '../util';

const PostCard = ({ post }) => {
  return (
    <div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 inline-block h-60 w-full shadow-md lg:h-80">
        <Image
          unoptimized
          loader={graphCMSImageLoader}
          alt={post.title}
          className="rounded-t-lg shadow-lg lg:rounded-lg"
          layout="fill"
          src={post.featuredImage.url}
        />
      </div>

      <h1 className="mb-8 cursor-pointer text-center text-3xl font-semibold transition duration-700 hover:text-pink-600">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="mb-8 block w-full items-center justify-center text-center lg:flex">
        <div className="mb-4 mr-8 flex w-full   items-center justify-center lg:mb-0 lg:w-auto">
          <div className="h-8 w-8 flex-none align-middle">
            <Image
              loader={graphCMSImageLoader}
              alt={post.author.name}
              className="rounded-full align-middle drop-shadow-lg"
              src={post?.author?.photo?.url || '/bg.jpeg'}
              height={30}
              width={30}
              objectFit="cover"
              layout="responsive"
            />
          </div>

          <p className="ml-2 inline align-middle text-lg font-medium text-gray-700">
            {post?.author?.name}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 inline h-6 w-6 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="align-middle">
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
      <p className="mb-8 select-none px-4 text-center text-lg font-normal text-gray-700 lg:px-20">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="ease inline-block transform cursor-pointer select-none rounded-full bg-pink-600 px-8 py-3 text-lg font-medium text-white transition duration-500 hover:-translate-y-1">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
