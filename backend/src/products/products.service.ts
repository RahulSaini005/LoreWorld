import { Injectable } from '@nestjs/common';

export type Product = {
  sourceId: string;
  title: string;
  author: string;
  price: string;
  imageUrl: string;
  category: string;
};

@Injectable()
export class ProductsService {
  private products: Product[] = [
    { sourceId: 'prod-1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: '$12.99', imageUrl: 'https://picsum.photos/200/300?random=1', category: 'fiction' },
    { sourceId: 'prod-2', title: '1984', author: 'George Orwell', price: '$14.50', imageUrl: 'https://picsum.photos/200/300?random=2', category: 'fiction' },
    { sourceId: 'prod-3', title: 'To Kill a Mockingbird', author: 'Harper Lee', price: '$13.75', imageUrl: 'https://picsum.photos/200/300?random=3', category: 'fiction' },
    { sourceId: 'prod-4', title: 'A Brief History of Time', author: 'Stephen Hawking', price: '$18.00', imageUrl: 'https://picsum.photos/200/300?random=4', category: 'science' },
    { sourceId: 'prod-5', title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', price: '$20.00', imageUrl: 'https://picsum.photos/200/300?random=5', category: 'non-fiction' },
    { sourceId: 'prod-6', title: 'The Subtle Art of Not Giving a F*ck', author: 'Mark Manson', price: '$16.99', imageUrl: 'https://picsum.photos/200/300?random=6', category: 'non-fiction' },
    { sourceId: 'prod-7', title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', price: '$11.50', imageUrl: 'https://picsum.photos/200/300?random=7', category: 'children' },
    { sourceId: 'prod-8', title: 'The Hobbit', author: 'J.R.R. Tolkien', price: '$15.00', imageUrl: 'https://picsum.photos/200/300?random=8', category: 'children' },
    { sourceId: 'prod-9', title: 'The Catcher in the Rye', author: 'J.D. Salinger', price: '$13.25', imageUrl: 'https://picsum.photos/200/300?random=9', category: 'fiction' },
    { sourceId: 'prod-10', title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', price: '$17.50', imageUrl: 'https://picsum.photos/200/300?random=10', category: 'science' },
    { sourceId: 'prod-11', title: 'The Alchemist', author: 'Paulo Coelho', price: '$12.75', imageUrl: 'https://picsum.photos/200/300?random=11', category: 'fiction' },
    { sourceId: 'prod-12', title: 'Educated', author: 'Tara Westover', price: '$18.25', imageUrl: 'https://picsum.photos/200/300?random=12', category: 'non-fiction' },
    { sourceId: 'prod-13', title: 'The Little Prince', author: 'Antoine de Saint-Exupéry', price: '$11.00', imageUrl: 'https://picsum.photos/200/300?random=13', category: 'children' },
    { sourceId: 'prod-14', title: 'Cosmos', author: 'Carl Sagan', price: '$19.00', imageUrl: 'https://picsum.photos/200/300?random=14', category: 'science' },
    { sourceId: 'prod-15', title: 'Pride and Prejudice', author: 'Jane Austen', price: '$13.50', imageUrl: 'https://picsum.photos/200/300?random=15', category: 'fiction' },
    { sourceId: 'prod-16', title: 'Brave New World', author: 'Aldous Huxley', price: '$14.75', imageUrl: 'https://picsum.photos/200/300?random=16', category: 'fiction' },
    { sourceId: 'prod-17', title: 'The Power of Habit', author: 'Charles Duhigg', price: '$16.50', imageUrl: 'https://picsum.photos/200/300?random=17', category: 'non-fiction' },
    { sourceId: 'prod-18', title: 'Green Eggs and Ham', author: 'Dr. Seuss', price: '$10.99', imageUrl: 'https://picsum.photos/200/300?random=18', category: 'children' },
    { sourceId: 'prod-19', title: 'Fahrenheit 451', author: 'Ray Bradbury', price: '$13.25', imageUrl: 'https://picsum.photos/200/300?random=19', category: 'fiction' },
    { sourceId: 'prod-20', title: 'The Selfish Gene', author: 'Richard Dawkins', price: '$18.75', imageUrl: 'https://picsum.photos/200/300?random=20', category: 'science' },
    { sourceId: 'prod-21', title: 'Moby Dick', author: 'Herman Melville', price: '$15.25', imageUrl: 'https://picsum.photos/200/300?random=21', category: 'fiction' },
    { sourceId: 'prod-22', title: 'Guns, Germs, and Steel', author: 'Jared Diamond', price: '$20.50', imageUrl: 'https://picsum.photos/200/300?random=22', category: 'non-fiction' },
    { sourceId: 'prod-23', title: 'Charlotte\'s Web', author: 'E.B. White', price: '$12.00', imageUrl: 'https://picsum.photos/200/300?random=23', category: 'children' },
    { sourceId: 'prod-24', title: 'The Origin of Species', author: 'Charles Darwin', price: '$21.00', imageUrl: 'https://picsum.photos/200/300?random=24', category: 'science' },
    { sourceId: 'prod-25', title: 'Jane Eyre', author: 'Charlotte Brontë', price: '$13.75', imageUrl: 'https://picsum.photos/200/300?random=25', category: 'fiction' },
    { sourceId: 'prod-26', title: 'Animal Farm', author: 'George Orwell', price: '$12.50', imageUrl: 'https://picsum.photos/200/300?random=26', category: 'fiction' },
    { sourceId: 'prod-27', title: 'Deep Work', author: 'Cal Newport', price: '$17.25', imageUrl: 'https://picsum.photos/200/300?random=27', category: 'non-fiction' },
    { sourceId: 'prod-28', title: 'Where the Wild Things Are', author: 'Maurice Sendak', price: '$11.50', imageUrl: 'https://picsum.photos/200/300?random=28', category: 'children' },
    { sourceId: 'prod-29', title: 'Dracula', author: 'Bram Stoker', price: '$14.00', imageUrl: 'https://picsum.photos/200/300?random=29', category: 'fiction' },
    { sourceId: 'prod-30', title: 'A Short History of Nearly Everything', author: 'Bill Bryson', price: '$19.50', imageUrl: 'https://picsum.photos/200/300?random=30', category: 'science' },
    { sourceId: 'prod-31', title: 'War and Peace', author: 'Leo Tolstoy', price: '$21.75', imageUrl: 'https://picsum.photos/200/300?random=31', category: 'fiction' },
    { sourceId: 'prod-32', title: 'The Wright Brothers', author: 'David McCullough', price: '$18.50', imageUrl: 'https://picsum.photos/200/300?random=32', category: 'non-fiction' },
    { sourceId: 'prod-33', title: 'The Tale of Peter Rabbit', author: 'Beatrix Potter', price: '$10.99', imageUrl: 'https://picsum.photos/200/300?random=33', category: 'children' },
    { sourceId: 'prod-34', title: 'Silent Spring', author: 'Rachel Carson', price: '$17.75', imageUrl: 'https://picsum.photos/200/300?random=34', category: 'science' },
    { sourceId: 'prod-35', title: 'Wuthering Heights', author: 'Emily Brontë', price: '$13.50', imageUrl: 'https://picsum.photos/200/300?random=35', category: 'fiction' },
    { sourceId: 'prod-36', title: 'Meditations', author: 'Marcus Aurelius', price: '$15.50', imageUrl: 'https://picsum.photos/200/300?random=36', category: 'non-fiction' },
    { sourceId: 'prod-37', title: 'The Cat in the Hat', author: 'Dr. Seuss', price: '$11.25', imageUrl: 'https://picsum.photos/200/300?random=37', category: 'children' },
    { sourceId: 'prod-38', title: 'The Elegant Universe', author: 'Brian Greene', price: '$18.25', imageUrl: 'https://picsum.photos/200/300?random=38', category: 'science' },
    { sourceId: 'prod-39', title: 'Little Women', author: 'Louisa May Alcott', price: '$14.75', imageUrl: 'https://picsum.photos/200/300?random=39', category: 'fiction' },
    { sourceId: 'prod-40', title: 'The Innovators', author: 'Walter Isaacson', price: '$19.50', imageUrl: 'https://picsum.photos/200/300?random=40', category: 'non-fiction' },
  ];
 async getProducts(category?: string): Promise<Product[]> {
    if (!category) return this.products;
    const c = category.toLowerCase();
    return this.products.filter((p) => p.category.toLowerCase().includes(c));
  }

  // Return single product by sourceId
  async getProductBySourceId(sourceId: string): Promise<Product | null> {
    return this.products.find((p) => p.sourceId === sourceId) ?? null;
  }

  // Helper to add product (optional)
  async createProduct(prod: Product) {
    const exists = this.products.find((p) => p.sourceId === prod.sourceId);
    if (!exists) this.products.push(prod);
    return prod;
}
};