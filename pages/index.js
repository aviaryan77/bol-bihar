import Head from 'next/head';
import Image from 'next/image';
import { PostCard, PostWidget, Categories } from '@/components';
import { getPosts } from '@/services';
import { FeaturedPosts } from '../sections/index';

const HomePage = ({ posts }) => {
  return (
    <div className="container mx-auto mb-8  px-12">
      <Head>
        <title>Bol Bihar Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className=" grid grid-cols-1 gap-12  lg:grid-cols-12">
        <div className="col-span-1  lg:col-span-8">
          {posts.map((post) => (
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
  return {
    props: { posts },
  };
}

export default HomePage;
