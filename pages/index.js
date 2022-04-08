import Head from 'next/head';
import Image from 'next/image';
import { PostCard, PostWidget, Categories } from '@/components';
import { getPosts, getFeaturedPosts } from '@/services';
import { FeaturedPosts } from '../sections/index';
import { Meta } from '@/components/Meta';

const HomePage = ({ posts, featuredPosts }) => {
  return (
    <div className="container mx-auto mb-8  px-12">
      <div className="mb-8 min-h-[288px]">
        <FeaturedPosts posts={featuredPosts} />
      </div>
      <div className=" grid grid-cols-1 gap-12  lg:grid-cols-12">
        <div className="col-span-1  lg:col-span-8">
          {posts
            .sort(
              (a, b) => new Date(b.node.createdAt) - new Date(a.node.createdAt)
            )
            .map((post) => (
              <PostCard post={post?.node} key={post?.node?.title} />
            ))}
        </div>

        <div className="col-span-1 lg:col-span-4">
          <div className=" relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const featuredPosts = await getFeaturedPosts();
  return {
    props: { posts, featuredPosts },
    revalidate: 60,
  };
}

export default HomePage;
