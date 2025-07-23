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
    <main className="py-16 bg-gray-50">
      <Container>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Products</h1>
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((p) => (
            <Card key={p.id} title={p.name}>
              <p className="mt-2 text-gray-600">{p.description}</p>
              <p className="mt-4 text-lg font-semibold">{p.price}</p>
              <Button className="mt-4 w-full">Buy Now</Button>
            </Card>
          ))}
        </div>
      </Container>
    </main>
    <Footer />
  </>
);

export default ProductsPage;
