// /* This example requires Tailwind CSS v2.0+ */
// import React, { useState, useEffect, Fragment } from 'react';
// import { Popover, Transition } from '@headlessui/react';
// import {
//   BookmarkAltIcon,
//   CalendarIcon,
//   ChartBarIcon,
//   CursorClickIcon,
//   MenuIcon,
//   PhoneIcon,
//   PlayIcon,
//   RefreshIcon,
//   ShieldCheckIcon,
//   SupportIcon,
//   ViewGridIcon,
//   XIcon,
// } from '@heroicons/react/outline';
// import { ChevronDownIcon } from '@heroicons/react/solid';

// const solutions = [
//   {
//     name: 'Analytics',
//     description:
//       'Get a better understanding of where your traffic is coming from.',
//     href: '#',
//     icon: ChartBarIcon,
//   },
//   {
//     name: 'Engagement',
//     description: 'Speak directly to your customers in a more meaningful way.',
//     href: '#',
//     icon: CursorClickIcon,
//   },
//   {
//     name: 'Security',
//     description: "Your customers' data will be safe and secure.",
//     href: '#',
//     icon: ShieldCheckIcon,
//   },
//   {
//     name: 'Integrations',
//     description: "Connect with third-party tools that you're already using.",
//     href: '#',
//     icon: ViewGridIcon,
//   },
//   {
//     name: 'Automations',
//     description:
//       'Build strategic funnels that will drive your customers to convert',
//     href: '#',
//     icon: RefreshIcon,
//   },
// ];
// const callsToAction = [
//   { name: 'Watch Demo', href: '#', icon: PlayIcon },
//   { name: 'Contact Sales', href: '#', icon: PhoneIcon },
// ];
// const resources = [
//   {
//     name: 'Help Center',
//     description:
//       'Get all of your questions answered in our forums or contact support.',
//     href: '#',
//     icon: SupportIcon,
//   },
//   {
//     name: 'Guides',
//     description:
//       'Learn how to maximize our platform to get the most out of it.',
//     href: '#',
//     icon: BookmarkAltIcon,
//   },
//   {
//     name: 'Events',
//     description:
//       'See what meet-ups and other events we might be planning near you.',
//     href: '#',
//     icon: CalendarIcon,
//   },
//   {
//     name: 'Security',
//     description: 'Understand how we take your privacy seriously.',
//     href: '#',
//     icon: ShieldCheckIcon,
//   },
// ];
// const recentPosts = [
//   { id: 1, name: 'Boost your conversion rate', href: '#' },
//   {
//     id: 2,
//     name: 'How to use search engine optimization to drive traffic to your site',
//     href: '#',
//   },
//   { id: 3, name: 'Improve your customer experience', href: '#' },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function Header() {
//   const [offset, setOffset] = useState(0);
//   useEffect(() => {
//     const onScroll = () => setOffset(window.pageYOffset);
//     // clean up code offset 80
//     window.removeEventListener('scroll', onScroll);
//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);
//   return (
//     <Popover className={`${offset >= 80 ? 'static' : 'relative'} z-50 w-full `}>
//       <div className="mx-auto max-w-7xl px-4 sm:px-6">
//         <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
//           <div className="flex justify-start lg:w-0 lg:flex-1">
//             <a href="#">
//               <span className="sr-only">Workflow</span>
//               <img className="h-8 w-auto sm:h-10" src="/logo.webp" alt="" />
//             </a>
//           </div>
//           <div className="-my-2 -mr-2 md:hidden">
//             <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//               <span className="sr-only">Open menu</span>
//               <MenuIcon className="h-6 w-6" aria-hidden="true" />
//             </Popover.Button>
//           </div>
//           <Popover.Group as="nav" className="hidden space-x-10 md:flex">
//             <Popover className="relative">
//               {({ open }) => (
//                 <>
//                   <Popover.Button
//                     className={classNames(
//                       open ? 'text-gray-900' : 'text-gray-500',
//                       'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
//                     )}
//                   >
//                     <span>Solutions</span>
//                     <ChevronDownIcon
//                       className={classNames(
//                         open ? 'text-gray-600' : 'text-gray-400',
//                         'ml-2 h-5 w-5 group-hover:text-gray-500'
//                       )}
//                       aria-hidden="true"
//                     />
//                   </Popover.Button>

