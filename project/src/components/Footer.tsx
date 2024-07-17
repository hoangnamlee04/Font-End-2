const Footer = () => {
  return (
    <footer className='bg-white'>
      <hr />
      <div className='mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <div>
            <div className='text-teal-600'>
              <img
                className='w-[70px]'
                src='data:image/png;base64,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'
                alt=''
              />
            </div>

            <p className='mt-4 max-w-xs text-gray-500'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam molestias.
            </p>

            <ul className='mt-8 flex gap-6'>
              <li>
                <a href='#' rel='noreferrer' target='_blank' className='text-gray-700 transition hover:opacity-75'>
                  <span className='sr-only'>Facebook</span>

                  <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                    <path
                      fill-rule='evenodd'
                      d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a href='#' rel='noreferrer' target='_blank' className='text-gray-700 transition hover:opacity-75'>
                  <span className='sr-only'>Instagram</span>

                  <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                    <path
                      fill-rule='evenodd'
                      d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a href='#' rel='noreferrer' target='_blank' className='text-gray-700 transition hover:opacity-75'>
                  <span className='sr-only'>Twitter</span>

                  <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                    <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                  </svg>
                </a>
              </li>

              <li>
                <a href='#' rel='noreferrer' target='_blank' className='text-gray-700 transition hover:opacity-75'>
                  <span className='sr-only'>GitHub</span>

                  <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                    <path
                      fill-rule='evenodd'
                      d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a href='#' rel='noreferrer' target='_blank' className='text-gray-700 transition hover:opacity-75'>
                  <span className='sr-only'>Dribbble</span>

                  <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                    <path
                      fill-rule='evenodd'
                      d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4'>
            <div>
              <p className='font-medium text-gray-900'>Services</p>

              <ul className='mt-6 space-y-4 text-sm'>
                <li>
                  <a href='#' className='text-gray-700 transition hover:opacity-75'>
                    {' '}
                    1on1 Coaching{' '}
                  </a>
                </li>

                <li>
                  <a href='#' className='text-gray-700 transition hover:opacity-75'>
                    {' '}
                    Company Review{' '}
                  </a>
                </li>

                <li>
                  <a href='#' className='text-gray-700 transition hover:opacity-75'>
                    {' '}
                    Accounts Review{' '}
                  </a>
                </li>

                <li>
                  <a href='#' className='text-gray-700 transition hover:opacity-75'>
                    {' '}
                    HR Consulting{' '}
                  </a>
                </li>

                <li>
                  <a href='#' className='text-gray-700 transition hover:opacity-75'>
                    {' '}
                    SEO Optimisation{' '}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className='font-medium text-gray-900'>Company</p>

              <ul className='mt-6 space-y-4 text-sm'>
                <li>
                  <a href='#' className='text-gray-700 transition hover:opacity-75'>
                    {' '}
                    About{' '}
                  </a>
                </li>

                <li>
                  <a href='#' className='text-gray-700 transition hover:opacity-75'>
                    {' '}
                    Meet the Team{' '}
                  </a>
                </li>

                <li>
                  <a href='#' className='text-gray-700 transition hover:opacity-75'>
                    {' '}
                    Accounts Review{' '}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className='font-medium text-gray-900'>Helpful Links</p>

              <ul className='mt-6 space-y-4 text-sm'>
                <li>
                  <a href='#' className='text-gray-700 transition hover:opacity-75'>
                    {' '}
                    Contact{' '}
                  </a>
                </li>

                <li>
                  <a href='#' className='text-gray-700 transition hover:opacity-75'>
                    {' '}
                    FAQs{' '}
                  </a>
                </li>

                <li>
                  <a href='#' className='text-gray-700 transition hover:opacity-75'>
                    {' '}
                    Live Chat{' '}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className='font-medium text-gray-900'>Legal</p>

              <ul className='mt-6 space-y-4 text-sm'>
                <li>
                  <a href='#' className='text-gray-700 transition hover:opacity-75'>
                    {' '}
                    Accessibility{' '}
                  </a>
                </li>

                <li>
                  <a href='#' className='text-gray-700 transition hover:opacity-75'>
                    {' '}
                    Returns Policy{' '}
                  </a>
                </li>

                <li>
                  <a href='#' className='text-gray-700 transition hover:opacity-75'>
                    {' '}
                    Refund Policy{' '}
                  </a>
                </li>

                <li>
                  <a href='#' className='text-gray-700 transition hover:opacity-75'>
                    {' '}
                    Hiring Statistics{' '}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className='text-xs text-gray-500'>&copy; 2022. Company Name. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
