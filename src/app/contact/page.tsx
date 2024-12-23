import ContactHeroPlus from "../components/ContactHeroPlus";

export default function ContactPage() {
    return (
        <main className="md:pt-32">
            <ContactHeroPlus />
            <div className="mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">Contact Us</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-6 text-white/80">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
                            <p className=" mb-6 font-medium text-gray-900 dark:text-white">
                                Were here to help with your construction and infrastructure needs. Reach out to us through any of these channels:
                            </p>
                            
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium text-gray-900 dark:text-white">Address</h3>
                                    <p className="font-medium text-gray-900 dark:text-white">Timisoara, Bvd. Dr. Victor Babes, nr. 10/a<br />Romania</p>
                                </div>
                                
                                {/* <div>
                                    <h3 className="font-medium text-gray-900 dark:text-white">Phone</h3>
                                    <p className="font-medium text-gray-900 dark:text-white">+49 (0) 30 1234567</p>
                                </div> */}
                                
                                <div>
                                    <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
                                    <p className="font-medium text-gray-900 dark:text-white">office@strassenbau.com.ro</p>
                                </div>
                                
                                {/* <div>
                                    <h3 className="font-medium text-gray-900 dark:text-white">Business Hours</h3>
                                    <p className="font-medium text-gray-900 dark:text-white">Monday - Friday: 8:00 - 17:00</p>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        {/* <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-900 dark:text-white mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-white/30"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-gray-900 dark:text-white mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-white/30"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="subject" className="block text-gray-900 dark:text-white mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-white/30"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-gray-900 dark:text-white mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-white/30"
                                    required
                                ></textarea>
                            </div>
                            
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-gray-200/30dark:bg-white/10  hover:bg-white/20 text-gray-900 dark:text-white font-medium rounded-lg transition-colors"
                            >
                                Send Message
                            </button>
                        </form> */}
                    </div>
                </div>
            </div>
        </main>
    );
}
