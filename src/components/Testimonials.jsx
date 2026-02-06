import React from 'react'

const testimonials = [
  {
    name: 'Alice Johnson',
    role: "Sernior Developer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "This AI-powered tool has revolutionized the way I code. It's like having a personal coding assistant that helps me write cleaner and more efficient code.",
  },
  {
    name: 'Mark Smith',
    role: "Technical Lead",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "The automated code reviews have significantly improved our team's productivity. We catch bugs early and maintain high code quality effortlessly.",
  },
  {
    name: 'Sophia Lee',
    role: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "Our development cycles have become much shorter thanks to this tool. It streamlines the coding process and allows our team to focus on delivering value to our users.",
  },

]

function Testimonials() {
  return (
    <section
      id='testimonials'
      className='py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16'>

            {/* Left side Header */}
            <div className='lg:w-1/2 w-full text-center lg:text-left'>
              <h2 className='text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
                What developers are saying about us
              </h2>
              <p className='text-gray-400 text-base text-xl sm:text-lg max-w-2xl mx-auto'>
                Everything you need to build, test, and deploy applications with
                AI-powered development tools.
              </p>
            </div>

            {/* Right side testimonials */}
            <div className='lg:w-1/2 w-full'>
              <div className='space-y-6 sm:space-y-8'>
                {testimonials.map((testimonial, key) => (
                  <div 
                    key={key} 
                    className='bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl'>
                    <div className='flex items-start space-x-3 sm:space-x-4'>
                      <div className='flex-shrink-0'>
                        <div className='text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r 
                        from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                          "
                        </div>
                      </div>

                      <div className='flex-grow'>
                        <p className='text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4'>
                          {testimonial.content}
                        </p>
                        <div className='flex items-center space-x-2 sm:space-x-3'>
                          <img src={testimonial.image} alt={testimonial.name} 
                            className='w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover'/>
                            <div>
                              <h4 className='font-bold text-white text-sm sm:text-base'>
                                {testimonial.name}
                              </h4>
                              <p className='text-xs sm:text-sm text-gray-400'>
                                {testimonial.role}
                              </p>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Testimonials