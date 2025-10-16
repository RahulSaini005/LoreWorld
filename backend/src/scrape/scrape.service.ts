import axios from 'axios';
import * as cheerio from 'cheerio';

type Product = {
  title: string;
  author: string;
  price: string;
  imageUrl: string;
  sourceId: string;
};

export async function scrapeWorldOfBooks(category?: string): Promise<Product[]> {
  try {
    const url = category 
      ? `https://www.worldofbooks.com/${category}`
      : 'https://www.worldofbooks.com/books';
    
    const { data: html } = await axios.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' } 
    });
    
    const $ = cheerio.load(html);
    const products: Product[] = [];

    $('.product-card').each((i, el) => {
      const title = $(el).find('.product-title').text().trim();
      const author = $(el).find('.product-author').text().trim();
      const price = $(el).find('.product-price').text().trim();
      const imageUrl = $(el).find('img').attr('src') || '';
      const sourceId = $(el).attr('data-id') || '';

      if (title && sourceId) {
        products.push({ title, author, price, imageUrl, sourceId });
      }
    });

    return products;

  } catch (err) {
    console.error('Scraping error:', err);
    return [];
  }
}
