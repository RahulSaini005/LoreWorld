import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true, unique: true })
  sourceId: string; 

  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  price: string;

  @Prop()
  imageUrl: string;

  @Prop()
  sourceUrl: string;

  @Prop()
  category: string; 
}

export const ProductSchema = SchemaFactory.createForClass(Product);

