import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { images } from './assets/image';
import { AdditionalIcon, ConnectIcon, HappyCustomersIcon, InboxIcon, InstantIcon, LoveConnectionIcon, ManageIcon, MinimizeIcon } from './assets/icons';

const faqItems = [
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can change your plan at any time."
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel your subscription at any time with no penalties."
  },
  {
    question: "Can other info be added to an invoice?",
    answer: "Yes, you can add additional information to your invoices."
  },
  {
    question: "How does billing work?",
    answer: "We offer flexible billing options to suit your needs."
  },
  {
    question: "How do I change my account email?",
    answer: "You can change your account email through your account settings."
  }
];

function App() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <img
                    src={images.logo}
                    alt='logo'
                    className='w-10 h-10'
                  />
                  <span className="text-xl font-semibold">Untitled UI</span>
                </div>
                <nav className="hidden md:flex ml-10 space-x-8">
                  <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                  <Link to="/products" className="text-gray-600 hover:text-gray-900">Products</Link>
                  <Link to="/resources" className="text-gray-600 hover:text-gray-900">Resources</Link>
                  <Link to="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
                </nav>
              </div>
              <div className="flex items-center">
                <img
                  src={images.olivia}
                  alt="Profile"
                  className="w-10 h-10 rounded-full hidden md:block"
                />
                <div className='flex items-center md:hidden'>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 20H29M11 14H29M11 26H29" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="pt-16">
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <div className="inline-flex items-center rounded-full bg-purple-50 px-3 py-1 mb-8">
              <span className="bg-white border border-purple-300 text-purple-500 text-xs font-medium px-2 py-0.5 rounded-full mr-2">
                New feature
              </span>
              <span className="text-sm text-purple-500 flex items-center">
                Check out the team dashboard
                <span className='ms-1'>
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.83334 8.00016H13.1667M13.1667 8.00016L8.5 3.3335M13.1667 8.00016L8.5 12.6668" stroke="#9E77ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Beautiful analytics to grow smarter
            </h1>

            <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10">
              Powerful, self-serve product and growth analytics to help you convert, engage,
              and retain more users. Trusted by over 4,000 startups.
            </p>

            <div className="flex justify-center gap-4">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <svg className="mr-2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Demo
              </button>
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-purple-600 hover:bg-purple-700">
                Sign up
              </button>
            </div>

            <div className="mt-16 overflow-hidden">
              <img
                src={images.demo}
                alt="Analytics Dashboard"
                className="w-full"
              />
            </div>
          </section>

          <section className="border-b border-slate-100 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <p className="text-center text-sm text-gray-600 mb-8">
                Join 4,000+ companies already growing
              </p>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-6 items-center justify-items-center">
                {[images.boltshift, images.lightbox, images.featherdev, images.spherule, images.globalbank, images.nietzsche]
                  .map((value, index) => (
                    <div key={index} className='flex items-center justify-center'>
                      <img src={value} />
                    </div>
                  ))}
              </div>
            </div>
          </section>

          <section className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-base font-semibold text-purple-600 mb-4">Features</h2>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Analytics that feels like it's from the future
                </h3>
                <p className="max-w-2xl mx-auto text-lg text-gray-600">
                  Powerful, self-serve product and growth analytics to help you convert, engage,
                  and retain more users. Trusted by over 4,000 startups.
                </p>
              </div>

              <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-lg p-3 border bg-slate-50">
                      <InboxIcon />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Share team inboxes</h4>
                  <p className="text-gray-600">
                    Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page
                    and in the loop.
                  </p>
                </div>



                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-lg p-3 border bg-slate-50">
                      <InstantIcon />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Deliver instant answers</h4>
                  <p className="text-gray-600">
                    An all-in-one customer service platform that helps you balance everything your customers need to be happy.
                  </p>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-lg p-3 border bg-slate-50">
                      <ManageIcon />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Manage your team with reports</h4>
                  <p className="text-gray-600">
                    Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
                  </p>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-lg p-3 border bg-slate-50">
                      <HappyCustomersIcon />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Connect with customers</h4>
                  <p className="text-gray-600">
                    Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.
                  </p>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-lg p-3 border bg-slate-50">
                      <ConnectIcon />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Connect the tools you already use</h4>
                  <p className="text-gray-600">
                    Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.
                  </p>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-lg p-3 border bg-slate-50">
                      <LoveConnectionIcon />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Our people make the difference</h4>
                  <p className="text-gray-600">
                    We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex justify-center items-center mb-8">
                <img
                  src={images.sisyphus}
                  alt="Sisyphus Logo"
                  className="h-10"
                />
                <h2 className='ms-2 font-medium text-xl'>Sisyphus</h2>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-4xl mx-auto mb-8">
                We've been using Untitled to kick start every new project and can't imagine working without it.
              </h2>
              <div className="flex flex-col items-center justify-center">
                <img
                  src={images.candice}
                  alt="Candice Wu"
                  className="w-16 h-16 rounded-full mb-4"
                />
                <div className="ml-3 text-left flex flex-col items-center justify-center">
                  <div className="text-base font-semibold text-gray-900">Candice Wu</div>
                  <div className="text-sm text-gray-600">Product Manager, Sisyphus</div>
                </div>
              </div>
            </div>
          </section>

          {/* Cutting-edge Features Section */}
          <section className="bg-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-block text-sm font-medium text-purple-600 mb-4 px-4 py-1 border rounded-full border-purple-200" style={{ backgroundColor: '#F9F5FF' }}>Features</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Cutting-edge features for advanced analytics
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
                Powerful, self-serve product and growth analytics to help you convert, engage,
                and retain more users. Trusted by over 4,000 startups.
              </p>

              <div className="relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 -translate-x-full hidden">
                  <div className="relative w-[280px]">
                    <img
                      src={images.analytics}
                      alt="Mobile Dashboard"
                    />
                  </div>
                </div>
                <div className="relative mx-auto max-w-4xl">
                  <img
                    src={images.analytics}
                    alt="Desktop Dashboard"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-lg p-3 border bg-slate-50">
                      <InboxIcon />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Share team inboxes</h4>
                  <p className="text-gray-600">
                    Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page
                    and in the loop.
                  </p>
                  <Link
                    href="#"
                    className="text-purple-600 font-medium inline-flex items-center group-hover:text-purple-700 mt-4"
                  >
                    Learn more
                    <svg className='ml-1' width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.16669 10H15.8334M15.8334 10L10 4.16669M15.8334 10L10 15.8334" stroke="#6941C6" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                  </Link>
                </div>



                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-lg p-3 border bg-slate-50">
                      <InstantIcon />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Deliver instant answers</h4>
                  <p className="text-gray-600">
                    An all-in-one customer service platform that helps you balance everything your customers need to be happy.
                  </p>
                  <Link
                    href="#"
                    className="text-purple-600 font-medium inline-flex items-center group-hover:text-purple-700 mt-4"
                  >
                    Learn more
                    <svg className='ml-1' width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.16669 10H15.8334M15.8334 10L10 4.16669M15.8334 10L10 15.8334" stroke="#6941C6" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </Link>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-lg p-3 border bg-slate-50">
                      <ManageIcon />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Manage your team with reports</h4>
                  <p className="text-gray-600">
                    Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
                  </p>
                  <Link
                    href="#"
                    className="text-purple-600 font-medium inline-flex items-center group-hover:text-purple-700 mt-4"
                  >
                    Learn more
                    <svg className='ml-1' width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.16669 10H15.8334M15.8334 10L10 4.16669M15.8334 10L10 15.8334" stroke="#6941C6" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
                <p className="text-lg text-gray-600">
                  Everything you need to know about the product and billing.
                </p>
              </div>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 focus:outline-none"
                      aria-expanded={openFAQ === index}
                    >
                      <span className="font-medium text-gray-900 text-left">{item.question}</span>
                      {openFAQ === index ?
                        <MinimizeIcon />
                        :
                        <AdditionalIcon />}
                    </button>
                    {openFAQ === index && (
                      <div className="px-4 pb-4">
                        <p className="text-gray-600">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-gray-50">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex justify-center items-end mb-8">
                <div className="flex -space-x-2 items-end">
                  <img
                    src={images.alec}
                    alt="Team member"
                    className="relative z-30 inline-block w-12 h-12 rounded-full ring-1 ring-white"
                  />
                  <img
                    src={images.olivia}
                    alt="Team member"
                    className="relative z-50 inline-block w-14 h-14 rounded-full ring-1 ring-white"
                  />
                  <img
                    src={images.lori}
                    alt="Team member"
                    className="relative z-10 inline-block w-12 h-12 rounded-full ring-1 ring-white"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
              <p className="text-gray-600 mb-8">
                Can't find the answer you're looking for? Please chat to our friendly team.
              </p>
              <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                Get in touch
              </button>
            </div>
          </section>

          {/* Blog Section */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center mb-12">
                <div>
                  <div className="text-purple-600 font-medium mb-2">Our blog</div>
                  <h2 className="text-3xl font-bold text-gray-900">Latest blog posts</h2>
                  <p className="mt-2 text-lg text-gray-600">
                    Tool and strategies modern teams need to help their companies grow.
                  </p>
                </div>
                <Link
                  to="/blog"
                  className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700"
                >
                  View all posts
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* UX Review Post */}
                <article className="group">
                  <Link to="/blog/ux-review" className="block">
                    <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                      <img
                        src={images.uxpreview}
                        alt="UX Review"
                        className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="mb-3">
                      <span className="text-purple-600 text-sm font-medium">Design</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                        UX review presentations
                      </h3>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>

                    <p className="text-gray-600 mb-4">
                      How do you create compelling presentations that wow your colleagues and impress your managers?
                    </p>
                    <div className="flex items-center">
                      <img
                        src={images.olivia}
                        alt="Olivia Rhye"
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">Olivia Rhye</p>
                        <p className="text-sm text-gray-500">20 Jan 2024</p>
                      </div>
                    </div>
                  </Link>
                </article>

                {/* Linear Migration Post */}
                <article className="group">
                  <Link to="/blog/linear-migration" className="block">
                    <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                      <img
                        src={images.migrate}
                        alt="Linear Migration"
                        className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="mb-3">
                      <span className="text-purple-600 text-sm font-medium">Product</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                        Migrating to Linear 101
                      </h3>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.
                    </p>
                    <div className="flex items-center">
                      <img
                        src={images.phoenix}
                        alt="Phoenix Baker"
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">Phoenix Baker</p>
                        <p className="text-sm text-gray-500">19 Jan 2024</p>
                      </div>
                    </div>
                  </Link>
                </article>

                {/* API Stack Post */}
                <article className="group">
                  <Link to="/blog/api-stack" className="block">
                    <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                      <img
                        src={images.api}
                        alt="API Stack"
                        className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="mb-3">
                      <span className="text-purple-600 text-sm font-medium">Software Engineering</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                        Building your API stack
                      </h3>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                    <p className="text-gray-600 mb-4">
                      The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.
                    </p>
                    <div className="flex items-center">
                      <img
                        src={images.lana}
                        alt="Lana Steiner"
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">Lana Steiner</p>
                        <p className="text-sm text-gray-500">18 Jan 2024</p>
                      </div>
                    </div>
                  </Link>
                </article>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Start your free trial</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join over 4,000+ startups already growing with Untitled.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  to="/learn-more"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  Learn more
                </Link>
                <Link
                  to="/get-started"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
                >
                  Get started
                </Link>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-2 md:grid-cols-6 gap-8">

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-4">Product</h3>
                  <ul className="space-y-3">
                    <li><Link to="/overview" className="text-sm text-gray-600 hover:text-gray-900">Overview</Link></li>
                    <li><Link to="/features" className="text-sm text-gray-600 hover:text-gray-900">Features</Link></li>
                    <li>
                      <Link to="/solutions" className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center">
                        Solutions
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-green-400 border border-green-200" style={{ backgroundColor: '#ECFDF3' }}>
                          New
                        </span>
                      </Link>
                    </li>
                    <li><Link to="/tutorials" className="text-sm text-gray-600 hover:text-gray-900">Tutorials</Link></li>
                    <li><Link to="/pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</Link></li>
                    <li><Link to="/releases" className="text-sm text-gray-600 hover:text-gray-900">Releases</Link></li>
                  </ul>
                </div>


                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-4">Company</h3>
                  <ul className="space-y-3">
                    <li><Link to="/about" className="text-sm text-gray-600 hover:text-gray-900">About us</Link></li>
                    <li><Link to="/careers" className="text-sm text-gray-600 hover:text-gray-900">Careers</Link></li>
                    <li><Link to="/press" className="text-sm text-gray-600 hover:text-gray-900">Press</Link></li>
                    <li><Link to="/news" className="text-sm text-gray-600 hover:text-gray-900">News</Link></li>
                    <li><Link to="/media-kit" className="text-sm text-gray-600 hover:text-gray-900">Media kit</Link></li>
                    <li><Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-4">Resources</h3>
                  <ul className="space-y-3">
                    <li><Link to="/blog" className="text-sm text-gray-600 hover:text-gray-900">Blog</Link></li>
                    <li><Link to="/newsletter" className="text-sm text-gray-600 hover:text-gray-900">Newsletter</Link></li>
                    <li><Link to="/events" className="text-sm text-gray-600 hover:text-gray-900">Events</Link></li>
                    <li><Link to="/help-center" className="text-sm text-gray-600 hover:text-gray-900">Help centre</Link></li>
                    <li><Link to="/tutorials" className="text-sm text-gray-600 hover:text-gray-900">Tutorials</Link></li>
                    <li><Link to="/support" className="text-sm text-gray-600 hover:text-gray-900">Support</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-4">Use Cases</h3>
                  <ul className="space-y-3">
                    <li><Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900">Startups</Link></li>
                    <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-900">Enterprise</Link></li>
                    <li><Link to="/cookies" className="text-sm text-gray-600 hover:text-gray-900">Government</Link></li>
                    <li><Link to="/licenses" className="text-sm text-gray-600 hover:text-gray-900">SaaS centre</Link></li>
                    <li><Link to="/settings" className="text-sm text-gray-600 hover:text-gray-900">Marketplaces</Link></li>
                    <li><Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900">Ecommerce</Link></li>
                  </ul>
                </div>


                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-4">Social</h3>
                  <ul className="space-y-3">
                    <li><Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900">Twitter</Link></li>
                    <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-900">LinkedIn</Link></li>
                    <li><Link to="/cookies" className="text-sm text-gray-600 hover:text-gray-900">Facebook</Link></li>
                    <li><Link to="/licenses" className="text-sm text-gray-600 hover:text-gray-900">GitHub</Link></li>
                    <li><Link to="/settings" className="text-sm text-gray-600 hover:text-gray-900">AngelList</Link></li>
                    <li><Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900">Dribble</Link></li>
                  </ul>
                </div>


                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-4">Legal</h3>
                  <ul className="space-y-3">
                    <li><Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900">Terms</Link></li>
                    <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-900">Privacy</Link></li>
                    <li><Link to="/cookies" className="text-sm text-gray-600 hover:text-gray-900">Cookies</Link></li>
                    <li><Link to="/licenses" className="text-sm text-gray-600 hover:text-gray-900">Licenses</Link></li>
                    <li><Link to="/settings" className="text-sm text-gray-600 hover:text-gray-900">Settings</Link></li>
                    <li><Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</Link></li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                  <div className="flex items-center gap-2">
                    <img
                      src={images.logo}
                      alt='logo'
                      className='w-10 h-10'
                    />
                    <span className="text-sm font-medium">Untitled UI</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    © 2077 Untitled UI. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </Router>
  );
}

export default App;


