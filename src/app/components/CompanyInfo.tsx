export default function CompanyInfo() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Specializations Column */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white mb-6">Our Specializations</h2>
                <ul className="space-y-3 text-white/80">
                    <li>• Civil and industrial constructions</li>
                    <li>• Thermal, electrical and sanitary installations</li>
                    <li>• Interior and exterior finishes</li>
                    <li>• Road and bridge construction</li>
                    <li>• Infrastructure development</li>
                    <li>• Project management and consulting</li>
                </ul>
            </div>

            {/* Contact Information Column */}
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
                <div className="space-y-3 text-white/80">
                    <p><span className="font-medium">Address:</span><br />
                    Hauptstraße 123<br />
                    11111 Timisoara, Romania</p>
                    
                    <p><span className="font-medium">Phone:</span><br />
                    +49 (0) 30 1234567</p>
                    
                    <p><span className="font-medium">Email:</span><br />
                    info@strassenbau.com.ro</p>
                    
                    <p><span className="font-medium">Hours:</span><br />
                    Monday - Friday: 8:00 - 17:00</p>
                </div>
            </div>
        </div>
    );
}
