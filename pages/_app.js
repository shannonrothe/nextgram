import "../styles/index.css";
import Link from "../components/Link";
import NextLink from "next/link";
import Explore from "./explore";

export default function Instagram({ Component, pageProps }) {
  return (
    <div className='flex flex-col h-screen'>
      <header
        className='flex items-center justify-between w-full px-4 py-2 text-black bg-white border-b'
        style={{ height: "44px" }}>
        <button className='appearance-none'>
          <svg aria-label='New Story' fill='#262626' height='24' viewBox='0 0 48 48' width='24'>
            <path
              clipRule='evenodd'
              d='M38.5 46h-29c-5 0-9-4-9-9V17c0-5 4-9 9-9h1.1c1.1 0 2.2-.6 2.7-1.7l.5-1c1-2 3.1-3.3 5.4-3.3h9.6c2.3 0 4.4 1.3 5.4 3.3l.5 1c.5 1 1.5 1.7 2.7 1.7h1.1c5 0 9 4 9 9v20c0 5-4 9-9 9zm6-29c0-3.3-2.7-6-6-6h-1.1C35.1 11 33 9.7 32 7.7l-.5-1C31 5.6 29.9 5 28.8 5h-9.6c-1.1 0-2.2.6-2.7 1.7l-.5 1c-1 2-3.1 3.3-5.4 3.3H9.5c-3.3 0-6 2.7-6 6v20c0 3.3 2.7 6 6 6h29c3.3 0 6-2.7 6-6V17zM24 38c-6.4 0-11.5-5.1-11.5-11.5S17.6 15 24 15s11.5 5.1 11.5 11.5S30.4 38 24 38zm0-20c-4.7 0-8.5 3.8-8.5 8.5S19.3 35 24 35s8.5-3.8 8.5-8.5S28.7 18 24 18z'
              fillRule='evenodd'></path>
          </svg>
        </button>

        <h1 className='flex items-center justify-center flex-1'>
          <img src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' />
        </h1>

        <button>
          <svg aria-label='Direct' fill='#262626' height='24' viewBox='0 0 48 48' width='24'>
            <path d='M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z'></path>
          </svg>
        </button>
      </header>

      <main className='flex-1 pb-16'>
        <Component {...pageProps} />
      </main>

      <footer className='fixed inset-x-0 bottom-0 flex items-center justify-between px-4 py-2 bg-white border-t'>
        <Link href='/'>
          {({ isActive }) => (isActive ? <HomeIcon className='w-6 h-6' /> : <HomeEmptyIcon className='w-6 h-6' />)}
        </Link>

        <Link href='/explore'>
          {({ isActive }) =>
            isActive ? <ExploreIcon className='w-6 h-6' /> : <ExploreEmptyIcon className='w-6 h-6' />
          }
        </Link>

        <Link href='/add'>
          {({ isActive }) => (isActive ? <AddIcon className='w-6 h-6' /> : <AddEmptyIcon className='w-6 h-6' />)}
        </Link>

        <Link href='/notifications'>
          {({ isActive }) =>
            isActive ? <NotificationIcon className='w-6 h-6' /> : <NotificationEmptyIcon className='w-6 h-6' />
          }
        </Link>

        <Link href='/profile'>
          {({ isActive }) =>
            isActive ? (
              <img
                className='object-cover w-8 h-8 border-2 border-red-600 rounded-full'
                src='https://scontent-syd2-1.cdninstagram.com/v/t51.2885-19/s150x150/52724413_577947626023481_8652828959211257856_n.jpg?_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_ohc=z-BzLF6REwwAX9O_wfD&oh=d3d9714f417b038c57c383736c5ea7e9&oe=5F49D0C4'
              />
            ) : (
              <img
                className='object-cover w-8 h-8 border-2 border-transparent rounded-full'
                src='https://scontent-syd2-1.cdninstagram.com/v/t51.2885-19/s150x150/52724413_577947626023481_8652828959211257856_n.jpg?_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_ohc=z-BzLF6REwwAX9O_wfD&oh=d3d9714f417b038c57c383736c5ea7e9&oe=5F49D0C4'
              />
            )
          }
        </Link>
      </footer>
    </div>
  );
}

function HomeIcon({ className }) {
  return (
    <svg className={`${className}`} aria-label='Home' fill='#262626' height='24' viewBox='0 0 48 48' width='24'>
      <path d='M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z'></path>
    </svg>
  );
}

function HomeEmptyIcon({ className }) {
  return (
    <svg
      className={`fill-current ${className}`}
      aria-label='Home'
      fill='#262626'
      height='24'
      viewBox='0 0 48 48'
      width='24'>
      <path d='M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z'></path>
    </svg>
  );
}

function ExploreIcon({ className }) {
  return null;
}

function ExploreEmptyIcon({ className }) {
  return (
    <svg
      className={`fill-current ${className}`}
      aria-label='Search &amp; Explore'
      fill='#262626'
      height='24'
      viewBox='0 0 48 48'
      width='24'>
      <path d='M20 40C9 40 0 31 0 20S9 0 20 0s20 9 20 20-9 20-20 20zm0-37C10.6 3 3 10.6 3 20s7.6 17 17 17 17-7.6 17-17S29.4 3 20 3z'></path>
      <path d='M46.6 48.1c-.4 0-.8-.1-1.1-.4L32 34.2c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l13.5 13.5c.6.6.6 1.5 0 2.1-.2.3-.6.4-1 .4z'></path>
    </svg>
  );
}

function AddIcon({ className }) {
  return null;
}

function AddEmptyIcon({ className }) {
  return (
    <svg
      className={`fill-current ${className}`}
      aria-label='New Post'
      fill='#262626'
      height='24'
      viewBox='0 0 48 48'
      width='24'>
      <path d='M31.8 48H16.2c-6.6 0-9.6-1.6-12.1-4C1.6 41.4 0 38.4 0 31.8V16.2C0 9.6 1.6 6.6 4 4.1 6.6 1.6 9.6 0 16.2 0h15.6c6.6 0 9.6 1.6 12.1 4C46.4 6.6 48 9.6 48 16.2v15.6c0 6.6-1.6 9.6-4 12.1-2.6 2.5-5.6 4.1-12.2 4.1zM16.2 3C10 3 7.8 4.6 6.1 6.2 4.6 7.8 3 10 3 16.2v15.6c0 6.2 1.6 8.4 3.2 10.1 1.6 1.6 3.8 3.1 10 3.1h15.6c6.2 0 8.4-1.6 10.1-3.2 1.6-1.6 3.1-3.8 3.1-10V16.2c0-6.2-1.6-8.4-3.2-10.1C40.2 4.6 38 3 31.8 3H16.2z'></path>
      <path d='M36.3 25.5H11.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h24.6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z'></path>
      <path d='M24 37.8c-.8 0-1.5-.7-1.5-1.5V11.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v24.6c0 .8-.7 1.5-1.5 1.5z'></path>
    </svg>
  );
}

function NotificationIcon({ className }) {
  return null;
}

function NotificationEmptyIcon({ className }) {
  return (
    <svg
      className={`fill-current ${className}`}
      aria-label='Activity'
      fill='#262626'
      height='24'
      viewBox='0 0 48 48'
      width='24'>
      <path d='M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z'></path>
    </svg>
  );
}
