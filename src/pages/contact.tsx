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
        <h1 className="text-3xl mb-8 text-center">Contact Us</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md border-gray-600 bg-gray-800 px-4 py-2 focus:border-accent focus:ring-accent"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md border-gray-600 bg-gray-800 px-4 py-2 focus:border-accent focus:ring-accent"
          />
          <textarea
            placeholder="How can we help?"
            rows={4}
            className="w-full rounded-md border-gray-600 bg-gray-800 px-4 py-2 focus:border-accent focus:ring-accent"
          />
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </Container>
    </main>
    <Footer />
  </>
);

export default ContactPage;