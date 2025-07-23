import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Container from '../components/shared/Container';
import Button from '../components/ui/Button';

const ContactPage = () => (
  <>
    <Header />
    <main className="py-16">
      <Container className="max-w-lg">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Contact Us</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
          />
          <textarea
            placeholder="How can we help?"
            className="w-full rounded-md border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
          />
          <Button type="submit">Send Message</Button>
        </form>
      </Container>
    </main>
    <Footer />
  </>
);

export default ContactPage;
