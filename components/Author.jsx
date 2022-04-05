import React from 'react'
import Image from 'next/image'
function Author({ author }) {
  return (
    <div className="relative mt-20 mb-8 rounded-lg bg-black bg-opacity-20 p-12 text-center">
      <div className="absolute -top-14 left-0 right-2">
        <Image
          unoptimized
          width="100px"
          height="100px"
          alt={author?.name}
          src={author?.photo?.url}
          className="rounded-full align-middle"
        />
      </div>
      <h3 className="my-4 text-xl font-bold text-white">{author?.name}</h3>
      <p className="my-4 text-lg text-white ">{author?.bio}</p>
    </div>
  )
}

export default Author
