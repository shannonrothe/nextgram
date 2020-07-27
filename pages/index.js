import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Loader from "react-loader-spinner";

import moment from "moment";

const POSTS_URL = `/api/posts`;
const TRUNCATE_LENGTH = 40;
const NUM_POSTS = 20; // Load 20 posts at a time

const Caption = ({ post }) => {
  const [showCaption, setShowCaption] = useState(false);

  const truncateCaption = caption => {
    if (caption.length < TRUNCATE_LENGTH) {
      return caption;
    }

    return caption.slice(0, TRUNCATE_LENGTH) + "...";
  };

  return (
    <div className='p-2'>
      <span className='mr-2 font-semibold lowercase'>{post.user.name}</span>
      <span>{showCaption ? post.caption : truncateCaption(post.caption)}</span>
      {!showCaption && post.caption.length > TRUNCATE_LENGTH && (
        <span className='ml-1 text-gray-600' onClick={e => setShowCaption(!showCaption)}>
          more
        </span>
      )}
    </div>
  );
};

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loadedPosts, setLoadedPosts] = useState([]);

  useEffect(() => {
    setLoadedPosts(posts.slice(0, NUM_POSTS));
  }, [posts]);

  const getNewPosts = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([...loadedPosts, ...posts.slice(loadedPosts.length, loadedPosts.length + NUM_POSTS)]);
      }, Math.floor(Math.random() * 2000));
    });
  };

  const PostLoader = () => {
    const [ref, inView, entry] = useInView({
      threshold: 0,
    });

    useEffect(() => {
      if (inView) {
        getNewPosts().then(newPosts => setLoadedPosts(newPosts));
      }
    }, [inView]);

    return (
      <div ref={ref} className='flex items-center justify-center p-2'>
        {inView && <Loader type='TailSpin' color='#A0AEC0' height={24} width={24} />}
      </div>
    );
  };

  useEffect(() => {
    fetch(POSTS_URL)
      .then(res => res.json())
      .then(posts => setPosts(posts));
  }, []);

  return (
    <div className='overflow-hidden'>
      <div className='space-y-4'>
        {loadedPosts.map(post => {
          return (
            <div key={post.id} className='flex flex-col text-sm'>
              <div className='flex items-center p-2'>
                <img className='w-10 h-10 mr-2 rounded-full' src={post.user.avatarUrl}></img>

                <div className='flex flex-col flex-1 text-xs'>
                  <span className='font-semibold'>{post.user.name}</span>
                  <span>{post.location}</span>
                </div>

                <button className='focus:outline-none'>
                  <svg
                    className='w-4 h-4 text-gray-600 fill-current'
                    aria-label='More options'
                    fill='#262626'
                    height='16'
                    viewBox='0 0 48 48'
                    width='16'>
                    <circle clipRule='evenodd' cx='8' cy='24' fillRule='evenodd' r='4.5'></circle>
                    <circle clipRule='evenodd' cx='24' cy='24' fillRule='evenodd' r='4.5'></circle>
                    <circle clipRule='evenodd' cx='40' cy='24' fillRule='evenodd' r='4.5'></circle>
                  </svg>
                </button>
              </div>
              <img loading='lazy' className='mb-1' src={`https://picsum.photos/seed/${post.id}/640`} />
              <Caption post={post} />
              <div className='px-2 text-gray-500 uppercase text-xxs'>{moment(post.posted_at).fromNow()}</div>
            </div>
          );
        })}
      </div>

      {posts.length > loadedPosts.length && <PostLoader />}
    </div>
  );
}
