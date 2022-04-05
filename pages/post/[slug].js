import React from 'react';
import Head from 'next/head';
import { getPosts, getPostDetails } from '@/services';
import { useRouter } from 'next/router';
import {
  Author,
  Loader,
  Comments,
  PostDetail,
  PostWidget,
  Categories,
  CommentsForm,
} from '@/components';
PostWidget;

function PostDetails({ post, slug }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>बोल बिहार|{slug} </title>
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1  lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="col-span-1  lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
            <Categories
              categories={post.categories.map((category) => category.slug)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params?.slug);
  return {
    props: { post: data, slug: params.slug },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
