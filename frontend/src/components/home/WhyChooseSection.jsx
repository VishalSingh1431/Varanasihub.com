import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Users, Zap, Rocket, MessageCircle, Star, CheckCircle, DollarSign } from 'lucide-react';
=======
import { Users, Zap, Rocket, MessageCircle, Star, CheckCircle } from 'lucide-react';
>>>>>>> 36b21241eb5ef038c7a0d71180ae6768fa1d273e

const WhyChooseSection = () => {
  const whyPoints = [
    { text: 'Reach real customers in Varanasi', icon: Users },
    { text: 'Zero technical skills needed', icon: Zap },
    { text: 'Your business gets a clean, fast website', icon: Rocket },
    { text: 'One-tap WhatsApp & Call buttons', icon: MessageCircle },
<<<<<<< HEAD
    { text: 'Perfect for shops, clinics, homestays, services', icon: Star },
    { text: 'Affordable pricing starting at ₹1,000/year', icon: DollarSign }
  ];

  return (
    <section className="py-4 md:py-6 lg:py-8 bg-white relative overflow-hidden shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.15)]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
=======
    { text: 'Perfect for shops, clinics, homestays, services', icon: Star }
  ];

  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.15)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
>>>>>>> 36b21241eb5ef038c7a0d71180ae6768fa1d273e
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
<<<<<<< HEAD
          className="text-center mb-3 md:mb-4"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-1 md:mb-2 tracking-tight leading-tight">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">VaranasiHub</span>?
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 font-light">Everything you need to succeed online</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
=======
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">VaranasiHub</span>?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light">Everything you need to succeed online</p>
        </motion.div>

        <div className="space-y-4">
>>>>>>> 36b21241eb5ef038c7a0d71180ae6768fa1d273e
          {whyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
<<<<<<< HEAD
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-lg md:rounded-xl p-3 sm:p-4 border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center h-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-2 sm:mb-3 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-900 font-semibold mb-1 sm:mb-2 flex-1">{point.text}</p>
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
=======
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 10, scale: 1.01 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-6 border-2 border-gray-200 flex items-center gap-6 hover:border-blue-300 hover:shadow-xl transition-all duration-500">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-xl text-gray-900 font-semibold flex-1">{point.text}</p>
                  <CheckCircle className="w-7 h-7 text-green-500 flex-shrink-0" />
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

export default WhyChooseSection;

