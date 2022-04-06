import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '@/services';
import Image from 'next/image';
import { graphCMSImageLoader } from '@/util';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => {
        return (
          <div key={post.title} className="mb-4 flex w-full items-center">
            <div className="h-16 w-16 flex-none  align-middle">
              <Image
                alt={post?.title}
                height="60"
                width="60"
                objectFit="cover"
                layout="responsive"
                className="rounded-full"
                src={post?.featuredImage?.url || '/bg.jpeg'}
                loader={graphCMSImageLoader}
              />
            </div>
            <div className="ml-4 flex-grow">
              <p className="font-light text-gray-500 ">
                {moment(post?.createdAt).format('MMM DD, YYYY')}
              </p>
              <Link
                key={post?.title}
                href={`/post/${post.slug}`}
                className="text-md"
              >
                {post?.title}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostWidget;
