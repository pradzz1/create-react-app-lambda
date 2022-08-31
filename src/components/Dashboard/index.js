/* This example requires Tailwind CSS v2.0+ */
import React ,{useEffect}from 'react'

 
const user = {
  name: 'Pradeep',
  email: 'pradzz.rawat6@gmail.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {

useEffect(() => {
    // Update the document title using the browser API
    const data = fetch("/.netlify/functions/" + "async-dadjoke")
      .then(response => response.json())
      
  console.log(data);
  });
  return (
      <div className="min-h-full">

                          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                              <div className="flex h-16 items-center justify-between">
                                  <div className="flex items-center">
                                      <div className="flex-shrink-0">
                                          <img
                                              className="h-8 w-8"
                                              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
                                              alt="Workflow" />
                                      </div>
                                      <div className="hidden md:block">
                                          <div className="ml-10 flex items-baseline space-x-4">
                                              {navigation.map((item) => (
                                                  <a
                                                      key={item.name}
                                                      href={item.href}
                                                      className={classNames(
                                                          item.current
                                                              ? 'bg-gray-900 text-white'
                                                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                          'px-3 py-2 rounded-md text-sm font-medium'
                                                      )}
                                                      aria-current={item.current ? 'page' : undefined}
                                                  >
                                                      {item.name}
                                                  </a>
                                              ))}
                                          </div>
                                      </div>
                                  </div>
                                  <div className="hidden md:block">
                                      <div className="ml-4 flex items-center md:ml-6">
                                          <button
                                              type="button"
                                              className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                          >
                                              <span className="sr-only">View notifications</span>
                                              <button>Bell</button>
                                          </button>

                                          {/* Profile dropdown */}
                                          <div>
                                              <span className="sr-only">Open user menu</span>
                                              <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />

                                          </div>



                                      </div>
                                  </div>
                                  <div className="-mr-2 flex md:hidden">
                                      {/* Mobile menu button */}
                                    
                                  </div>
                              </div>
                             
                                  <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                                    
                                  </div>
                                  <div className="border-t border-gray-700 pt-4 pb-3">
                                      <div className="flex items-center px-5">
                                          <div className="flex-shrink-0">
                                              <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                          </div>
                                          <div className="ml-3">
                                              <div className="text-base font-medium leading-none text-white">{user.name}</div>
                                              <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                                          </div>
                                          <button
                                              type="button"
                                              className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                          >
                                              <span className="sr-only">View notifications</span>
                                             <button>hi</button>
                                          </button>
                                      </div>
                                      <div className="mt-3 space-y-1 px-2">
                                          {userNavigation.map((item) => (
                                              
                                             <button>{item.name}</button>     
                                           
                                          ))}
                                      </div>
                                  </div>
                       
                     <header className="bg-white shadow">
                              <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                                  <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                              </div>
                          </header><main>
                              <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                                  {/* Replace with your content */}
                                  <div className="px-4 py-6 sm:px-0">
                                      <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
                                  </div>
                                  {/* /End replace */}
                              </div>
                          </main>
      </div>
    </div>
  )
}