import { motion } from 'framer-motion';
import { Users, LayoutDashboard, Zap, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Sign Up',
      description: 'Login via Google or Email OTP.',
      icon: Users,
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      number: 2,
      title: 'Add Details',
      description: 'Name, category, address, WhatsApp, gallery, and YouTube video.',
      icon: LayoutDashboard,
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      number: 3,
      title: 'Instant Website',
      description: 'We publish your site on a subdomain + subdirectory immediately.',
      icon: Zap,
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      number: 4,
      title: 'Share & Grow',
      description: 'Customers can call, WhatsApp, view photos, and find you easily.',
      icon: Rocket,
      gradient: 'from-blue-600 to-purple-600'
    }
  ];

  return (
<<<<<<< HEAD
    <section className="py-4 md:py-6 lg:py-8 bg-white relative overflow-hidden shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.15)]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
=======
    <section className="py-12 md:py-16 bg-white relative overflow-hidden shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
>>>>>>> 36b21241eb5ef038c7a0d71180ae6768fa1d273e
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
<<<<<<< HEAD
          className="text-center mb-3 md:mb-4"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-1 md:mb-2 tracking-tight leading-tight px-2 sm:px-4">
            How <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">VaranasiHub</span> Works
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto font-light leading-relaxed px-2 sm:px-4">
=======
          className="text-center mb-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-4 tracking-tight leading-tight px-4">
            How <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">VaranasiHub</span> Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed px-4">
>>>>>>> 36b21241eb5ef038c7a0d71180ae6768fa1d273e
            Get your business online in just 4 simple steps
          </p>
        </motion.div>

<<<<<<< HEAD
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
>>>>>>> 36b21241eb5ef038c7a0d71180ae6768fa1d273e
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
<<<<<<< HEAD
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div className="relative bg-white rounded-lg md:rounded-2xl p-2 sm:p-3 md:p-5 border-2 border-gray-200 h-full hover:border-blue-300 hover:shadow-xl transition-all duration-500 overflow-hidden group/card">
                  <div className="absolute top-0 right-0 w-20 md:w-24 h-20 md:h-24 bg-gradient-to-br from-blue-500 to-purple-500 opacity-5 rounded-full blur-3xl -z-10 group-hover/card:opacity-15 transition-opacity duration-500"></div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg md:rounded-xl flex items-center justify-center mb-2 md:mb-3 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 mx-auto">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div className="text-center mb-1 md:mb-2">
                    <span className="text-2xl sm:text-3xl md:text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-lg font-bold text-gray-900 mb-1 md:mb-2 text-center">{step.title}</h3>
                  <p className="text-xs sm:text-xs md:text-sm text-gray-600 text-center leading-relaxed">{step.description}</p>
=======
                whileHover={{ y: -12, scale: 1.02 }}
                className="relative group"
              >
                <div className="relative bg-white rounded-3xl p-8 border-2 border-gray-200 h-full hover:border-blue-300 hover:shadow-xl transition-all duration-500 overflow-hidden group/card">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 opacity-5 rounded-full blur-3xl -z-10 group-hover/card:opacity-15 transition-opacity duration-500"></div>
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-center mb-4">
                    <span className="text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 text-center">{step.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">{step.description}</p>
>>>>>>> 36b21241eb5ef038c7a0d71180ae6768fa1d273e
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

