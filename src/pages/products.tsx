import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Container from '../components/shared/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import products from '../data/products.json';

const ProductsPage = () => (
  <>
    <Header />
    <main className="py-16 text-white">
      <Container>
        <h1 className="text-4xl mb-12 text-center text-white">Our Solutions</h1>

        {Object.entries(products).map(([category, items]) => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 capitalize text-white">
              {category.replace(/([A-Z])/g, ' $1')}
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {items.map((p) => (
                <Card key={p.id} title={p.name} className="text-white">
                  <p className="mt-2 text-white">{p.description}</p>
                  <p className="mt-4 text-2xl font-semibold text-white">{p.price}</p>
                  <Button className="mt-6 w-full">Buy Now</Button>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </main>
    <Footer />
  </>
);

export default ProductsPage;