//                   <Transition
//                     as={Fragment}
//                     enter="transition ease-out duration-200"
//                     enterFrom="opacity-0 translate-y-1"
//                     enterTo="opacity-100 translate-y-0"
//                     leave="transition ease-in duration-150"
//                     leaveFrom="opacity-100 translate-y-0"
//                     leaveTo="opacity-0 translate-y-1"
//                   >
//                     <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
//                       <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
//                         <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
//                           {solutions.map((item) => (
//                             <a
//                               key={item.name}
//                               href={item.href}
//                               className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
//                             >
//                               <item.icon
//                                 className="h-6 w-6 flex-shrink-0 text-indigo-600"
//                                 aria-hidden="true"
//                               />
//                               <div className="ml-4">
//                                 <p className="text-base font-medium text-gray-900">
//                                   {item.name}
//                                 </p>
//                                 <p className="mt-1 text-sm text-gray-500">
//                                   {item.description}
//                                 </p>
//                               </div>
//                             </a>
//                           ))}
//                         </div>
//                         <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
//                           {callsToAction.map((item) => (
//                             <div key={item.name} className="flow-root">
//                               <a
//                                 href={item.href}
//                                 className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
//                               >
//                                 <item.icon
//                                   className="h-6 w-6 flex-shrink-0 text-gray-400"
//                                   aria-hidden="true"
//                                 />
//                                 <span className="ml-3">{item.name}</span>
//                               </a>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </Popover.Panel>
//                   </Transition>
//                 </>
//               )}
//             </Popover>

//             <a
//               href="#"
//               className="text-base font-medium text-gray-500 hover:text-gray-900"
//             >
//               Pricing
//             </a>
//             <a
//               href="#"
//               className="text-base font-medium text-gray-500 hover:text-gray-900"
//             >
//               Docs
//             </a>

//             <Popover className="relative">
//               {({ open }) => (
//                 <>
//                   <Popover.Button
//                     className={classNames(
//                       open ? 'text-gray-900' : 'text-gray-500',
//                       'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
//                     )}
//                   >
//                     <span>More</span>
//                     <ChevronDownIcon
//                       className={classNames(
//                         open ? 'text-gray-600' : 'text-gray-400',
//                         'ml-2 h-5 w-5 group-hover:text-gray-500'
//                       )}
//                       aria-hidden="true"
//                     />
//                   </Popover.Button>

//                   <Transition
//                     as={Fragment}
//                     enter="transition ease-out duration-200"
//                     enterFrom="opacity-0 translate-y-1"
//                     enterTo="opacity-100 translate-y-0"
//                     leave="transition ease-in duration-150"
//                     leaveFrom="opacity-100 translate-y-0"
//                     leaveTo="opacity-0 translate-y-1"
//                   >
//                     <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
//                       <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
//                         <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
//                           {resources.map((item) => (
//                             <a
//                               key={item.name}
//                               href={item.href}
//                               className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
//                             >
//                               <item.icon
//                                 className="h-6 w-6 flex-shrink-0 text-indigo-600"
//                                 aria-hidden="true"
//                               />
//                               <div className="ml-4">
//                                 <p className="text-base font-medium text-gray-900">
//                                   {item.name}
//                                 </p>
//                                 <p className="mt-1 text-sm text-gray-500">
//                                   {item.description}
//                                 </p>
//                               </div>
//                             </a>
//                           ))}
//                         </div>
//                         <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
//                           <div>
//                             <h3 className="text-sm font-medium uppercase tracking-wide text-gray-500">
//                               Recent Posts
//                             </h3>
//                             <ul role="list" className="mt-4 space-y-4">
//                               {recentPosts.map((post) => (
//                                 <li
//                                   key={post.id}
//                                   className="truncate text-base"
//                                 >
//                                   <a
//                                     href={post.href}
//                                     className="font-medium text-gray-900 hover:text-gray-700"
//                                   >
//                                     {post.name}
//                                   </a>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                           <div className="mt-5 text-sm">
//                             <a
//                               href="#"
//                               className="font-medium text-indigo-600 hover:text-indigo-500"
//                             >
//                               {' '}
//                               View all posts{' '}
//                               <span aria-hidden="true">&rarr;</span>
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </Popover.Panel>
//                   </Transition>
//                 </>
//               )}
//             </Popover>
//           </Popover.Group>
//           <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
//             <a
//               href="#"
//               className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
//             >
//               Sign in
//             </a>
//             <a
//               href="#"
//               className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
//             >
//               Sign up
//             </a>
//           </div>
//         </div>
//       </div>

