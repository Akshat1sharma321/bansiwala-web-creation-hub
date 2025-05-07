
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting Bansiwala Sweets. We'll get back to you soon!",
    });
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sweet-dark">
            Get in <span className="text-sweet">Touch</span>
          </h2>
          <p className="text-lg text-sweet-dark/70 max-w-2xl mx-auto">
            Have questions about our sweets or want to place an order? Contact
            us today!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="bg-sweet-light p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6 text-sweet-dark">
                Contact Information
              </h3>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-sweet/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-sweet" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sweet-dark">Address</h4>
                    <p className="text-sweet-dark/70">
                      {" "}
                      H - 33/58 Rohini, Sector 3
                      <br /> Vishram Chowk, Delhi, 110085
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sweet/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-sweet" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sweet-dark">Phone</h4>
                    <p className="text-sweet-dark/70">+91 9876543210</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sweet/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-sweet" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sweet-dark">Email</h4>
                    <p className="text-sweet-dark/70">
                      info@bansiwalasweets.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-bold text-sweet-dark mb-4">
                  Business Hours
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sweet-dark/70">
                  <div>Monday - Friday:</div>
                  <div>8:00 AM - 8:00 PM</div>
                  <div>Saturday - Sunday:</div>
                  <div>9:00 AM - 7:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-sweet-dark">
                Send us a Message
              </h3>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-sweet-dark mb-1"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-sweet-dark mb-1"
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-sweet-dark mb-1"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[120px]"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="mt-6 bg-sweet hover:bg-sweet-dark text-white"
              >
                Send Message <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
