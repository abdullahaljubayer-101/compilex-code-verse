
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/sonner';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    toast.success("Message sent successfully! We'll get back to you soon.");
    console.log(data);
    form.reset();
  };

  return (
    <div className="min-h-screen bg-compliex-dark">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions or need support? We're here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark mb-8">
                <CardHeader>
                  <CardTitle className="text-white">Send us a Message</CardTitle>
                  <CardDescription className="text-gray-400">
                    Fill out the form below and we'll respond within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your full name"
                                className="bg-compliex-dark border-compliex-gray-dark"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-compliex-red text-xs" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="your@email.com"
                                className="bg-compliex-dark border-compliex-gray-dark"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-compliex-red text-xs" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Subject</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="What's this about?"
                                className="bg-compliex-dark border-compliex-gray-dark"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-compliex-red text-xs" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us more about your inquiry..."
                                rows={5}
                                className="bg-compliex-dark border-compliex-gray-dark"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-compliex-red text-xs" />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full bg-compliex-red hover:bg-compliex-red-dark text-white"
                      >
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="h-6 w-6 text-compliex-red mr-3" />
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                  </div>
                  <p className="text-gray-300">support@compliex.com</p>
                  <p className="text-gray-400 text-sm mt-1">We typically respond within 24 hours</p>
                </CardContent>
              </Card>

              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Phone className="h-6 w-6 text-compliex-red mr-3" />
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                  </div>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-gray-400 text-sm mt-1">Mon-Fri, 9AM-6PM EST</p>
                </CardContent>
              </Card>

              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 text-compliex-red mr-3" />
                    <h3 className="text-lg font-semibold text-white">Office</h3>
                  </div>
                  <p className="text-gray-300">123 Tech Street</p>
                  <p className="text-gray-300">San Francisco, CA 94105</p>
                  <p className="text-gray-300">United States</p>
                </CardContent>
              </Card>

              <Card className="bg-compliex-dark-lighter border-compliex-gray-dark">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MessageSquare className="h-6 w-6 text-compliex-red mr-3" />
                    <h3 className="text-lg font-semibold text-white">Live Chat</h3>
                  </div>
                  <p className="text-gray-300">Available 24/7 on our platform</p>
                  <Button className="mt-3 bg-compliex-red hover:bg-compliex-red-dark text-white">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