//       <Transition
//         as={Fragment}
//         enter="duration-200 ease-out"
//         enterFrom="opacity-0 scale-95"
//         enterTo="opacity-100 scale-100"
//         leave="duration-100 ease-in"
//         leaveFrom="opacity-100 scale-100"
//         leaveTo="opacity-0 scale-95"
//       >
//         <Popover.Panel
//           focus
//           className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
//         >
//           <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
//             <div className="px-5 pt-5 pb-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <img
//                     className="h-8 w-auto"
//                     src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
//                     alt="Workflow"
//                   />
//                 </div>
//                 <div className="-mr-2">
//                   <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//                     <span className="sr-only">Close menu</span>
//                     <XIcon className="h-6 w-6" aria-hidden="true" />
//                   </Popover.Button>
//                 </div>
//               </div>
//               <div className="mt-6">
//                 <nav className="grid gap-y-8">
//                   {solutions.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
//                     >
//                       <item.icon
//                         className="h-6 w-6 flex-shrink-0 text-indigo-600"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-3 text-base font-medium text-gray-900">
//                         {item.name}
//                       </span>
//                     </a>
//                   ))}
//                 </nav>
//               </div>
//             </div>
//             <div className="space-y-6 py-6 px-5">
//               <div className="grid grid-cols-2 gap-y-4 gap-x-8">
//                 <a
//                   href="#"
//                   className="text-base font-medium text-gray-900 hover:text-gray-700"
//                 >
//                   Pricing
//                 </a>

//                 <a
//                   href="#"
//                   className="text-base font-medium text-gray-900 hover:text-gray-700"
//                 >
//                   Docs
//                 </a>
//                 {resources.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className="text-base font-medium text-gray-900 hover:text-gray-700"
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//               <div>
//                 <a
//                   href="#"
//                   className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
//                 >
//                   Sign up
//                 </a>
//                 <p className="mt-6 text-center text-base font-medium text-gray-500">
//                   Existing customer?{' '}
//                   <a href="#" className="text-indigo-600 hover:text-indigo-500">
//                     Sign in
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </Popover.Panel>
//       </Transition>
//     </Popover>
//   );
// }

import React, { useState } from 'react';

export default function ResponsiveNavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-100">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && <MobileMenu>{navLinks}</MobileMenu>}
    </div>
  );
}

const pages = ['About', 'Contact-us', 'Login'];
const navLinks = pages.map((page) => (
  <a
    key={page}
    className="font-semibold text-gray-800 no-underline hover:text-gray-600"
    href={`#${page}`}
  >
    {page}
  </a>
));

const Navbar = ({ menuOpen, setMenuOpen }) => (
  <div className="flex items-center justify-between p-4">
    <div className="flex items-center">
      <FireSvg />
      <a
        href="#home"
        className="text-xl font-bold text-gray-800 no-underline hover:text-gray-600"
      >
        Bored.io
      </a>
    </div>
    <nav className="hidden space-x-6 md:block">{navLinks}</nav>
    <button
      type="button"
      aria-label="Toggle mobile menu"
      onClick={() => setMenuOpen(!menuOpen)}
      className="rounded focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50 md:hidden"
    >
      <MenuAlt4Svg menuOpen={menuOpen} />
    </button>
  </div>
);

const MobileMenu = ({ children }) => (
  <nav className="flex flex-col space-y-3 p-4 md:hidden">{children}</nav>
);

const FireSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
      clipRule="evenodd"
    />
  </svg>
);

const MenuAlt4Svg = ({ menuOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-8 w-8 transition duration-500 ease-in-out ${
      menuOpen ? 'rotate-[450deg] transform' : ''
    }`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z M3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clipRule="evenodd"
    />
  </svg>
);
